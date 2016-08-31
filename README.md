#How to create a new CSS file for a page

To begin you must have this repositry either checked out or at the very least download the zip and then have a developer (Simon, Louise or Paul) help you at a later stage.

##Create a new folder with your page

Go inside the 'instances' folder and then create a new folder with the name of your course.

##Copy the frontend.html

Copy the frontend.html file into your project.

##Select all the features you want (requires developer)

List at all the features that you want for your webpage (header recolouring, custom icons etc.). Go into the HTML file and uncomment all the features you want and ensure that they have been configured correctly.

## ensure that CSS is being loaded in locally

Inside the loadCSS() function at the top ensure that code is being loaded in locally. So for *Janek sandbox* set the location to be *Course_%20Janek%20sandbox_files/theme.css*.

## Add this code to the page

Inside a HTML block on the page paste in the code and press 'save'.

## Save the page locally

When you have returned to the homepage of the course; right click and press *Save As..* (may be different on PC). Save as *Webpage, Complete* in the location that you want to work on the files. If you were successful you will have a *course_[PROJECT NAME]* folder with a bunch of files and a single .htm file with the same name.

## Add in the CSS file

Go back to the original checked out folder and copy the *theme.css* file. Now add into the folder you just created.

## Open the .htm page

Go to the *.htm* you created and it should load the page (with lots of elements missing that have to be loaded in externally). However you should be able to use test all CSS you write on this page!

#Explaination of files

##frontend.html 
is the code that will be embeded into the webpage. It contains functions that will implement all the functionality that a designer requests per page. The purpose of this code is to either create new elements or hide elements that exist currently or to apply classes to exisiting elements. You should not use Javascript for any other purpose!

##theme.css
Is loaded in externally and is used to style up the classes that you applied in Javascript.

This decision was made to make the code alot more readable and to ensure modularity so that we can load in specific functions as needed.

##lightbox.html
This code should be embeded in a seperate HTML block.

##instances
Create instances of courses here e.g (Janek_sandbox). Within that folder add the 'Course_[your course]' html file and theme.css. 

**Don't add the other 'Course_[your course] _files' here as it will make the repo massive** - Just keep them on your own computer.

##assets
Store assets that will be used across courses here (images/icons)

###fonts
Store fonts that will be used across multiple courses here.

###icons
Stores that will be used across mutliple courses here.

###images
Stores images that will be used across multiple courses here
