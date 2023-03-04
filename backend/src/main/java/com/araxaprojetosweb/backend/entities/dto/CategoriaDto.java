package com.araxaprojetosweb.backend.entities.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.araxaprojetosweb.backend.entities.Categoria;

public class CategoriaDto {
	private Long id;
	private String nome;
	private String descricao;
	
	public CategoriaDto() {
	
	}
	
	public CategoriaDto(Long id, String nome, String descricao) {
		super();
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
	}

	public CategoriaDto(Categoria obj) {
		id = obj.getId();
		nome = obj.getNome();
		descricao = obj.getDescricao();	
	}
	

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getDescricao() {
		return descricao;
	}


	public static List<CategoriaDto> toConvert(List<Categoria> lista) {
		return lista.stream().map(CategoriaDto::new).collect(Collectors.toList());
	}
	
}
