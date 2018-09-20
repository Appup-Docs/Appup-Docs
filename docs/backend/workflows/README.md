# Workflows

Workflows allow you to define your business logic with nodes called **Steps** dragged and dropped with your mouse on an empty canvas. It is a visual tool and allows you to sketch a pipeline of various operations without writing a single line of code.

You will be creating these multiple times, for each feature your app needs. Therefore it is best to categorize your workflows in a logical manner to be able keep track of what belongs where. Creating a category is as simple as giving a name.

Click Backend dropdown at the top right of your screen and choose **Category**.

**TODO : This is currently under Frontend dropdown but should be under Backend as far as I know.**

![Create Category](./category.png)

---

The presented screen allows you to manage all your categories. Simply click on **Add Category** button to create your first category. You may create as many categories as you need in the future.

![Add Category](./addcategory.png)

---

Now you are ready to create your first workflow. Get back to *Home/Developer* screen and click **Workflows** to start creating your first workflow. You choose REST, CRON and EVENT workflows. These define how your workflow will be triggered. For now, click REST. You can find more info about these under [Triggers](../triggers/) section.

**TODO : Cron and Event Workflows are missing in this screenshot.**

![Add Workflow](./addworkflow.png)

---

You will be presented with an empty canvas, ready to fill with **Steps** of your needings.

![Edit Workflow](./editworkflow.png)

On the left, you can find many steps to choose, sorted by common usage. You can also search for steps if you can't find the one you like on the left by simply clicking on the hourglass button. We are going to start drag and dropping these.

## FTL and Handlebars

Appup currently supports two templating languages to use data inside workflows.

1. [Free Marker Templates (FTL)](https://freemarker.apache.org/)
2. [Handlebars](https://handlebarsjs.com/)

::: danger Note
Use ![Tripple Curly](./tripplecurly.png) instead of ![Double Curly](./doublecurly.png) in order not to accidentally escape your strings in Handlebars.
:::

The expression inside your templating choice can be any variable you set with a *SetVar* step.

We suggest you to use Handlebars for simple request/response logic. For complex database operations such as SQL queries, FTLs become handy.

## Steps

Steps are, lego like, small, reusable and independent blocks of functionality that can be stitched with each other to give a complete end-to-end application behavior.

For each step you drop in your canvas, you have slots to connect previous and next steps to each other. Orange slots represents incoming flow. Green slots represents outgoing success or failure slots. By connecting these slots with your mouse, you can define any kind of complex logic in your workflows.

![Steps](./steps.png)

---

There are many options for you to utilize as steps.

### Database Steps
These are steps which execute SQL commands. You can use any templating option to form your query string.

SQL Select Example:
![SQL Select](./sqlselect.png)

### Auth Steps
These steps handle authentication with JWTs, OAuth, cookies and sessons.

Set Cookie Example:
![Set Cookie](./setcookie.png)

### Developer Steps
These steps allow you to run custom code during the flow. Currently Java and Javascript is supported.

* [Javascript Steps](/docs/backend/plugins/)
* [Java Steps](/docs/backend/plugins/)

### Amazon Steps
These steps allow you to utilize many functionality provided by AWS including S3, SES and many other.

Send Email Example:
![Send Email](./sendemail.png)

### Google Steps
These steps allow you to utilize many functionality provided by GCP including GAE and PubSub.

**TODO : Example needed.**

### Utility Steps
These steps are a bunch of utilities you may use to implement your business logic. You can set variables, check conditionals and branch according to specific cases.

Set Variable Example:
![Set Variable](./setvar.png)

## Sessions
A session is the user's interaction with a website within a given time frame, as measured from the first touchpoint or login with the web application to the logout or exit from the web application.

You can maintain variables during the user's visit inside a storage allocated for the session.

Set Session Example:
![Set Session](./setsession.png)
