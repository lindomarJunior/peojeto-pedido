angular.module("appPedido").controller("pedidoController", function($scope, $routeParams, pedidoFactory){
    $scope.titulo = "Pedidos";
    
    $scope.pedidos = [];
    $scope.produtos = [];
    $scope.itens = [];
    $scope.clientes = [];
    $scope.pedido = {};
    $scope.produtoAdd = {};
    $scope.codPedido;
    $scope.quantidade;
    $scope.idProduto;
    $scope.idCliente;
    $scope.listaCodPedidos = [];

    $scope.carregarPedidos = function(){
    	pedidoFactory.listar().then(function(pedidos){
        $scope.pedidos = pedidos;
        });
    }
    
    $scope.adicionarPedido = function(){
    	alert($scope.codPedido);
    	pedidoFactory.criarPedido($scope.codPedido).then(function(codResposta){
    	carregarPedidos();
        });
    }
    
    let listarProdutos = function () {
    	pedidoFactory.listarProdutos().then(function(produtos){
        $scope.produtos = produtos;
        });
    };
    
    let listarClientes = function () {
    	pedidoFactory.listarClientes().then(function(clientes){
        $scope.clientes = clientes;
        });
    };

    let carregarItens = function () {
    	pedidoFactory.listarItens($routeParams.id).then(function(itens){
        $scope.itens = itens;
        });
    };
    
    $scope.carregarPedidoDetalhe = function () {
        listarProdutos();
        listarClientes();
    	carregarItens();
    };
    
    $scope.valorizarIdProduto = function (idProduto) {
    	$scope.idProduto = idProduto;
    };
    
    $scope.inserirItem = function () {
    	pedidoFactory.inserirItem($routeParams.id, $scope.idProduto, $scope.quantidade).then(function(itens){
        $scope.itens = itens;
        });
    };
    
    $scope.removerItem = function () {
    	pedidoFactory.removerItem($routeParams.id, $scope.idProduto, $scope.quantidade).then(function(itens){
        $scope.itens = itens;
        });
    };
    
})