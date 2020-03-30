package com.nexti.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nexti.projeto.entity.Item;

public interface ItemRepository extends  JpaRepository<Item, Integer>{

}
