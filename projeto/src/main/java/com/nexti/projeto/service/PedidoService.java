package com.nexti.projeto.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.nexti.projeto.entity.Item;
import com.nexti.projeto.entity.Pedido;
import com.nexti.projeto.repository.ItemRepository;
import com.nexti.projeto.repository.PedidoRepository;

@Service
public class PedidoService {
	
	@Autowired
	private PedidoRepository pedidoRepository;
	@Autowired
	private ItemRepository itemRepository;
	
	public void salvar(Pedido pedido) {
		
		if(pedido.getData() != null) {
			excluirItens(pedido);
		}
		
		pedido.setData((LocalDate.now()));
		pedido.getItens().forEach(item -> {item.setPedido(pedido);});				
		pedido.setTotal(somarValorTotal(pedido));
		pedidoRepository.save(pedido);
	}
	
	private BigDecimal somarValorTotal(Pedido pedido) {
		BigDecimal totalItens = pedido.getItens().stream()
				.map(item -> item.getProduto().getPreco().multiply(new BigDecimal(item.getQuantidade())))
				.reduce(BigDecimal.ZERO, BigDecimal::add);
		return totalItens;
	}
	
	public Pedido excluirItens(Pedido pedido) {
		Pedido pedidoSavo = consultar(pedido.getId());
		Item item = new Item();
		item.setPedido(pedidoSavo);
		
		itemRepository.deleteAll(
				itemRepository.findAll(
						Example.of(item)));
		
		return pedido;
	}
	
	public List<Pedido> listar() {
		return pedidoRepository.findAll();
	}
	
	public Pedido consultar(Integer id) {
		return pedidoRepository.findById(id).get();
	}
	
	public void excluir(Integer id) {
		pedidoRepository.deleteById(id);
	}
}
