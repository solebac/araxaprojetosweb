<<<<<<< HEAD
package com.araxaprojetosweb.backend.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
=======
	package com.araxaprojetosweb.backend.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
=======
import javax.persistence.ManyToOne;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.araxaprojetosweb.backend.entities.enums.ArtigoStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_artigo")
<<<<<<< HEAD
public class Artigo {
=======
public class Artigo implements Serializable{
	
	private static final long serialVersionUID = 1L;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String titulo;
	private Date dataPublicacao;
<<<<<<< HEAD
	@Size(max = 1000)
	private String conteudo;
=======
	
	@Size(max = 1000) @Column(name = "introducao")
	private String conteudoIntroducao;
	@Size(max = 1000) @Column(name = "paragrafo_one")
	private String conteudoParagrafoOne;
	@Size(max = 1000) @Column(name = "paragrafo_two")
	private String conteudoParagrafoTwo;
	@Size(max = 1000) @Column(name = "conclusao")
	private String conteudoConclusao;
	
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	@Enumerated(EnumType.STRING)
	private ArtigoStatus status;
	private String url;
	private Integer contador;
<<<<<<< HEAD
=======
	@Size(max = 7)
	private String slog;
	
	private String imgDestaque;
	private String imgCard;//Mini img
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

	@OneToOne
	@NotNull
	/* @MapsId */
	private Autor autor;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "artigo", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Comentario> comment = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "artigo", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Tag> tag = new ArrayList<>();
<<<<<<< HEAD

	// @Transient //Para o JPA não reconhecer
	@ManyToMany
	@JoinTable(name = "tb_artigo_categoria", joinColumns = @JoinColumn(name = "artigo_id"), inverseJoinColumns = @JoinColumn(name = "categoria_id"))
	private Set<Categoria> categorias = new HashSet<>();
=======
	
	@ManyToOne
	private Secao secao;

	// @Transient //Para o JPA não reconhecer
	/*
	 * #alt
	 * @ManyToMany
	@JoinTable(name = "tb_artigo_categoria", joinColumns = @JoinColumn(name = "artigo_id"), inverseJoinColumns = @JoinColumn(name = "categoria_id"))
	private Set<Categoria> categorias = new HashSet<>();*/

	@OneToOne
	@NotNull
	/* @MapsId */
	private Categoria categoria;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

	public Artigo() {
	}

<<<<<<< HEAD
	public Artigo(Long id, String titulo, Date dataPublicacao, @Size(max = 1000) String conteudo, ArtigoStatus status,
			String url, @NotNull Autor autor, Integer contador) {
		this.id = id;
		this.titulo = titulo;
		this.dataPublicacao = dataPublicacao;
		this.conteudo = conteudo;
		this.status = status;
		this.url = url;
		this.autor = autor;
		this.contador = contador; /*Number comment*/
	}
=======
	public Artigo(Long id, String titulo, Date dataPublicacao,@Size(max = 1000) String conteudoIntroducao, @Size(max = 1000) String conteudoParagrafoOne,
			@Size(max = 1000) String conteudoParagrafoTwo, @Size(max = 1000) String conteudoConclusao, ArtigoStatus status,
			String url, String slog, String imgDestaque, String imgCard, @NotNull Autor autor, Integer contador, @NotNull Categoria categoria, Secao secao) {
		this.id = id;
		this.titulo = titulo;
		this.dataPublicacao = dataPublicacao;
		this.conteudoIntroducao = conteudoIntroducao;
		this.conteudoParagrafoOne = conteudoParagrafoOne;
		this.conteudoParagrafoTwo = conteudoParagrafoTwo;
		this.conteudoConclusao = conteudoConclusao;
		this.status = status;
		this.url = url;
		this.autor = autor;
		this.contador = contador; //Number comment
		this.slog = slog;
		this.categoria = categoria;
		this.secao = secao;
		this.imgDestaque = imgDestaque;
		this.imgCard = imgCard;
	}
	
	/*
	 * #alt 
	 public Artigo(Long id, String titulo, Date dataPublicacao, @Size(max = 1000) String conteudo, ArtigoStatus status,
			String url, String slog, @NotNull Autor autor, Integer contador) {
		this.id = id;
		this.titulo = titulo;
		this.dataPublicacao = dataPublicacao;
		this.conteudo = conteudo;
		this.status = status;
		this.url = url;
		this.autor = autor;
		this.contador = contador; //Number comment
		this.slog = slog;
	}*/
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

<<<<<<< HEAD
=======
	public String getSlog() {
		return slog;
	}

	public void setSlog(String slog) {
		this.slog = slog;
	}

>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public Date getDataPublicacao() {
		return dataPublicacao;
	}

	public void setDataPublicacao(Date dataPublicacao) {
		this.dataPublicacao = dataPublicacao;
	}

<<<<<<< HEAD
	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
=======
	public String getConteudoIntroducao() {
		return conteudoIntroducao;
	}

	public void setConteudoIntroducao(String conteudoIntroducao) {
		this.conteudoIntroducao = conteudoIntroducao;
	}

	public String getConteudoParagrafoOne() {
		return conteudoParagrafoOne;
	}

	public void setConteudoParagrafoOne(String conteudoParagrafoOne) {
		this.conteudoParagrafoOne = conteudoParagrafoOne;
	}

	public String getConteudoParagrafoTwo() {
		return conteudoParagrafoTwo;
	}

	public void setConteudoParagrafoTwo(String conteudoParagrafoTwo) {
		this.conteudoParagrafoTwo = conteudoParagrafoTwo;
	}

	public String getConteudoConclusao() {
		return conteudoConclusao;
	}

	public void setConteudoConclusao(String conteudoConclusao) {
		this.conteudoConclusao = conteudoConclusao;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	}

	public ArtigoStatus getStatus() {
		return status;
	}

	public void setStatus(ArtigoStatus status) {
		this.status = status;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	public Integer getContador() {
		return contador;
	}

	public void setContador(Integer contador) {
		this.contador = contador;
	}
<<<<<<< HEAD
=======
	
	public String getImgDestaque() {
		return imgDestaque;
	}

	public void setImgDestaque(String imgDestaque) {
		this.imgDestaque = imgDestaque;
	}

	public String getImgCard() {
		return imgCard;
	}

	public void setImgCard(String imgCard) {
		this.imgCard = imgCard;
	}
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

	public Autor getAutor() {
		return autor;
	}

	public void setAutor(Autor autor) {
		this.autor = autor;
	}
<<<<<<< HEAD
=======
	
	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	
	public Secao getSecao() {
		return secao;
	}

	public void setSecao(Secao secao) {
		this.secao = secao;
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
=======
	/*
	 * #alt
	 * public Set<Categoria> getCategorias() {
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
		return categorias;
	}

	public void setCategorias(Categoria cat) {
		this.categorias.add(cat);
<<<<<<< HEAD
	}
=======
	}*/
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

	public void setTag(Tag tag) {
		this.tag.add(tag);
	}

	public void setComment(Comentario comment) {
		this.comment.add(comment);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((autor == null) ? 0 : autor.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Artigo other = (Artigo) obj;
		if (autor == null) {
			if (other.autor != null)
				return false;
		} else if (!autor.equals(other.autor))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
