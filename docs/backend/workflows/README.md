# Workflows

Workflows allow you to define your business logic with nodes called **Steps** dragged and dropped with your mouse on an empty canvas. It is a visual tool and allows you to sketch a pipeline of various operations without writing a single line of code.
This helps breaks down an application functionality intuitively into several logical steps.  You can map this against the triggering event or action and in minutes take care of the complete end-to-end use case. It is that simple.

You will be creating these multiple times, for each feature your app needs. Therefore it is best to categorize your workflows in a logical manner to be able keep track of what belongs where. Pick and select items from a category to create several different use cases. Stack the steps together like lego blocks to create more robust & comprehensive functionalities. Creating a category is as simple as giving a name.

Click Backend dropdown at the top right of your screen and choose **Category**.

![Create Category](./category.png)

---

The presented screen allows you to manage all your categories. Simply click on **Add Category** button to create your first category. You may create as many categories as you need in the future.

![Add Category](./addcategory.png)

---

Now you are ready to create your first workflow. Get back to *Home/Developer* screen and click **Workflows** to start creating your first workflow. You choose REST, CRON and EVENT workflows. These define how your workflow will be triggered. For now, click REST. You can find more info about these under [Triggers](../triggers/) section.

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

#### Database Steps
These are steps which execute SQL commands. You can use any templating option to form your query string.

* [SQL Select](./#sql-select)
* [SQL Select One](./#sql-select-one)
* [SQL Insert](./#sql-insert)
* [SQL Update](./#sql-update)
* [SQL Delete](./#sql-delete)
* [SQL Import](./#sql-import)
* [SQL Export](./#sql-export)
* [Invoke Stored Procedure](./#invoke-stored-procedure)
* [Template](./#template)


#### Auth Steps
These steps handle authentication with JWTs, OAuth, cookies and sessons.

* [RB Refresh Token](./#fb-refresh-token)
* [JWT Step](./#jwt-step)
* [JWT Validation](./#jwt-validation)
* [OAuthNewToken](./#oauthnewtoken)
* [OAuth](./#oauth)
* [OAuthToken](./#oauthtoken)
* [Redirect](./#redirect)
* [Set Session](./#set-session)
* [Set Cookie](./#set-cookie)

#### Developer Steps
These steps allow you to run custom code during the flow. Currently Java and Javascript is supported.

* [Java Code Executor](./#java-code-executor)
* [JS Plugin Code](./#js-plugin-code)
* [JS Code](./#js-code)
* [JS Uploaded Code](./#js-uploaded-code)
* [jedis delete](./#jedis-delete)
* [jedis get](./#jedis-get)
* [jedis put](./#jedis-put)
* [Logs](./#logs)


#### Amazon Steps
These steps allow you to utilize many functionality provided by AWS including S3, SES and many other.

* [S3 File Upload](./#s3-file-upload)
* [S3 File Download](./#s3-file-download)
* [Send Email](./#send-email)
* [Send Email with Attachment](./#send-email-with-attachment)
* [SNS Request Answer](./#sns-request-answer)

#### Google Steps
These steps allow you to utilize many functionality provided by GCP including GAE and PubSub.

* [GAE Select](./#gae-select)
* [GAE Delete](./#gae-delete)
* [Google PubSup](./#google-pubsup)

#### Utility Steps
These steps are a bunch of utilities you may use to implement your business logic. You can set variables, check conditionals and branch according to specific cases.

* [Condition](./#condition)
* [Convert Data](./#convert-data)
* [Emit Event](./#emit-event)
* [Workflow Execute](./#workflow-execute)
* [If Condition](./#if-condition)
* [K8 Deploy](./#k8-deploy)
* [Basic OAuth](./#basic-oauth)
* [Basic OAuth 1.0](./#basic-oauth-1.0)
* [Simple REST](./#simple-rest)
* [REST](./#rest)
* [S3 PreSign URL](./#s3-presign-url)
* [Send Response](./#send-response)
* [Set Header](./#set-header)
* [Set Var Multi](./#set-var-multi)
* [Set Var](./#set-var)
* [Switch Case](./#switch-case)

### Rest
A REST step is used for calling third party API endpoints inside of your workflow. In order to configure a REST step, you have these tabs where each of them exposes a bunch configurations to tailor the request according to your preferences.

#### Settings
| Step Configuration | Purpose                                                           |
| ------------------ | ----------------------------------------------------------------- |
| URL                | Choose a URL for the REST request                                  |
| Method Type        | Select what kind of HTTP request you want to make                 |
| Query Parameters   | Add as many query parameters as you want                          |
#### Raw Body
| Step Configuration | Purpose                                                           |
| ------------------ | ----------------------------------------------------------------- |
| Some Field         | Select one of the databases you configured under plugins sections |
#### Authentication
| Step Configuration | Purpose                                                           |
| ------------------ | ----------------------------------------------------------------- |
| Some Field         | Select one of the databases you configured under plugins sections |
#### Headers
| Step Configuration | Purpose                                                               |
| ------------------ | --------------------------------------------------------------------- |
| Some Field         | Select one of the databases you configured under plugins sections     |
#### Body
| Step Configuration | Purpose                                                           |
| ------------------ | ----------------------------------------------------------------- |
| Some Field         | Select one of the databases you configured under plugins sections |
#### More Settings
| Step Configuration | Purpose                                                           |
| ------------------ | ----------------------------------------------------------------- |
| Some Field         | Select one of the databases you configured under plugins sections |


TODO : add more step details below here like
### Step Name
#### Step Tab 1
#### Step Tab 2
#### Step Tab 3
