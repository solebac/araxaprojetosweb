package com.araxaprojetosweb.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.araxaprojetosweb.backend.entities.Tag;

public interface TagRepository extends JpaRepository<Tag, Long>{

}
