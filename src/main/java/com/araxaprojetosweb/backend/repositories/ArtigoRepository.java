package com.araxaprojetosweb.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.araxaprojetosweb.backend.entities.Artigo;

public interface ArtigoRepository extends JpaRepository<Artigo, Long>{

}
