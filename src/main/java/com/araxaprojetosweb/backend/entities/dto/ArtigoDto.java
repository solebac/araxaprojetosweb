package com.araxaprojetosweb.backend.entities.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.araxaprojetosweb.backend.entities.Artigo;
import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.Comentario;
import com.araxaprojetosweb.backend.entities.Tag;
import com.araxaprojetosweb.backend.entities.enums.ArtigoStatus;

public class ArtigoDto {
	private Long id;
	private String titulo;
	private Date dataPublicacao;
	private String conteudo;
	private ArtigoStatus status;
	private String url;
	private Integer contador;
	private AutorDto autor;
	private List<Comentario> comment = new ArrayList<>();
	private List<Tag> tag = new ArrayList<>();
	private Set<Categoria> categorias = new HashSet<>();
	
	public ArtigoDto() {}
	public ArtigoDto(Artigo obj) {
		super();
		id = obj.getId();
		titulo = obj.getTitulo();
		dataPublicacao = obj.getDataPublicacao();
		conteudo = obj.getConteudo();
		status = obj.getStatus();
		url = obj.getUrl();
		contador = obj.getContador();
		autor = new AutorDto(obj.getAutor());
		comment = obj.getComment();
		tag = obj.getTag();
		categorias = obj.getCategorias();
	}

	public Long getId() {
		return id;
	}

	public String getTitulo() {
		return titulo;
	}

	public Date getDataPublicacao() {
		return dataPublicacao;
	}

	public String getConteudo() {
		return conteudo;
	}

	public ArtigoStatus getStatus() {
		return status;
	}
	public String getUrl() {
		return url;
	}

	public Integer getContador() {
		return contador;
	}
	public AutorDto getAutor() {
		return autor;
	}

	public List<Comentario> getComment() {
		return comment;
	}

	public List<Tag> getTag() {
		return tag;
	}

	public Set<Categoria> getCategorias() {
		return categorias;
	}

	public static List<ArtigoDto> toConvert(List<Artigo> lista) {
		return lista.stream().map(ArtigoDto::new).collect(Collectors.toList());
	}
	
}
