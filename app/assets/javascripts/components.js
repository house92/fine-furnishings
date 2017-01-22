global.HomePage = require('components/homePage.jsx').default;
global.Register = require('components/register.jsx').default;
global.LogIn = require('components/logIn.jsx').default;

$.get('/components', function (data) {
  data.forEach(function (component) {
    component = component.split("components/")[1];
    console.log(`components/${component}`, component[0].toUpperCase() + component.substring(1, 99).replace(/.jsx/, ""));
    global[component[0].toUpperCase() + component.substring(1, 99).replace(/.jsx/, "")] = require(`components/${component}`).default;
  });
});
