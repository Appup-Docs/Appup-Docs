# Login Form Example

```html
<!-- Appup form component start -->
<appup-form  preload="pre_load_entity"
   :workflow_params='{entity:"login-helloworld"}'
/>
<!-- Appup form component end -->
```

---

Then you configure what kind of inputs you want to show via global JSON.

```json
{
	"login-helloworld": {
		"fields": [
			{
				"id": 1000,
				"type": "email",
				"name": "email",
				"placeholder": "Login",
				"label": "",
				"required": true
			},
			{
				"id": 1045,
				"type": "password",
				"name": "password",
				"hints": "insert hints here",
				"placeholder": "Password",
				"label": "",
				"required": true,
				"minLength": 4,
				"maxLength": 10
			}

		],
		"buttons": [
			{
				"label": "Login",
				"variant": "primary",
				"type": "submit",
				"function": "onSubmit"

			}
		],
		"post": "login"
	}
}
```

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
