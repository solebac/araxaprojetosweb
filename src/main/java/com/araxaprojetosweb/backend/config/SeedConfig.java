package com.araxaprojetosweb.backend.config;

import java.util.Arrays;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.araxaprojetosweb.backend.entities.Artigo;
import com.araxaprojetosweb.backend.entities.Autor;
import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.Comentario;
import com.araxaprojetosweb.backend.entities.Tag;
import com.araxaprojetosweb.backend.repositories.ArtigoRepository;
import com.araxaprojetosweb.backend.repositories.AutorRepository;
import com.araxaprojetosweb.backend.repositories.CategoriaRepository;
import com.araxaprojetosweb.backend.repositories.ComentarioRepository;
import com.araxaprojetosweb.backend.repositories.TagRepository;

@Configuration
@Profile("test")
public class SeedConfig implements CommandLineRunner {

	@Autowired
	private AutorRepository autorRepository;
	@Autowired
	private CategoriaRepository categoriaRepository;
	@Autowired
	private ArtigoRepository artigoRepository;
	@Autowired
	private ComentarioRepository comentarioReposiroty;
	@Autowired
	private TagRepository tagRepository;

	@Override
	public void run(String... args) throws Exception {
		Categoria cat1 = new Categoria(null, "Programacao", "Descrição Test I");
		Categoria cat2 = new Categoria(null, "Network", "Descrição Test II");
		Categoria cat3 = new Categoria(null, "AWS", "Descrição Test IV");
		Categoria cat4 = new Categoria(null, "GNU", "Descrição Test XX");
		Autor a1 = new Autor(null, "Flavio Rogerio", "Primeiro Livro", "c:\temp", "solebac@hotmail.com", "Flavio",
				"123");
		Autor a2 = new Autor(null, "Lucas Rogerio", "Segundo Livro", "c:\temp", "lucas@hotmail.com", "Lucas", "123");
		categoriaRepository.saveAll(Arrays.asList(cat1, cat2, cat4, cat3));
		autorRepository.saveAll(Arrays.asList(a1, a2));
		Artigo art1 = new Artigo(null, "Primeiro Artigo", new Date(),
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				"INCLUIDO", "https://www.lipsum.com/", a1);
		Artigo art2 = new Artigo(null, "Segundo Artigo", new Date(),
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				"INCLUIDO", "https://www.lipsum.com/", a2);
		art1.setCategorias(cat1);
		art1.setCategorias(cat2);
		art1.setCategorias(cat3);
		art2.setCategorias(cat4);
		artigoRepository.saveAll(Arrays.asList(art1, art2));
		Comentario c1 = new Comentario(null, "Adalberto", "LOREM IPSUM", new Date(), art1);
		Comentario c2 = new Comentario(null, "Ana", "LOREM IPSUM, LOREM IPSUM", new Date(), art2);
		Comentario c3 = new Comentario(null, "Tania", "LOREM IPSUM, LOREM IPSUM, LOREM IPSUM", new Date(), art1);
		Comentario c4 = new Comentario(null, "LUCAS JUCA", "Hibernate @OneToOne @NotNull", new Date(), art1);
		comentarioReposiroty.saveAll(Arrays.asList(c1, c2, c3, c4));
		Tag tg1 = new Tag(null, "JAVA", art1);
		Tag tg2 = new Tag(null, "LINUX", art2);
		tagRepository.saveAll(Arrays.asList(tg1, tg2));
		
		
	}

}
