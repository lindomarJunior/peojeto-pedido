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

import com.nexti.projeto.entity.Cliente;
import com.nexti.projeto.service.ClienteService;

@RestController
@RequestMapping(value = "/cliente")
public class ClienteResource {
	
	@Autowired
	private ClienteService clienteService;
	
	@GetMapping
	public ResponseEntity<List<Cliente>> listar() {
		return new ResponseEntity<List<Cliente>>(clienteService.listar(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Cliente> consultar(@PathVariable Integer id) {
		return new ResponseEntity<Cliente>(clienteService.consultar(id), HttpStatus.OK);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<Cliente> excluir(@PathVariable Integer id) {
		clienteService.excluir(id);
		return new ResponseEntity<Cliente>(HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Cliente> salvar(@RequestBody Cliente cliente) {
		clienteService.salvar(cliente);
		return new ResponseEntity<Cliente>(HttpStatus.CREATED);		
	}
}
