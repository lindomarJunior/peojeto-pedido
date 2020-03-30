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

import com.nexti.projeto.entity.Pedido;
import com.nexti.projeto.service.PedidoService;

@RestController
@RequestMapping(value = "/pedido")
public class PedidoResource {
	
	@Autowired
	private PedidoService pedidoService;
	
	@GetMapping
	public ResponseEntity<List<Pedido>> listar() {
		return new ResponseEntity<List<Pedido>>(pedidoService.listar(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Pedido> consultar(@PathVariable Integer id) {
		return new ResponseEntity<Pedido>(pedidoService.consultar(id), HttpStatus.OK);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<Pedido> excluir(@PathVariable Integer id) {
		pedidoService.excluir(id);
		return new ResponseEntity<Pedido>(HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Pedido> salvar(@RequestBody Pedido pedido) {
		pedidoService.salvar(pedido);
		return new ResponseEntity<Pedido>(HttpStatus.CREATED);		
	}
	
}
