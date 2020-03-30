angular.module("appPedido").controller("clienteController", function ($scope, $routeParams, clienteFactory) {
    $scope.titulo = "Clientes";
    $scope.cliente = {};
    $scope.idCliente = null;

    $scope.carregarClientes = function () {
        clienteFactory.listar().then(function (clientes) {
            $scope.clientes = clientes;
        });
    }

    $scope.carregarCliente = function () {
        if($routeParams.id){
            clienteFactory.consultar($routeParams.id).then(function (cliente) {
                $scope.cliente = cliente;
                $scope.cliente.dataNascimento = new Date(
                    cliente.dataNascimento[0],
                    cliente.dataNascimento[1],
                    cliente.dataNascimento[2]);
            });
        }
    }

    $scope.excluirCliente = function () {
        clienteFactory.excluir($scope.idCliente).then(function () {
            $scope.carregarClientes();
            $("#sucesso").modal();
        });
    }

    $scope.valorizarId = function (id) {
        $scope.idCliente = id;
    }

    $scope.salvar = function () {
        clienteFactory.salvar($scope.cliente).then(function () {
            $scope.cliente = {};
            $("#sucesso").modal();
        });
    }

})