package com.araxaprojetosweb.backend.repositories;

<<<<<<< HEAD
import org.springframework.data.jpa.repository.JpaRepository;

import com.araxaprojetosweb.backend.entities.Artigo;

public interface ArtigoRepository extends JpaRepository<Artigo, Long>{
=======
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.araxaprojetosweb.backend.entities.Artigo;
import com.araxaprojetosweb.backend.entities.Autor;
import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.dto.ArtigoDto;
import com.araxaprojetosweb.backend.entities.dto.projection.IArtigoCategoriaProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.IArtigoOfAutorProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.IArtigoRecentsProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.IComentarioProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.ITagProjecao;

@Repository
public interface ArtigoRepository extends JpaRepository<Artigo, Long> {
	/*
	 * @Query(
	 * value="SELECT id,contador,conteudo, data_publicacao,status,titulo,\r\n" +
	 * "url, autor_id FROM tb_artigo f order by 1 desc limit :intervalo",
	 * nativeQuery=true)
	 */
	
	/*
	 * #alt
	 * @Query(value = "SELECT tab.id,tab.contador,tab.conteudo, tab.data_publicacao,tab.status,tab.titulo, tab.url, tab.autor_id FROM tb_artigo tab inner join TB_ARTIGO_CATEGORIA tab1 on(tab.id = tab1.artigo_id and tab1.categoria_id=2) order by 1 desc limit :intervalo", nativeQuery = true)
	List<IArtigoRecentsProjecao> findLimitPosts(Long intervalo);*/
	@Query(value = "SELECT tab.id,tab.contador,tab.conteudo, tab.data_publicacao,tab.status,tab.titulo, "
			+ "tab.url, tab.autor_id FROM tb_artigo tab "
			+ "where tab.categoria_id=2 order by 1 desc limit :intervalo", nativeQuery = true)
	List<IArtigoRecentsProjecao> findLimitPosts(Long intervalo);

	@Query(value = "select tab.id,tab.contador,tab.conteudo, tab.data_publicacao,tab.status,tab.titulo,\r\n"
			+ "tab.url, tab1.nome  AS nomeAutor, tab1.id AS autor_id from tb_artigo tab\r\n"
			+ "inner join tb_autor tab1 on tab.autor_id = tab1.id\r\n" + "where tab.url = :url ", nativeQuery = true)
	List<IArtigoOfAutorProjecao> findAllbyArtigoAutor(String url);

	@Query(value = "select tab.id, tab.descricao, tab.nome from tb_categoria tab\r\n"
			+ "inner join tb_artigo_categoria tab1 on tab.id = tab1.categoria_id\r\n"
			+ "where tab1.categoria_id = :categoria_id", nativeQuery = true)
	List<IArtigoCategoriaProjecao> findCategoryByArtigo(Integer categoria_id);

	@Query(value = "select * from tb_tag where artigo_id = :artigo_id", nativeQuery = true)
	List<ITagProjecao> findTabByArtigo(Integer artigo_id);

	@Query(value = "select tab.* from tb_comentario tab where id_artigo_comment = :artigo_id", nativeQuery = true)
	List<IComentarioProjecao> findCommentByArtigo(Integer artigo_id);

	
	/*
	 * #alt
	 * Page<Artigo> findByCategorias(Categoria categorias, Pageable pageable);*/
	Page<ArtigoDto> findByCategoria(Categoria categoria, Pageable pageable);
	
	Page<ArtigoDto> findByCategoriaAndAutor(Categoria categoria, Autor autor, Pageable pageable);
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8

}
