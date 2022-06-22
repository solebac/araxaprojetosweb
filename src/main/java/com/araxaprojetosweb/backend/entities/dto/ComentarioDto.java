package com.araxaprojetosweb.backend.entities.dto;

import java.util.Date;

import com.araxaprojetosweb.backend.entities.Comentario;

public class ComentarioDto {

	private Long id;
	private String nome;
	private String texto;
	private Date data;
	private Long id_artigo_comment;

	public ComentarioDto() {}

	public ComentarioDto(Long id, String nome, String texto, Date data, Long id_artigo_comment) {
		this.id = id;
		this.nome = nome;
		this.texto = texto;
		this.data = data;
		this.id_artigo_comment = id_artigo_comment;
	}
	
	public ComentarioDto(Comentario obj) {
		id = obj.getId();
		nome = obj.getNome();
		texto = obj.getTexto();
		data = obj.getData();
		id_artigo_comment = obj.getArtigo().getId();
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getTexto() {
		return texto;
	}

	public Date getData() {
		return data;
	}

	public Long getId_artigo_comment() {
		return id_artigo_comment;
	}
	
	
}
