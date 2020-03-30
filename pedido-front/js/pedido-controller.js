angular.module("appPedido").controller("pedidoController", function ($scope, $routeParams, pedidoFactory, clienteFactory) {
    $scope.titulo = "Pedidos";

    $scope.pedidos = [];
    $scope.produtos = [];
    $scope.item = {};
    $scope.clientes = [];
    $scope.pedido = {};
    $scope.pedido.produto = [];
    $scope.pedido.itens = [];
    $scope.produtoAdd = {};
    $scope.codPedido;
    $scope.quantidade;
    $scope.idProduto;
    $scope.idCliente;
    $scope.idPedido;
    $scope.listaCodPedidos = [];

    $scope.carregarPedidos = function () {
        pedidoFactory.listar().then(function (pedidos) {
            $scope.pedidos = pedidos;
            $scope.pedidos.forEach(function (pedido) {
                pedido.data = pedido.data[2] + '/' + pedido.data[1] + '/' + pedido.data[0];
            });
        });
    }

    $scope.adicionarPedido = function () {
        pedidoFactory.criarPedido($scope.codPedido).then(function (codResposta) {
            carregarPedidos();
        });
    }

    let listarProdutos = function () {
        pedidoFactory.listarProdutos().then(function (produtos) {
            $scope.produtos = produtos;
        });
    };

    let listarClientes = function () {
        clienteFactory.listar().then(function (clientes) {
            $scope.clientes = clientes;
        });
    };

    let carregarItens = function () {
        pedidoFactory.listarItens($routeParams.id).then(function (itens) {
            $scope.itens = itens;
        });
    };

    $scope.carregarPedidoDetalhe = function () {
        listarProdutos();
        listarClientes();
        if($routeParams.id){
            pedidoFactory.consultar($routeParams.id).then(function (pedido) {
                $scope.pedido = pedido;
            });
        }
    };

    $scope.valorizarProduto = function (produto, quantidade) {
        $scope.produto = produto;
        $scope.quantidade = quantidade;
    };

    $scope.inserirItem = function () {
        if(!$scope.quantidade){
            return;
        }

        $scope.item.produto = $scope.produto;
        $scope.item.quantidade = $scope.quantidade;
        $scope.pedido.itens.forEach(function (item) {
            if (item.produto.id === $scope.item.produto.id) {
                item.quantidade = parseInt(item.quantidade) + parseInt($scope.quantidade);
                delete $scope.produto;
                delete $scope.quantidade;
                return;
            }
        });

        if ($scope.produto) {
            $scope.pedido.itens.push(angular.copy($scope.item));
            delete $scope.produto;
            delete $scope.quantidade;
        }

    };

    $scope.removerItem = function () {
        if(!$scope.quantidade){
            return;
        }

        $scope.pedido.itens.forEach(function (item, index, object) {
            if (item.produto.id === $scope.produto.id) {
                item.quantidade = item.quantidade - $scope.quantidade;
                if (item.quantidade <= 0) {
                    object.splice(index, 1);
                }
                delete $scope.produto;
                delete $scope.quantidade;
                return;
            }
        });
    };

    $scope.salvar = function () {
        pedidoFactory.salvar($scope.pedido).then(function () {
            $("#sucesso").modal();
        });
    }

    $scope.excluirPedido = function () {
        pedidoFactory.excluir($scope.idPedido).then(function () {
            $scope.carregarPedidos();
            $("#sucesso").modal();
        });
    }

    $scope.valorizarId = function (id) {
        $scope.idPedido = id;
    }

})