package com.nexti.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexti.projeto.entity.Cliente;
import com.nexti.projeto.repository.ClienteRepository;


@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	public void salvar(Cliente cliente) {
		clienteRepository.save(cliente);
	}
	
	public List<Cliente> listar() {
		return clienteRepository.findAll();
	}
	
	public Cliente consultar(Integer id) {
		return clienteRepository.findById(id).get();
	}
	
	public void excluir(Integer id) {
		clienteRepository.deleteById(id);
	}
}
