# Pages
Pages are the top level scope holders. They have a name, a URL and a template describing what to show. When you create a page, you use regular HTML as well as custom defined **Blocks** to populate it according to your needs.

In order to create a page, select **Pages** from your dashboard and click Add Pages button.

![Add Pages](./addpages.png)

---

You will be asked for a name, a URL and page contents.

![Page](./page.png)

## Sections
There are four different code sections you can include in your pages. A template, Javascript code, CSS rules and global JSON objects.

### Template
Templates are the main HTML that represents your pages. It supports all the vanilla HTML elements in your disposal. Moreover, it has the capability to inject [Blocks](/docs/frontend/blocks) which allows you to reuse existing components multiple times with only copying a single line of code.

![Template](./template.png)

#### Routing
By customizing the page URL, you configure dynamic routing as well as use the route parameters right inside your page.

Form your URL like `/path/to/page/:param1/:param2` to be able to access `param1` or `param2` inside your template. Once you configure the URL, your custom parameters will be available to be used in your template with ![Route URL](./routeurl.png) syntax. You will be able to run custom logic with [Handlers](/docs/frontend/handlers) using these route parameters.

```html
<h1 class="entity_params">param1 is {{$route.params.param1}}</h1>
<h1 class="entity_params">param2 is {{$route.params.param2}}</h1>
```

All your parameters are accessible under `$route.params`.

### Javascript
You can include custom Javascript code, scoped at the page level to incorporate any Javascript tooling of your preference. The functions included in this section will be globally available for all components throughout your page.

![Javascript](./js.png)

### CSS
Custom CSS or frontend frameworks can also be loaded in your page by including the rules inside CSS section. The rules written here is available to all HTML elements as well as the custom javascript you include. This is the perfect place for creating generic themes in your page.

![CSS](./css.png)

### JSON
Chances are you are going to need global customization parameters which will effect your Javascript logic and custom components. In this case, JSON section is the tool for you. Whatever written in this section will be available in Javascript via `window.UIJSON`.

![JSON](./json.png)

---

You will also be able to use these JSON values to automatically populate smart [Form](./#form) elements.

## Components
Appup provides many ready to use components for handling complex but very common tasks such as creating and validating forms. You can utilize these components in your pages to create sophisticated controls in your UI.

### Form
Appup forms a unique and easy to use way to quickly create dynamic, self validating forms. They are configured via global JSON and allows you to include many smart input elements such as text, number, dropdowns and buttons.

You use an Appup form by including the following code in your template.



```html
<!-- Appup form component start -->
<appup-form  preload="You handler's name"
   :workflow_params='{entity:"you global JSON value"}'
/>
<!-- Appup form component end -->
```

---

Then you configure what kind of inputs you want to show via global JSON.

```json
{
	"login-helloworld": {
		"fields": [
			A comma separated list of fields
		],
		"buttons": [
			A comma separated list of buttons
		],
		"post": "Your handler name"
	}
}
```

A field can have these values.

| Field Key   | Field Purpose                 |
| ----------- | ----------------------------- |
| name        | enter the input field name    |
| id          | enter a reference number here |
| placeholder | enter the input field text    |


---

The name you provide to `:workflow-params` should match the JSON key of your form configuration. Once your configuration is complete, you will use `preload` to set a [Handler](/docs/frontend/handlers) to finalize your form logic. Use a Javascript step inside your handler, set up like below.

```javascript
function(data, ui){
	if(window.UIJSON[ui.workflow_params.entity].submit) {
		ui.submit=window.UIJSON[ui.workflow_params.entity].submit;
 	}

	ui.formFields = window.UIJSON[ui.workflow_params.entity].fields;
	ui.buttons = window.UIJSON[ui.workflow_params.entity].buttons;
}
```

---

#### Form Configuration
You can configure your forms with CSS classes, code executing computationals, condition checking conditionals and dropdowns populated via remote AJAX calls.

##### Classes
Appup forms support css classes. Just set the appropriate class like below in your global page JSON.
```json
{
	"myform": {
		"fields": [ {
				"name": "name",
				"label": "Name",
				"description": "Please enter your name",
				"placeholder": "Enter your name",
				"id": "first_name",
				"type": "text",
				"required": true,
				"class":"col-sm-12 col-md-6"
			}
		]
	}
}
```

##### Computational
If you'd like to run custom javascript when the use edits an input form, you can do it by setting up a computational.
```json
{
	"myform": {
		"fields": [
			{
				"id": 1090,
				"type": "text",
				"label":"Friendly URL",
				"name": "url2",
				"required": true,
				"computation": "'https://'+form.URL.replace(/[^a-z0-9]/gi,'').toLowerCase()+'.appup.cloud'",
				"disabled": true,
				"class": "col-sm-12 col-md-6"
			}
		]
	}
}
```

##### Conditional
Conditionals are used to decide whether the input is shown or not by checking for the condition specified on each user input. A condional can be any boolean Javascript expression.
```json
{
	"myform": {
		"fields": [
			{
				"id": 106573,
				"type": "text",
				"name": "SERVER_URL",
				"label": "Enter Server URL",
				"required": true,
				"condition": "this.form.cloud_type!=null && this.form.cloud_type!='Appup'",
				"class":"col-sm-12 col-md-6 red"
			}
		]
	}

}
```
##### Static Dropdowns
Adding a dropdown filled with static data is only a matter of configuration in your global JSON.
```json
{
	"myform": {
		"fields": [
			{
				"id": 10,
				"type": "dropdown",
				"name": "cloud_type",
				"label": "Cloud Type",
				"option": [
					{
						"value": null,
						"label": "Please select an option"
					},
					{
						"value": "Appup",
						"label": "Appup"
					},
					{
						"value": "Amazon",
						"label": "Amazon"
					},
					{
						"value": "Google",
						"label": "Google"
					}
				],
				"required": true,
				"class": "col-sm-12 col-md-6 select"
			}
		]
	}
}
```
##### Dynamic Dropdowns
However if the dropdown needed to be populated by dynamically queried data, you can provide a url such that when called with GET, return a JSON array of key-value pairs. You can choose which fields to consider as keys and values by setting their names in the configuration like below.

```json
{
	"myform": {
		"fields": [
			{
					"id": 10,
					"type": "dropdown",
					"name": "name",
					"label": "Select Name",
					"key_value": "id",
					"key_label": "name",
					"url": "https://jsonplaceholder.typicode.com/users/",
					"required": true,
					"class": "col-sm-12 col-md-6 select"
			}
		]
	}
}
```

### Collections
Collections are builtin components to show repeatable data. They come in two kind, namely tables and cards.

#### Table (v-for)
**TODO : To be added.**

#### Card (v-if)
**TODO : To be added.**

#### Card with Sort Key
**TODO : To be added.**

#### Card with Search (Events)
**TODO : To be added.**

#### Card with Execute Workflow (Delete example)
**TODO : To be added.**

## Preview
You can preview a page by clicking the corresponding ... inside your pages dashboard.

![Preview](./preview.png)
