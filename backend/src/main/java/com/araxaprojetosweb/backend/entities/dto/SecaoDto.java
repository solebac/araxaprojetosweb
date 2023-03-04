package com.araxaprojetosweb.backend.entities.dto;

import com.araxaprojetosweb.backend.entities.Secao;

public class SecaoDto {

	private Integer id;
	private String nome;
	private Long categoria_id;

	public SecaoDto() {
	}

	public SecaoDto(Secao obj) {
		id = obj.getId();
		nome = obj.getNome();
		categoria_id = obj.getCategoria().getId();
	}

	public SecaoDto(Integer id, String nome, Long categoria_id) {
		this.id = id;
		this.nome = nome;
		this.categoria_id = categoria_id;
	}

	public Integer getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public Long getCategoria_id() {
		return categoria_id;
	}

}
