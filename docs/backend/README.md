# Backend-as-a-service
Traditionally any web application has a presentation layer, the frontend and a data access layer, the backend. The modular architecture of Appup allows you to define the individual elements of each independently and connect them together basis the use case at any time later. This flexiblity allows you to efficiently handle any change requests in your application later and with minimal turn-around time.
You will learn how to use backend features to realize your business logic here.

The main toolset we are going to use consists of **Workflows**, **Triggers** and **Filters**. You are also going to be able to utilize numerous **Plugins** to extend capabilities of builtin workflows steps.

![Backend Overview](./backend.png)

Let us take a quick look at each of them:

Workflow: It is the business logic that needs to be executed at the occurrence of specific business events.

Triggers: They correpond to the different business events that must be handled by invoking the respective workflows.

Filters: They are actions that must be run before or after a workflow to handle an event is invoked.

Plugins: They are hooks into the latest technologies and provide you with out of the box integration with them.
