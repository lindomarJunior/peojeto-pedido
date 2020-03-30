let app = angular.module("appPedido",["ngRoute","checklist-model"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/pedido", {
        templateUrl : "view/pedido.html",
        controller : "pedidoController"
    }).when("/pedido-detalhe", {
        templateUrl : "view/pedido-detalhe.html",
        controller : "pedidoController"
    }).when("/pedido/:id", {
        templateUrl : "view/pedido-detalhe.html",
        controller : "pedidoController"
    }).when("/cliente", {
        templateUrl : "view/cliente/cliente.html",
        controller : "clienteController"
    }).when("/cliente-detalhe", {
        templateUrl : "view/cliente/cliente-detalhe.html",
        controller : "clienteController"
    }).when("/cliente-detalhe/:id", {
        templateUrl : "view/cliente/cliente-detalhe.html",
        controller : "clienteController"
    }).when("/produto", {
        templateUrl : "view/produto/produto.html",
        controller : "produtoController"
    }).when("/produto-detalhe", {
        templateUrl : "view/produto/produto-detalhe.html",
        controller : "produtoController"
    }).when("/produto-detalhe/:id", {
        templateUrl : "view/produto/produto-detalhe.html",
        controller : "produtoController"
    }).otherwise({redirectTo: "/"});

    $locationProvider.html5Mode(true);
});