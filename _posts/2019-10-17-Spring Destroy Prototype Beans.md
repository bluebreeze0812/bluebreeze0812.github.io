---
layout:     post
title:      Spring Destroy Prototype Beans
date:       2019-10-17 01:33:56 +0800
author:     Leo
categories: Learn
tags:       Java Spring
---
In `Spring`, beans which have been declared as `scope="prototype"` will not be destroyed when the whole application has destroyed, or the `main` method has reached to its end.

For example, if a prototype bean A has implemented interface `DisposableBean`, its `destroy` method won't call automatically when the Spring application container has been destroyed, like `AbstractApplicationContext.destroy()` or `AbstractApplicationContext.registerShutDownHook()`.

It's because that as long as the prototype bean does not hold a reference to another resource itself, such as a database connection or a session object, it will get garbage collected as soon as all references to the object have been removed or the object goes out of scope. Therefore it's usually not necessary to explicitly destroy a prototype bean.

However, in the case where a memory leak may occur as described above, prototype beans can be destroyed by creating a singleton bean post-processor whose destruction method explicitly calls the destruction hooks of your prototype beans. Because the post-processor is itself of singleton scope, its destruction hook will get invoked by Spring.

Implement the following interfaces:

1. `ApplicationContextAware`

    This interface provides a callback method which receives a `ApplicationContext` object. This object is used in the post-processor class to identify all prototype beans via its `.isPrototype(String beanName)` method.

2. `DisposableBean`

    This interface provides a `destroy()` callback method invoked by the Spring container. We will call the `destroy()` methods of all our prototype beans from within this method.

3. `BeanPostProcessor`

    Implementing this interface provides access to post-process callbacks from within which, we prepare an internal `List<Object>` of all prototype objects instantiated by the Spring container. We will later loop through this `List<Object>` to destroy each of our prototype beans.

4. Finally implement the `DisposableBean` interface in each of your prototype beans, providing the `destroy()` method required by this contract.

```java
package app;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;

public class DestroyPrototypeBeanPostProcessor implements BeanPostProcessor, DisposableBean, ApplicationContextAware {

	private ApplicationContext context;
	List<Object> prototypeBeans = new LinkedList<Object>();

	public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
		if (context.isPrototype(beanName)) {
			synchronized (prototypeBeans) {
				prototypeBeans.add(bean);
			}
		}

		return bean;
	}

	public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
		this.context = applicationContext;
	}

	public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
		return bean;
	}

	public void destroy() throws Exception {
		synchronized (prototypeBeans) {
            for (Object bean : prototypeBeans) {
                if (bean instanceof DisposableBean) {
                    DisposableBean disposable = (DisposableBean)bean;
                    try {
                        disposable.destroy();
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
            prototypeBeans.clear();
        }
	}

}
```
