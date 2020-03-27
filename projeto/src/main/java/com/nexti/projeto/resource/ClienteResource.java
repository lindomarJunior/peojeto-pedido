package com.nexti.projeto.resource;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexti.projeto.entity.Cliente;

@RestController
@RequestMapping(value = "/cliente")
public class ClienteResource {
	
	@GetMapping
	public ResponseEntity<List<Cliente>> listar() {
		
		Cliente cliente = new Cliente();
		cliente.setNome("Maria");
		cliente.setId(123);
		
		Cliente cliente2 = new Cliente();
		cliente2.setNome("Joao");
		cliente2.setId(456);

		
		List<Cliente> lista = new ArrayList<Cliente>();
		lista.add(cliente);
		lista.add(cliente2);
		
		return new ResponseEntity<List<Cliente>>(lista, HttpStatus.OK);
	}
}
