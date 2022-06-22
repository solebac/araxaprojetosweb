package com.araxaprojetosweb.backend.entities.dto;

import com.araxaprojetosweb.backend.util.AutenticationEncoder;

public class TokenDto {
	private String token;
	private String tipo;
	public TokenDto(String token, String tipo) {
		this.token = AutenticationEncoder.passwordBCrypt(token);
		this.tipo = tipo;
	}
	public String getToken() {
		return token;
	}
	
	public String getTipo() {
		return tipo;
	}
	
	
	
	
}
