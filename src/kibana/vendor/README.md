Adding the vendor folder for so that (unfortunate) compatibility modifications that have to be made to node modules and bower components don't need to be committed in the regular folders.


Current Changes:

angular-aria - had to change the mdModel directive (removed by changing the name to mdModelM)  because of a conflict with angular-bootstrap that broke Kibana, which expects directives to have a controller.