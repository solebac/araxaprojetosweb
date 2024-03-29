package com.araxaprojetosweb.backend.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;

@Entity
@Table(name = "tb_categoria")
public class Categoria implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull @Length(min = 1, max = 50)
	private String nome;
	@NotNull @Size(max = 80)
	private String descricao;
	
	/* 
	 * #alt
	@JsonIgnore
	@ManyToMany(mappedBy = "categorias")
	private Set<Artigo> artigos = new HashSet<>();*/
	
	/*@OneToMany(cascade = CascadeType.ALL,mappedBy = "categoria", fetch = FetchType.LAZY)*/
	@OneToMany(mappedBy = "categoria", fetch = FetchType.LAZY)
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

	/*
	 * #alt
	 * public Set<Artigo> getArtigos() {
		return artigos;
	}*/

	@JsonManagedReference
	public Set<Secao> getSecao() {
		return secao;
	}

	public void setSecao(Secao secao) {
		this.secao.add(secao);
	}
		
}
