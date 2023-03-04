package com.araxaprojetosweb.backend.entities;

<<<<<<< HEAD
=======
import java.io.Serializable;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD
import javax.persistence.ManyToMany;
=======
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;

<<<<<<< HEAD
import com.fasterxml.jackson.annotation.JsonIgnore;
=======
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;

@Entity
@Table(name = "tb_categoria")
<<<<<<< HEAD
public class Categoria {
=======
public class Categoria implements Serializable{
	
	private static final long serialVersionUID = 1L;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull @Length(min = 1, max = 50)
	private String nome;
	@NotNull @Size(max = 80)
	private String descricao;
	
<<<<<<< HEAD
	@JsonIgnore
	@ManyToMany(mappedBy = "categorias")
	private Set<Artigo> artigos = new HashSet<>();
	
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "categoria", fetch = FetchType.LAZY)
=======
	/* 
	 * #alt
	@JsonIgnore
	@ManyToMany(mappedBy = "categorias")
	private Set<Artigo> artigos = new HashSet<>();*/
	
	/*@OneToMany(cascade = CascadeType.ALL,mappedBy = "categoria", fetch = FetchType.LAZY)*/
	@OneToMany(mappedBy = "categoria", fetch = FetchType.LAZY)
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	private Set<Secao> secao = new HashSet<>();
	
	public Categoria() {
		super();
	}

	public Categoria(Long id, @Length(min = 1, max = 50) String nome, @Size(max = 80) String descricao) {
		super();
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

<<<<<<< HEAD
	public Set<Artigo> getArtigos() {
		return artigos;
	}
=======
	/*
	 * #alt
	 * public Set<Artigo> getArtigos() {
		return artigos;
	}*/
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

	@JsonManagedReference
	public Set<Secao> getSecao() {
		return secao;
	}

	public void setSecao(Secao secao) {
		this.secao.add(secao);
	}
		
}
