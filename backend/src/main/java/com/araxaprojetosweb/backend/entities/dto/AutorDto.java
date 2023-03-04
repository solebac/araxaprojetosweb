package com.araxaprojetosweb.backend.entities.dto;

import java.util.List;
import java.util.stream.Collectors;

import com.araxaprojetosweb.backend.entities.Autor;

public class AutorDto {
	private Long id;
	private String nome;
	private String bio;
	private String foto;
	private String email;
	private String usuario;
	public AutorDto() {
		
	}
	public AutorDto(Long id, String nome, String bio, String foto, String email, String usuario) {
		this.id = id;
		this.nome = nome;
		this.bio = bio;
		this.foto = foto;
		this.email = email;
		this.usuario = usuario;
	}
	public AutorDto(Autor obj) {
		id = obj.getId();
		nome = obj.getNome();
		bio = obj.getBio();
		foto = obj.getFoto();
		email = obj.getEmail();
		usuario = obj.getUsuario();
	}
	public Long getId() {
		return id;
	}
	public String getNome() {
		return nome;
	}
	public String getBio() {
		return bio;
	}
	public String getFoto() {
		return foto;
	}
<<<<<<< HEAD
=======
	
	public void setFoto(String foto) {
		this.foto = foto;
	}
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	public String getEmail() {
		return email;
	}
	public String getUsuario() {
		return usuario;
	}
	public static List<AutorDto> toConvert(List<Autor> lista) {
		return lista
				.stream()
				.map(AutorDto::new)
				.collect(Collectors.toList());
	}
	public static AutorDto toConvertId(Autor obj) {
		return new AutorDto(obj);
	}
	
}
