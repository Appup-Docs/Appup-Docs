# Schedule.ly

## Overview
In today`s world where communication happens across multiple channels, managing meetings well is critical to success in business. Effective collaboration among different stakeholders is the
backbone of any business today.

Schedule.ly allows you to setup meetings and manage them easily and collaboratively.

**Let's build a simple version of it together.**

## Setup Database
Proceed to [Hello MySQL](/docs/examples/hellomysql/) tutorial if you'd like to know how to setup a database for your projects.

## Signup Flow
Since each user is going to have his/her own calendar, there is no escape from a good ol' sign up form. Luckily, Appup comes with a builtin component which handles form validation and submit quite easily.

![signup](./signup.png)

### Workflow
First, we need to create a workflow to save user credentials into our database.

Go to Workflows and create new workflow with the name `Insert Workflow`. This will allow us to save all kinds of data in a unified manner. Before we specify the steps, save the Workflow and create a new Trigger for it.

![signup trigger](./signuptrigger.png)

Fill the trigger with value given below.

| Fields     | Values                |
| ---------- | --------------------- |
| Name       | `createTrigger`       |
| Category   | Choose a category     |
| Method     | POST                  |
| Expression | `create/{table_name}` |
| Workflow   | `Insert Workflow`     |

This trigger will capture all kinds of data inserting AJAX calls which will be helpful in the future.

Now go back to your previously created `Insert Workflow` and fill it with the steps shown below.

![insert workflow](./insertworkflow.png)

We are using an SQL Insert step to insert data into our database tables. Fill it with values given below.

| Fields   | Values             |
| -------- | ------------------ |
| Database | Select your plugin |
| Template | Handlebar          |
| Result   | `insert_output`    |
| Query    | Explained below    |

Copy the below lines into the **Query** box.
::: v-pre
    INSERT INTO `{{request.path.table_name}}`({{#each request.body}}{{@key}}{{#if @last}}{{else}},{{/if}}{{/each}}) VALUES({{#each request.body}}'{{{this}}}'{{#if @last}}{{else}},{{/if}}{{/each}})
:::

If the insert is successful, we send a 200 response with data filled from `insert_output` variable. Open your Send Step and fill it like below.

| Fields        | Values             |
| ------------- | ------------------ |
| Variable      | `insert_output`    |
| Response Code | 200                |
| Content Type  | `application/json` |
| Template      | Handlebar          |

If it fails, we first create a variable describing what went wrong. Paste the line below into the Set Var step.

::: v-pre
    INSERT INTO `{{request.path.table_name}}`({{#each request.body}}{{@key}}{{#if @last}}{{else}},{{/if}}{{/each}}) VALUES({{#each request.body}}'{{{this}}}'{{#if @last}}{{else}},{{/if}}{{/each}})
:::

Fill the remaining fields like below.

![set error](./seterror.png)

Then send a 503 response with error data.

| Fields        | Values             |
| ------------- | ------------------ |
| Variable      | `out`    |
| Response Code | 503                |
| Content Type  | `application/json` |
| Template      | Handlebar          |

Our backend is ready. Let's create our screens.

### Page
We should create a Page which belongs to our sign up screen.

![signup page](./signuppage.png)

We specified `/signup` as our page url.

In your template, you can be as creative as you want. We utilized [Bootstrap](https://getbootstrap.com/) as our CSS framework to easily build cute layouts witohut worrying with complex CSS magic.

```html
<div class="page-wrapper">
    <!-- Page content start -->
    <div class="page-content">
        <div class="bg-light">
            <div class="container clearfix">
                <section class="block py-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-sm-8 col-xs-12 mt-5">
                            <div class="card w-100 border-secondary text-left mb-3">
                                <div class="card-body p-5">

                                    <!-- Appup form component start -->
                                    <center>
                                        <h2>Sign Up</h2>
                                    </center>

                                    <appup-form preload="preload" submit="signup" :workflow_params='{entity:"signup"}' />
                                    <!-- Appup form component end -->

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <!-- Page content end -->
</div>
```

If you skim the whole layout, the actual functionality actually is handled by a single component, named `<appup-form>`.

```html
<appup-form preload="preload" submit="signup" :workflow_params='{entity:"signup"}' />
```

We already covered how to build forms in the documentation. If you want to [take a look at it](/docs/frontend/pages/#form), feel free to do so.

We specify our preload handler as `preload`, and our submit handler as `signup`. We also provide workflow parameters as `{entity:"signup"}` which will become useful once we talk to our backend with our handlers.

Since we defined two different handlers, we need to populate those.

### Preload
Go to Handlers and create a Handler named `preload`. Add a JS code step to it like below.

![preload handler](./preloadhandler.png)

Inside of the JS code step, paste the lines below.

```js
function(data, ui) {
    if(window.UIJSON[ui.workflow_params.entity].submit) {
        ui.submit = window.UIJSON[ui.workflow_params.entity].submit;
    }
    ui.formFields = window.UIJSON[ui.workflow_params.entity].fields;
    ui.buttons = window.UIJSON[ui.workflow_params.entity].buttons;
}
```

Here, we check if the workflow params belong to our form and if so, we assign our submit handler to `ui.submit` in order to specify how we are gonna proceed once the user submits. We also specify form fields and buttons which correspond to the user data we collect during sign up flow.

### Submit
Go to Handlers and create another Handler named `submit`. Add the steps as specified below.

![signup submit handler](./signupsubmit.png)

It is good practice to capture form error early. So we should first validate our forms. A simple Validate step should do the trick. In case of an error, we show an alert to the use via an Alert step.

If the validation is successful, we should initiate an AJAX call which will trigger a workflow that we will implement. Prepare your ajax call as below.

| Field           | Value                                           |
| --------------- | ----------------------------------------------- |
| URL             | `https://apps.appup.cloud/scheduly/create/user` |
| Method          | POST                                            |
| Post Data       | ![formdataescape](./formdataescape.png)         |
| Output Variable | `response_data`                                 |

To continue after the call, setup your JS Code step as below.

```js
function(data, ui) {
    ui.showSuccess = true;
    ui.messageAlert = 'Updated sucessfully.'
}
```
Our UI can now respond to the submit operation.

As the last step, we will navigate to our login page to proceed with the flow. Set up the Navigate step as below.

| Field | Value          |
| ----- | -------------- |
| Path  | /login?id=1399 |

Now, if the user signs up, he/she is redirected to the login page.

## Login Flow

## Dashboard/Calendar

## New event type and adding an event
