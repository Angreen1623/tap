import Handlebars from "handlebars";

Handlebars.registerHelper("eq", function (variable, val) {
    if (variable == val) {
        return true;
    } 
    return false;
});