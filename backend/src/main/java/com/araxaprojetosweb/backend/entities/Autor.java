package com.araxaprojetosweb.backend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_autor")
public class Autor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotNull
	@Size(min = 1, max = 50)
	private String nome;
	@Column(name = "biografia")
	@Size(max = 1000)
	private String bio;
	private String foto;
	@NotNull
	@Size(min = 1, max = 80) @Email
	private String email;
	@NotNull
	@Size(min = 1, max = 20)
	private String usuario;
	@NotNull
	@Size(min = 3, max = 20)
	private String senha;
	
	/*@OneToOne(mappedBy = "autor")
	private Artigo artigo;*/

	public Autor() 
	{
		
	}
	public Autor(Long id, @NotNull @Size(min = 1, max = 50) String nome, @Size(max = 1000) String bio, String foto,
			@NotNull @Size(min = 1, max = 80) @Email String email, @NotNull @Size(min = 1, max = 20) String usuario,
			@NotNull @Size(min = 3, max = 20) String senha) {
		super();
		this.id = id;
		this.nome = nome;
		this.bio = bio;
		this.foto = foto;
		this.email = email;
		this.usuario = usuario;
		this.senha = senha;
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
	public String getBio() {
		return bio;
	}
	public void setBio(String bio) {
		this.bio = bio;
	}
	public String getFoto() {
		return foto;
	}
	public void setFoto(String foto) {
		this.foto = foto;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		result = prime * result + ((usuario == null) ? 0 : usuario.hashCode());
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
		Autor other = (Autor) obj;
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
		if (usuario == null) {
			if (other.usuario != null)
				return false;
		} else if (!usuario.equals(other.usuario))
			return false;
		return true;
	}
	

	
	
}
