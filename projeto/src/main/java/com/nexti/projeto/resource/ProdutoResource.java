package com.nexti.projeto.resource;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexti.projeto.entity.Produto;

@RestController
@RequestMapping(value = "/produto")
public class ProdutoResource {
	
	@GetMapping
	public ResponseEntity<List<Produto>> listar() {
		
		Produto produto = new Produto();
		produto.setNome("pao");
		produto.setId(123);
		produto.setPreco(new BigDecimal(10));
		produto.setQuantidade(5);
		
		List<Produto> lista = new ArrayList<Produto>();
		lista.add(produto);
		
		return new ResponseEntity<List<Produto>>(lista, HttpStatus.OK);
	}
}
