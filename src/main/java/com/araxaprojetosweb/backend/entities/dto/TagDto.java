package com.araxaprojetosweb.backend.entities.dto;

import com.araxaprojetosweb.backend.entities.Tag;

public class TagDto {
	private Long id;
	private String nome;
	private Long artigo_id;

	public TagDto() {
	}

	public TagDto(Tag obj) {
		id = obj.getId();
		nome = obj.getNome();
		artigo_id  = obj.getArtigo().getId();
	}

	public TagDto(Long id, String nome, Long artigo_id) {
		this.id = id;
		this.nome = nome;
		this.artigo_id = artigo_id;
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public Long getArtigo_id() {
		return artigo_id;
	}

}
