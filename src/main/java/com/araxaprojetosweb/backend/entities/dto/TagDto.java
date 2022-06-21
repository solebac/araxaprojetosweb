package com.araxaprojetosweb.backend.entities.dto;

import com.araxaprojetosweb.backend.entities.Tag;

public class TagDto {
	private Long id;
	private String nome;

	public TagDto() {
	}

	public TagDto(Tag obj) {
		id = obj.getId();
		nome = obj.getNome();
	}

	public TagDto(Long id, String nome) {
		this.id = id;
		this.nome = nome;
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

}
