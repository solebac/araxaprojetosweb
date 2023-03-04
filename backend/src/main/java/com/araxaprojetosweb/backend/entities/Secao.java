package com.araxaprojetosweb.backend.entities;

import java.io.Serializable;
<<<<<<< HEAD

=======
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
<<<<<<< HEAD
=======
import javax.persistence.OneToMany;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
<<<<<<< HEAD
=======
import com.fasterxml.jackson.annotation.JsonIgnore;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

@Entity
@Table(name = "tb_secao")
public class Secao implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@NotNull
	private String nome;

	@ManyToOne(fetch = FetchType.LAZY)
	/*Test @JsonIgnore*/
	@NotNull
	private Categoria categoria;
<<<<<<< HEAD
=======
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "secao", fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Artigo> artigo = new ArrayList<>();
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

	public Secao() {
	}

	public Secao(Integer id, @NotNull String nome, @NotNull Categoria categoria) {
		super();
		this.id = id;
		this.nome = nome;
		this.categoria = categoria;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@JsonBackReference
	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
<<<<<<< HEAD
=======
	
	public List<Artigo> getArtigo() {
		return artigo;
	}

	public void setArtigo(List<Artigo> artigo) {
		this.artigo = artigo;
	}
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
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
		Secao other = (Secao) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		return true;
	}
	
}
