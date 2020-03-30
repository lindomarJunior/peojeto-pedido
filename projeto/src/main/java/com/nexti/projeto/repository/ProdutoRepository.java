package com.nexti.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nexti.projeto.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Integer>{

}
