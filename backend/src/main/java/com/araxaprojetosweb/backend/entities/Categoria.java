package com.araxaprojetosweb.backend.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Length;

import com.sun.istack.NotNull;

@Entity
@Table(name = "tb_categoria")
public class Categoria {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull @Length(min = 1, max = 50)
	private String nome;
	@NotNull @Size(max = 80)
	private String descricao;
	
	@ManyToMany(mappedBy = "categorias")
	private Set<Artigo> artigos = new HashSet<>();
	
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

	public Set<Artigo> getArtigos() {
		return artigos;
	}
	
		
}
