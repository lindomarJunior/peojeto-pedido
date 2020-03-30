package com.nexti.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nexti.projeto.entity.Pedido;

public interface PedidoRepository extends  JpaRepository<Pedido, Integer>{

}
