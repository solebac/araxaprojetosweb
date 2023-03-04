package com.araxaprojetosweb.backend.entities.dto;

import com.araxaprojetosweb.backend.entities.Autor;
import com.araxaprojetosweb.backend.entities.Categoria;

public class MultiDataArticles {
	public Autor autor;
	public Categoria categoria;
	public Autor getAutor() {
		return autor;
	}
	public void setAutor(Autor autor) {
		this.autor = autor;
	}
	public Categoria getCategoria() {
		return categoria;
	}
	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}
	
	
}