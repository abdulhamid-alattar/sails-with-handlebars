# sails-with-handlebars
how to integrate handlbars 4.0.5 in your sails ~0.12.1 project 

This documentation is specifically for the mentioned above version ( or above fingers crossed ). Didn't find a documentation for the new versions :broken_heart: so had to reach this part by analysing how SailsJs loads the templates specially the helpers and partials 

First you need to make sure you have handlebars installed. :grin:

1- Modifying the config files.
==============================
in `config/views.js`
------------------

change/add the following key/values
```
    engine: 'handlebars'
    layout: 'layouts/layout'
    partials: 'partials'
    helpers: require('./helpers')
```

Add the following js file in the same config directory
```
  helpers.js
```
(note: your handlbars helper functions will go here, sample provided in the code section)

2- Modifying the template files.
==============================
add these folders in the views folder
```
views\layouts
views\partials
```
(note: you can modify these locations but you need to update the corresponding in `config/views.js`

change all the templates to *.handlebars and change the formatting to match handlebars format http://handlebarsjs.com/ 


use this to include the partials `{{> breadcrumbs}}` where is the partial file is 
`views\partials\breadcrumbs.handlebars`

and calling the helpers is just normal as it is. if things didn't go well then either the versions are different or i may have missed something..!

:sunglasses:
