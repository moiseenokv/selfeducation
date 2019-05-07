require('../css/style.css');
let people = (require('./people.js'));
let $ = require('jquery');

$('body').append('<ul></ul>');

people.forEach(function(item){
    $('ul').append("<li>"+item.name+"</li>");
});