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
<<<<<<< HEAD
=======
import com.araxaprojetosweb.backend.entities.dto.AutorDto;
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
import com.araxaprojetosweb.backend.entities.dto.LoginFormDto;
import com.araxaprojetosweb.backend.entities.dto.TokenDto;

@RestController
@RequestMapping("/auth")
public class LoginController {
<<<<<<< HEAD
	
	@Autowired
	private AuthenticationManager manager;
	
=======

	@Autowired
	private AuthenticationManager manager;

>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	@PostMapping
	public ResponseEntity<?> autenticar(@RequestBody @Valid LoginFormDto form) {
		UsernamePasswordAuthenticationToken dadosLogin = form.converter();
		try {
<<<<<<< HEAD
			//Extrai o user logado
=======
			// Extrai o user logado
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
			Authentication authenticate = manager.authenticate(dadosLogin);
			SecurityContextHolder.getContext().setAuthentication(authenticate);
			Autor obj = (Autor) authenticate.getPrincipal();
			StringBuilder strToken = new StringBuilder();
<<<<<<< HEAD
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
		
=======
			strToken.append(obj.getEmail()).append(obj.getSenha()).append(obj.getNome());
			System.out.println(strToken.toString());
			String basic = obj.getEmail() + ":" + obj.getSenha();
			return ResponseEntity.ok()
					.body(new TokenDto(basic, strToken.toString(), "Basic", new AutorDto(obj)));
		} catch (BadCredentialsException be) {

			System.out.println(be.getLocalizedMessage() + "\n------");
			System.out.println(be.getStackTrace() + "\n------");
			System.out.println(be.getMessage() + "\n------");
			System.out.println(be.getCause() + "\n------");
			return ResponseEntity.badRequest().build();

		} catch (AuthenticationException e) {
			e.printStackTrace();
			return ResponseEntity.badRequest().build();
		}

>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
	}
}
