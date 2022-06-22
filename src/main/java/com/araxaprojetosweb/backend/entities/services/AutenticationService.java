package com.araxaprojetosweb.backend.entities.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.araxaprojetosweb.backend.entities.Autor;
import com.araxaprojetosweb.backend.repositories.AutorRepository;

@Service
public class AutenticationService implements UserDetailsService{

	@Autowired
	private AutorRepository repository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Autor> usuario = repository.findByEmail(username);
		if (!usuario.isPresent()) {
			throw new UsernameNotFoundException("User not found...!");
		}
		return usuario.get();
	}
	
}
