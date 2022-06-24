package com.araxaprojetosweb.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.araxaprojetosweb.backend.entities.Secao;

@Repository
public interface SecaoRepository extends JpaRepository<Secao, Integer>{

}
