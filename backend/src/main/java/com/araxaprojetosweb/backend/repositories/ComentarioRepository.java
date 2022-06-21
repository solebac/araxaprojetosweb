package com.araxaprojetosweb.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.araxaprojetosweb.backend.entities.Comentario;

public interface ComentarioRepository extends JpaRepository<Comentario, Long> {

}
