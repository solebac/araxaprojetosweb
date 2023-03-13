package com.araxaprojetosweb.backend.entities.dto;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.araxaprojetosweb.backend.entities.Artigo;

public class ArtigoNewsDto {
	public Long id;
	public Long categoria_id;
	public String titulo;
	public Date	 publicacao;
	public String slog;
	
	public ArtigoNewsDto(Artigo obj) {
		this.id = obj.getId();
		this.categoria_id = obj.getCategoria().getId();
		this.titulo = obj.getTitulo();
		this.publicacao = obj.getDataPublicacao();
		this.slog = obj.getSlog();
	}
	
	public ArtigoNewsDto() {
	}

	public Long getId() {
		return id;
	}

	public Long getCategoria_id() {
		return categoria_id;
	}

	public String getTitulo() {
		return titulo;
	}

	public Date getPublicacao() {
		return publicacao;
	}

	public String getSlog() {
		return slog;
	}

	public List<ArtigoNewsDto> toConvert(List<Artigo> obj) {
		// TODO Auto-generated method stub
		return obj.stream().map(ArtigoNewsDto::new).collect(Collectors.toList());
	}

		
}
