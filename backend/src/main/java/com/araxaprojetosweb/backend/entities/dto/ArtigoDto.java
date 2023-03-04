package com.araxaprojetosweb.backend.entities.dto;

import java.util.ArrayList;
import java.util.Date;
<<<<<<< HEAD
import java.util.HashSet;
import java.util.List;
import java.util.Set;
=======
import java.util.List;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import java.util.stream.Collectors;

import com.araxaprojetosweb.backend.entities.Artigo;
import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.Comentario;
<<<<<<< HEAD
=======
import com.araxaprojetosweb.backend.entities.Secao;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import com.araxaprojetosweb.backend.entities.Tag;
import com.araxaprojetosweb.backend.entities.enums.ArtigoStatus;

public class ArtigoDto {
	private Long id;
	private String titulo;
	private Date dataPublicacao;
<<<<<<< HEAD
	private String conteudo;
	private ArtigoStatus status;
	private String url;
	private Integer contador;
	private AutorDto autor;
	private List<Comentario> comment = new ArrayList<>();
	private List<Tag> tag = new ArrayList<>();
	private Set<Categoria> categorias = new HashSet<>();
=======
	
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
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	
	public ArtigoDto() {}
	public ArtigoDto(Artigo obj) {
		super();
		id = obj.getId();
		titulo = obj.getTitulo();
		dataPublicacao = obj.getDataPublicacao();
<<<<<<< HEAD
		conteudo = obj.getConteudo();
		status = obj.getStatus();
		url = obj.getUrl();
=======
		
		conteudoIntroducao = obj.getConteudoIntroducao();
		conteudoParagrafoOne = obj.getConteudoParagrafoOne();
		conteudoParagrafoTwo = obj.getConteudoParagrafoTwo();
		conteudoConclusao = obj.getConteudoConclusao();
		
		status = obj.getStatus();
		url = obj.getUrl();
		slog = obj.getSlog();
		imgCard = obj.getImgCard();
		imgDestaque = obj.getImgDestaque();
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
		contador = obj.getContador();
		autor = new AutorDto(obj.getAutor());
		comment = obj.getComment();
		tag = obj.getTag();
<<<<<<< HEAD
		categorias = obj.getCategorias();
=======
		categorias = obj.getCategoria();
		secao = obj.getSecao();
		if (secao == null) {
			secao = new Secao();
		}
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
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

<<<<<<< HEAD
	public String getConteudo() {
		return conteudo;
	}

=======
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
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	public ArtigoStatus getStatus() {
		return status;
	}
	public String getUrl() {
		return url;
	}

	public Integer getContador() {
		return contador;
	}
<<<<<<< HEAD
=======
	public String getSlog() {
		return slog;
	}
	
	public String getImgDestaque() {
		return imgDestaque;
	}
	public String getImgCard() {
		return imgCard;
	}
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	public AutorDto getAutor() {
		return autor;
	}

<<<<<<< HEAD
=======
	public Secao getSecao() {
		return secao;
	}
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	public List<Comentario> getComment() {
		return comment;
	}

	public List<Tag> getTag() {
		return tag;
	}
<<<<<<< HEAD

	public Set<Categoria> getCategorias() {
		return categorias;
	}

=======
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
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	public static List<ArtigoDto> toConvert(List<Artigo> lista) {
		return lista.stream().map(ArtigoDto::new).collect(Collectors.toList());
	}
	
}
