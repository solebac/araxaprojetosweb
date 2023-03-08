package com.araxaprojetosweb.backend.repositories;

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
	
	@Query(value="select count(tab2.secao_id) as contador, tab.nome, tab.categoria_id , coalesce(tab2.secao_id,0) as secao_id "
			+ "			from tb_secao tab "
			+ "inner join TB_CATEGORIA tab1 on(tab.categoria_id = tab1.id and tab.categoria_id = :categoria_id) "
			+ "left join tb_artigo tab2 on(tab.id = tab2.secao_id) "
			+ "group by tab.nome, tab.categoria_id ,  secao_id "
			+ "order by tab.nome", nativeQuery = true)
	List<ISecaoProjecaoFull> findByCategoriaFull(Integer categoria_id);
}
