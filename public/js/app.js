var app = angular.module('tinyurlApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./public/views.home.html",
            controller: "homeController"
        })
});

