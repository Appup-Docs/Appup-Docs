# Using Appup Docs

## How do I deploy the site?
1. Install [Node.js and npm](https://nodejs.org/en/)
2. Install [VuePress](https://vuepress.vuejs.org/)
3. (Optional) Install [AWS Command Line Interface](https://aws.amazon.com/cli/). Set AWS credentials and region according to your account and S3 bucket.
4. Open up a terminal and go to project folder.
5. (Linux or Mac) type `./deploy help` to see deployment options.
6. Choose one of the options and type it to you terminal. (i.e `./deploy / example.com`)

## Where is the VuePress configuration?
Here: *.vuepress/config.current.js*

## How do I edit existing documentation?
All text files in this documentation are stored in *docs* folder, named as *README.md*. The folder structure is the same as documentation outline. Navigate to the folder you are looking for and edit the *README.md*. Deploy the site.

## How do I add new sections to outline?
Edit *.vuepress/config.current.js*. The key under which the outline is set is named as `sidebar`.

## How do I add a new post?
Edit the sidebar in *.vuepress/config.current.js* as explained above to find a place for your new subject. Then mimic the file structure you added to configuration under *docs* by creating a folder named the same containing a *README.md* file inside.

## How do I edit the landing page?
Edit the *README.md* in the project root folder.

## Hod do I demo the project locally?
Type `./serve` to your terminal while you are in the project directory.
