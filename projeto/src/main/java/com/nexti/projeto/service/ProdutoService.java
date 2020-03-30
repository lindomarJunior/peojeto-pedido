package com.nexti.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexti.projeto.entity.Produto;
import com.nexti.projeto.repository.ProdutoRepository;

@Service
public class ProdutoService {
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public void salvar(Produto produto) {
		produtoRepository.save(produto);
	}
	
	public List<Produto> listar() {
		return produtoRepository.findAll();
	}
	
	public Produto consultar(Integer id) {
		return produtoRepository.findById(id).get();
	}
	
	public void excluir(Integer id) {
		produtoRepository.deleteById(id);
	}
}
