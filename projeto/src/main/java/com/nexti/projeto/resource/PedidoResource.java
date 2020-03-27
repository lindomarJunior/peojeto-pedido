package com.nexti.projeto.resource;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexti.projeto.entity.Cliente;
import com.nexti.projeto.entity.Item;
import com.nexti.projeto.entity.Pedido;
import com.nexti.projeto.entity.Produto;

@RestController
@RequestMapping(value = "/pedido")
public class PedidoResource {

	@GetMapping
	public ResponseEntity<List<Pedido>> listar() {
		
		Pedido pedido = new Pedido();
		pedido.setId(123);
		pedido.setTotal(new BigDecimal(10));
		
		Cliente cliente = new Cliente();
		cliente.setNome("Maria");
		pedido.setCliente(cliente);
		
		List<Pedido> lista = new ArrayList<Pedido>();
		lista.add(pedido);
		
		return new ResponseEntity<List<Pedido>>(lista, HttpStatus.OK);
	} 
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Pedido> consultar(@PathVariable String codigo) {		
		
			Pedido pedido = new Pedido();
			pedido.setId(123);
			pedido.setTotal(new BigDecimal(10));
			
			return new ResponseEntity<Pedido>(pedido, HttpStatus.OK);
		
	}
	
	@PostMapping("/item/{codigo}/{codigoProduto}/{qtd}")
	public ResponseEntity<List<Item>> criar(@PathVariable Integer codigo, @PathVariable Integer codigoProduto, @PathVariable Integer qtd) {
		
		Pedido pedido = new Pedido();
		pedido.setId(123);
		pedido.setTotal(new BigDecimal(10));
		
		Cliente cliente = new Cliente();
		cliente.setNome("Maria");
		pedido.setCliente(cliente);
		
		Item item = new Item();
		
		Produto produto = new Produto();
		produto.setNome("pao");
		produto.setId(codigoProduto);
		produto.setPreco(new BigDecimal(10));
		
		item.setProduto(produto);
		item.setQuantidade(qtd);
		
		List<Item> lista = new ArrayList<>();
		lista.add(item);
		
		return new ResponseEntity<List<Item>>(lista, HttpStatus.OK);
	}
	
	@PostMapping("/remove/{codigo}/{codigoProduto}/{qtd}")
	public ResponseEntity<List<Item>> excluir(@PathVariable Integer codigo, @PathVariable Integer codigoProduto, @PathVariable Integer qtd) {
		
		List<Item> lista = new ArrayList<>();
		
		return new ResponseEntity<List<Item>>(lista, HttpStatus.OK);
	}
}
