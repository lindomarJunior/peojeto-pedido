angular.module("appPedido").controller("produtoController", function ($scope, $routeParams, produtoFactory) {
    $scope.titulo = "Produtos";
    $scope.produto = {};
    $scope.idProduto = null;

    $scope.carregarProdutos = function () {
        produtoFactory.listar().then(function (produtos) {
            $scope.produtos = produtos;
        });
    }

    $scope.carregarProduto = function () {
        if($routeParams.id){
            produtoFactory.consultar($routeParams.id).then(function (produto) {
                $scope.produto = produto;
            });
        }
    }

    $scope.excluirProduto = function () {
        produtoFactory.excluir($scope.idProduto).then(function () {
            $scope.carregarProdutos();
            $("#sucesso").modal();
        });
    }

    $scope.valorizarId = function (id) {
        $scope.idProduto = id;
    }

    $scope.salvar = function () {
        produtoFactory.salvar($scope.produto).then(function () {
            $scope.produto = {};
            $("#sucesso").modal();
        });
    }

})