# React Hotel Project
## npx create react project
*   create the project folder and run npm run start to test if it works

*   Get bunch of pics that you will use from unsplash or somthing (view, rooms, spa, gym etc.) and save them inside the public/assets in the root of your project

*   Add tailwind css

*   Clear everything inside the app.js file and start creating yours, we will create a functional component

*   As we wont be needing built-in App.js files we can delete the app.css file as well. We will use the App.js file to handle the routing

*   give body and root a flex and flex column also set the basics such as margin:0 padding:0 ext. box-sizing: border-box

*   Rest of our css will be handled with tailwind and will be inline, if you don't like handling styling this way you can go ahead and include your own method. 

*   Create the navbar for our app. Firs create a folder inside the src folder called components and create the navbar compoentn here. 

* For our pages I created a pages folder in src folder. These files i create here will serve as my pages. 

## Installing the router

* "npm install react-router-dom" install the react router. 
* We will be creating 4 files in our pages folder. home.jsx, rooms.jsx, facilities.jsx, contact.jsx
***insert image "pages created (name's different now but you will get it)"***
* Now if everything had gone right your file structure should look like this image above here
* Render the names of the files inside the pages so you know which one you are on and if your router is going to work or not
* Now create the router in app.js and check if it works (share the code after you are done)
* now create the navbar using tailwind, also use compoennets as much as possible
* Create the footer and afther doing that create your layout component, don't forget to margin-top: auto to keep it down below
* Change the router file explain the changes while also explaining the necessity of using outlef-t and consistent layout and nesting
* Create the images folder in src folder for all the images we will use ,n the project, I got all mine from unsplash

## Now in the home page
* Add the beach image with the alt text

* create the carouself with tailwind inside components folder, pass the image sources and alt texts in an arrray as prop

* After the carousel for rooms 

* Create the component for the facilities grid for the homepage

# Next

* Something in the home page causes horizontal scroll find and fix it, don't spend 30 more than 30 mins over it. if it's going to take more than that just hide it