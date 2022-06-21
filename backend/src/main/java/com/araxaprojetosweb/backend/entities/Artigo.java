package com.araxaprojetosweb.backend.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.lang.Nullable;

@Entity
@Table(name = "tb_artigo")
public class Artigo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String titulo;
	private Date dataPublicacao;
	@Size(max = 1000)
	private String conteudo;
	private String status;
	private String url;
	@OneToOne
	@NotNull
	/* @MapsId */
	private Autor autor;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_artigo_comment")
	private List<Comentario> comment = new ArrayList<>();
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "artigo")
	private List<Tag> tag = new ArrayList<>();

	// @Transient //Para o JPA não reconhecer
	@ManyToMany
	@JoinTable(name = "tb_artigo_categoria", joinColumns = @JoinColumn(name = "artigo_id"), inverseJoinColumns = @JoinColumn(name = "categoria_id"))
	private Set<Categoria> categorias = new HashSet<>();

	public Artigo() {
	}

	public Artigo(Long id, String titulo, Date dataPublicacao, @Size(max = 1000) String conteudo, String status,
			String url, @NotNull Autor autor) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.dataPublicacao = dataPublicacao;
		this.conteudo = conteudo;
		this.status = status;
		this.url = url;
		this.autor = autor;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public String getConteudo() {
		return conteudo;
	}

	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Autor getAutor() {
		return autor;
	}

	public void setAutor(Autor autor) {
		this.autor = autor;
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
	public void setCategorias(Categoria cat) {
		this.categorias.add(cat);
	}
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
