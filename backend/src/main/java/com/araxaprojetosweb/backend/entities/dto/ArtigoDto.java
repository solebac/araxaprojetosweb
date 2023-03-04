package com.araxaprojetosweb.backend.entities.dto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.araxaprojetosweb.backend.entities.Artigo;
import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.Comentario;
import com.araxaprojetosweb.backend.entities.Secao;
import com.araxaprojetosweb.backend.entities.Tag;
import com.araxaprojetosweb.backend.entities.enums.ArtigoStatus;

public class ArtigoDto {
	private Long id;
	private String titulo;
	private Date dataPublicacao;
	
	private String conteudoIntroducao;
	private String conteudoParagrafoOne;
	private String conteudoParagrafoTwo;
	private String conteudoConclusao;
	
	private ArtigoStatus status;
	private String url;
	private String slog;
	private String imgDestaque;
	private String imgCard;//Mini img
	private Integer contador;
	private AutorDto autor;
	private Secao secao;
	private List<Comentario> comment = new ArrayList<>();
	private List<Tag> tag = new ArrayList<>();
	private Categoria categorias;
	/*
	 * #alt
	 * private Set<Categoria> categorias = new HashSet<>();*/
	
	public ArtigoDto() {}
	public ArtigoDto(Artigo obj) {
		super();
		id = obj.getId();
		titulo = obj.getTitulo();
		dataPublicacao = obj.getDataPublicacao();
		
		conteudoIntroducao = obj.getConteudoIntroducao();
		conteudoParagrafoOne = obj.getConteudoParagrafoOne();
		conteudoParagrafoTwo = obj.getConteudoParagrafoTwo();
		conteudoConclusao = obj.getConteudoConclusao();
		
		status = obj.getStatus();
		url = obj.getUrl();
		slog = obj.getSlog();
		imgCard = obj.getImgCard();
		imgDestaque = obj.getImgDestaque();
		contador = obj.getContador();
		autor = new AutorDto(obj.getAutor());
		comment = obj.getComment();
		tag = obj.getTag();
		categorias = obj.getCategoria();
		secao = obj.getSecao();
		if (secao == null) {
			secao = new Secao();
		}
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

	public String getConteudoIntroducao() {
		return conteudoIntroducao;
	}
	public String getConteudoParagrafoOne() {
		return conteudoParagrafoOne;
	}
	public String getConteudoParagrafoTwo() {
		return conteudoParagrafoTwo;
	}
	public String getConteudoConclusao() {
		return conteudoConclusao;
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
	public String getSlog() {
		return slog;
	}
	
	public String getImgDestaque() {
		return imgDestaque;
	}
	public String getImgCard() {
		return imgCard;
	}
	public AutorDto getAutor() {
		return autor;
	}

	public Secao getSecao() {
		return secao;
	}
	public List<Comentario> getComment() {
		return comment;
	}

	public List<Tag> getTag() {
		return tag;
	}
	/*
	 * #alt
	 * public Set<Categoria> getCategorias() {
		return categorias;
	}*/

	public void setImgDestaque(String imgDestaque) {
		this.imgDestaque = imgDestaque;
	}
	public void setImgCard(String imgCard) {
		this.imgCard = imgCard;
	}
	public Categoria getCategorias() {
		return categorias;
	}
	public static List<ArtigoDto> toConvert(List<Artigo> lista) {
		return lista.stream().map(ArtigoDto::new).collect(Collectors.toList());
	}
	
}
