let app = angular.module("appPedido",["ngRoute","checklist-model"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/pedido", {
        templateUrl : "view/pedido.html",
        controller : "pedidoController"
    }).when("/pedido/:id", {
        templateUrl : "view/pedido-detalhe.html",
        controller : "pedidoController"
    }).when("/cliente", {
        templateUrl : "view/cliente.html",
        controller : "clienteController"
    }).otherwise({redirectTo: "/"});

    $locationProvider.html5Mode(true);
});