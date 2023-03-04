package com.araxaprojetosweb.backend.repositories;

<<<<<<< HEAD
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.araxaprojetosweb.backend.entities.Secao;

@Repository
public interface SecaoRepository extends JpaRepository<Secao, Integer>{

=======
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.araxaprojetosweb.backend.entities.Secao;
import com.araxaprojetosweb.backend.entities.dto.projection.ISecaoProjecaoFull;
import com.araxaprojetosweb.backend.entities.dto.projection.ISecaoProjecaoSingle;

@Repository
public interface SecaoRepository extends JpaRepository<Secao, Integer>{
	@Query(value="select tab.id,tab.nome,tab.categoria_id "
			+ "from tb_secao tab where tab.categoria_id = :categoria_id ", nativeQuery=true)
	List<ISecaoProjecaoSingle> findByCategoriaSingle(Integer categoria_id);
	
	@Query(value="select count(tab2.secao_id) as contador, tab.nome, tab.categoria_id , tab2.secao_id\r\n"
			+ "			from tb_secao tab \r\n"
			+ "inner join TB_CATEGORIA tab1 on(tab.categoria_id = tab1.id and tab.categoria_id = :categoria_id)\r\n"
			+ "left join tb_artigo tab2 on(tab.id = tab2.secao_id)\r\n"
			+ "group by tab.id\r\n"
			+ "order by tab.nome", nativeQuery = true)
	List<ISecaoProjecaoFull> findByCategoriaFull(Integer categoria_id);
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
}
