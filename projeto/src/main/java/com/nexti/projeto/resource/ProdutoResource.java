package com.nexti.projeto.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexti.projeto.entity.Produto;
import com.nexti.projeto.service.ProdutoService;

@RestController
@RequestMapping(value = "/produto")
public class ProdutoResource {
	
	@Autowired
	private ProdutoService produtoService;
	
	@GetMapping
	public ResponseEntity<List<Produto>> listar() {
		return new ResponseEntity<List<Produto>>(produtoService.listar(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Produto> consultar(@PathVariable Integer id) {
		return new ResponseEntity<Produto>(produtoService.consultar(id), HttpStatus.OK);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<Produto> excluir(@PathVariable Integer id) {
		produtoService.excluir(id);
		return new ResponseEntity<Produto>(HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Produto> salvar(@RequestBody Produto produto) {
		produtoService.salvar(produto);
		return new ResponseEntity<Produto>(HttpStatus.CREATED);		
	}
}
