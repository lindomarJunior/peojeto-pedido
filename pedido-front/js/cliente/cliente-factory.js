angular.module("appPedido").factory("clienteFactory", function($q, $http){
	return{
		listar: function(){
			var promessa = $q.defer();

			$http.get("http://localhost:8080/cliente").then(function(result){
				var clientes = result.data;
				promessa.resolve(clientes);
			})

			return promessa.promise;
		},
		salvar: function(cliente){
			var promessa = $q.defer();

			$http.post("http://localhost:8080/cliente", cliente).then(function(result){
				var codResposta = result.data;
				promessa.resolve(codResposta);
			})

			return promessa.promise;
		},
		excluir: function(id){
			var promessa = $q.defer();

			$http.post("http://localhost:8080/cliente/"+id).then(function(result){
				var codResposta = result.data;
				promessa.resolve(codResposta);
			})

			return promessa.promise;
		},
		consultar: function(id){
			var promessa = $q.defer();

			$http.get("http://localhost:8080/cliente/"+id).then(function(result){
				var cliente = result.data;
				promessa.resolve(cliente);
			})

			return promessa.promise;
		}
	};
})