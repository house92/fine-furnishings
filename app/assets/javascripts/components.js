global.HomePage = require('components/homePage.jsx').default;
global.Register = require('components/register.jsx').default;
global.LogIn = require('components/logIn.jsx').default;

var dirTree = require('directory-tree');

var tree = dirTree(`./components`, [''], function(item, PATH) {
    console.log(item.name);
    global[item.name[0].toUpperCase() + item.name.substring(1, 99)] = require(`components/${item}${item.extension}`).default;
});

setTimeout(function () {
    console.log(`/components`, tree);
}, 1000);
