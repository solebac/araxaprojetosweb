package com.araxaprojetosweb.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.araxaprojetosweb.backend.entities.Autor;

public interface AutorRepository extends JpaRepository<Autor, Long> {

}
