angular.module("appCliente").factory("clienteFactory", function($q, $http){
	return{
		listar: function(){
			var promessa = $q.defer();

			$http.get("http://localhost:8080/cliente").then(function(result){
				var clientes = result.data;
				promessa.resolve(clientes);
			})

			return promessa.promise;
		}
	};
})