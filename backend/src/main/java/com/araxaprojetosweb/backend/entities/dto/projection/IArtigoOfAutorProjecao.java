package com.araxaprojetosweb.backend.entities.dto.projection;

import java.util.Date;

public interface IArtigoOfAutorProjecao {

	Long getId();
	Integer getContador();
	String getConteudo();
	Date getData_publicacao();
	String getStatus();
	String getTitulo();
	String getUrl(); 
	String getNomeAutor();
	Long getAutor_id();
	
}