package com.nexti.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nexti.projeto.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{

}
