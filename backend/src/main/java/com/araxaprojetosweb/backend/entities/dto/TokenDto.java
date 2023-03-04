package com.araxaprojetosweb.backend.entities.dto;

<<<<<<< HEAD
import com.araxaprojetosweb.backend.util.AutenticationEncoder;

public class TokenDto {
	private String token;
	private String tipo;
	public TokenDto(String token, String tipo) {
		this.token = AutenticationEncoder.passwordBCrypt(token);
		this.tipo = tipo;
	}
=======
import com.araxaprojetosweb.backend.util.AutenticationBase64;
import com.araxaprojetosweb.backend.util.AutenticationEncoder;

public class TokenDto {
	private String basic;
	private String token;
	private String tipo;
	private AutorDto autor;
	/*
	 * Implementação Barea.: JWT
	 * public TokenDto(String token, String tipo) {
		this.token = AutenticationEncoder.passwordBCrypt(token);
		this.tipo = tipo;
	}*/
	
	public TokenDto(String basic, String token, String tipo, AutorDto autor) {
		this.basic = AutenticationBase64.passwordEncodeBase64(basic);
		this.token = AutenticationEncoder.passwordBCrypt(token);;
		this.tipo = tipo;
		this.autor = autor;
	}

>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	public String getToken() {
		return token;
	}
	
	public String getTipo() {
		return tipo;
	}
<<<<<<< HEAD
	
	
=======
	public String getBasic() {
		return basic;
	}

	public AutorDto getAutor() {
		return autor;
	}
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	
	
}
