---
layout:     post
title:      Difference between IoC and DI
date:       2019-10-07 16:01:35 +0800
author:     Leo
categories: Learn
tags:       Misc
---
The main goal of Inversion of control and Dependency Injection is to remove dependencies of an application. This makes the system more decoupled and maintainable.

First let’s try to understand IOC (Inversion of control). If you go back to old computer programming days, program flow used to run in its own control. For instance let’s consider a simple chat application flow

1.  End user sends chat message.
2.  User continues with his work ahead.
3.  Application listens to events. If a message arrives event is activated and message is received and displayed.

If you see the program flow it’s not sequential, its event based. So now the control is inverted. So rather than the internal program controlling the flow, events drive the program flow. Event flow approach is more flexible as there's no direct invocation which leads to more flexibility.

A word of caution here, do not conclude that IOC are implemented by only events. You can delegate the control flow by callback delegates, observer pattern, events, DI (Dependency injection) and lot of other ways.

IOC (Inversion of control) is a general parent term while DI (Dependency injection) is a subset of IOC. IOC is a concept where the flow of application is inverted. So for example rather than the caller calling the method.

```
SomeObject.Call();
```

Will get replaced with an event based approach as shown below.

```
SomeObject.WhenEvent += Call();
```

In the above code the caller is exposing an event and when that event occurs he is taking action. It’s based on the Hollywood principle “Don’t call us we will call you”. In Hollywood when artists used to give auditions the judges would say them “Don’t call us we will call you”.

The above approach makes code more flexible as the caller is not aware of the object methods and the object is not aware of caller program flow.

DI provides objects that an object needs. So rather than the dependencies construct themselves they are injected by some external means. For instance let’s say we have the following below class “Customer” who uses a “Logger” class to log errors. So rather than creating the “Logger” from within the class, you can inject the same via a constructor as shown in the below code snippet.

The biggest benefit achieved by the above approach is “Decoupling”. You can now invoke the customer object and pass any kind of “Logger” object as shown in the below code.

```
Customer obj = new Customer(new EmailLogger());
Customer obj1 = new Customer(new EventViewerLogger());
```

So summarizing the differences.

**Inversion of control**  : It’s a generic term and implemented in several ways (events, delegates etc).

**Dependency injection**  : DI is a subtype of IOC and is implemented by constructor injection, setter injection or method injection.


