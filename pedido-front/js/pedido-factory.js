angular.module("appPedido").factory("pedidoFactory", function($q, $http){
	return{
		listar: function(){
			var promessa = $q.defer();

			$http.get("http://localhost:8080/pedido").then(function(result){
				var pedidos = result.data;
				promessa.resolve(pedidos);
			})

			return promessa.promise;
		},
		listarItens: function(id){
			var promessa = $q.defer();

			$http.get("http://localhost:8080/pedido/"+id).then(function(result){
				var pedidos = result.data;
				promessa.resolve(pedidos);
			})

			return promessa.promise;
		},
		salvar: function(pedido){
			var promessa = $q.defer();

			$http.post("http://localhost:8080/pedido", pedido).then(function(result){
				var codResposta = result.data;
				promessa.resolve(codResposta);
			})

			return promessa.promise;
		},
		listarProdutos: function(){
			var promessa = $q.defer();

			$http.get("http://localhost:8080/produto").then(function(result){
				var produtos = result.data;
				promessa.resolve(produtos);
			})

			return promessa.promise;
		},
		listarClientes: function(){
			var promessa = $q.defer();

			$http.get("http://localhost:8080/cliente").then(function(result){
				var clientes = result.data;
				promessa.resolve(clientes);
			})

			return promessa.promise;
		},
		inserirItem: function(codPedido, idProduto, qtd){
			var promessa = $q.defer();

			$http.post("http://localhost:8080/pedido/item/"+codPedido+"/"+idProduto+"/"+qtd).then(function(result){
				var codResposta = result.data;
				promessa.resolve(codResposta);
			})

			return promessa.promise;
		},		
		removerItem: function(codPedido, idProduto, qtd){
			var promessa = $q.defer();

			$http.post("http://localhost:8080/pedido/remove/"+codPedido+"/"+idProduto+"/"+qtd).then(function(result){
				var codResposta = result.data;
				promessa.resolve(codResposta);
			})

			return promessa.promise;
		},
		consultar: function(id){
			var promessa = $q.defer();

			$http.get("http://localhost:8080/pedido/"+id).then(function(result){
				var pedido = result.data;
				promessa.resolve(pedido);
			})

			return promessa.promise;
		},
		excluir: function(id){
			var promessa = $q.defer();

			$http.post("http://localhost:8080/pedido/"+id).then(function(result){
				var codResposta = result.data;
				promessa.resolve(codResposta);
			})

			return promessa.promise;
		},
	};
})