package com.araxaprojetosweb.backend.entities.dto.projection;

import java.util.Date;

public interface IComentarioProjecao {

	Long getId();
	String getNome();
	String getTexto();
	Date getData_hora();
	Long getId_artigo_comment();
}
