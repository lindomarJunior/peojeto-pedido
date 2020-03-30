angular.module("appPedido").factory("produtoFactory", function($q, $http){
	return{
		listar: function(){
			var promessa = $q.defer();

			$http.get("http://localhost:8080/produto").then(function(result){
				var produtos = result.data;
				promessa.resolve(produtos);
			})

			return promessa.promise;
		},
		salvar: function(produto){
			var promessa = $q.defer();

			$http.post("http://localhost:8080/produto", produto).then(function(result){
				var codResposta = result.data;
				promessa.resolve(codResposta);
			})

			return promessa.promise;
		},
		excluir: function(id){
			var promessa = $q.defer();

			$http.post("http://localhost:8080/produto/"+id).then(function(result){
				var codResposta = result.data;
				promessa.resolve(codResposta);
			})

			return promessa.promise;
		},
		consultar: function(id){
			var promessa = $q.defer();

			$http.get("http://localhost:8080/produto/"+id).then(function(result){
				var produto = result.data;
				promessa.resolve(produto);
			})

			return promessa.promise;
		}
	};
})