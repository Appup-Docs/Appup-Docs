# Dockers

Behind the scenes appup uses dockers and kubernetes to deploy, run and manage the applications. All the apps are run as different containers, which are in turn launched by running a docker image. 
This architecture has its own inherent advantages:
1. Better data security since container data is tightly coupled to the host storage and it is not possible to easily move data someplace else.
2. Access to resources inside the docker container environment is more protected so we have better application security
3. We will be sharing the kernel of the host machine so our process execution is very lightweight, this increasing efficiency of the whole application, at large.

Above all, the use of dockers helps you, the end user or developer take the application and its data with you to any cloud of your choice. You are not bound to use the technology stack of any particular vendor. To summarise, dockers help you get better security, lower cost of ownership and retain ownership of your app.