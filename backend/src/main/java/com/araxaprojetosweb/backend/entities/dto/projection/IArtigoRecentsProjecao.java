package com.araxaprojetosweb.backend.entities.dto.projection;

import java.util.Date;


public interface IArtigoRecentsProjecao {
	Long getId();
	Integer getContador();
	String getConteudo(); 
	Date getData_publicacao();
	String getStatus();
	String getTitulo();
	String getUrl();
	Long getAutor_id();
	
}
