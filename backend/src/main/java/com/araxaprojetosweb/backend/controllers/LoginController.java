package com.araxaprojetosweb.backend.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.araxaprojetosweb.backend.entities.Autor;
import com.araxaprojetosweb.backend.entities.dto.LoginFormDto;
import com.araxaprojetosweb.backend.entities.dto.TokenDto;

@RestController
@RequestMapping("/auth")
public class LoginController {
	
	@Autowired
	private AuthenticationManager manager;
	
	@PostMapping
	public ResponseEntity<?> autenticar(@RequestBody @Valid LoginFormDto form) {
		UsernamePasswordAuthenticationToken dadosLogin = form.converter();
		try {
			//Extrai o user logado
			Authentication authenticate = manager.authenticate(dadosLogin);
			SecurityContextHolder.getContext().setAuthentication(authenticate);
			Autor obj = (Autor) authenticate.getPrincipal();
			StringBuilder strToken = new StringBuilder();
			strToken.append(obj.getEmail())
				    .append(obj.getSenha())
				    .append(obj.getNome());
			System.out.println(strToken.toString());
			return ResponseEntity.ok().body(new TokenDto(strToken.toString(), "Basic"));	
		}catch (BadCredentialsException be) {

	        System.out.println(be.getLocalizedMessage() + "\n------");
	        System.out.println(be.getStackTrace() + "\n------");
	        System.out.println(be.getMessage() + "\n------");
	        System.out.println(be.getCause() + "\n------");
	        return ResponseEntity.badRequest().build();

	    }
		catch (AuthenticationException e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}
		
	}
}
