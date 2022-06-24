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
import com.araxaprojetosweb.backend.entities.Secao;
import com.araxaprojetosweb.backend.entities.Tag;
import com.araxaprojetosweb.backend.repositories.ArtigoRepository;
import com.araxaprojetosweb.backend.repositories.AutorRepository;
import com.araxaprojetosweb.backend.repositories.CategoriaRepository;
import com.araxaprojetosweb.backend.repositories.ComentarioRepository;
import com.araxaprojetosweb.backend.repositories.SecaoRepository;
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
	@Autowired
	private SecaoRepository secRepository;

	@Override
	public void run(String... args) throws Exception {
		Categoria cat1 = new Categoria(null, "Portifolio", "Documentos Uteis");
		Categoria cat2 = new Categoria(null, "Blog", "Discursões Sobre Tecnologias");
		Categoria cat3 = new Categoria(null, "Hacker", "Comentarios Hacker Ethical");
		Categoria cat4 = new Categoria(null, "Teste", "Descrição Test");
		
		Secao s1 = new Secao(null, "Coleta de Informação", cat3);
		Secao s2 = new Secao(null, "Vulnerabilidades", cat3);
		Secao s3 = new Secao(null, "FingerPrinting", cat3);
		Secao s4 = new Secao(null, "Wireless", cat3);
		Secao s5 = new Secao(null, "Denial of Service", cat3);
		Secao s6 = new Secao(null, "SQL Injection", cat3);
		Secao s7 = new Secao(null, "Cracking", cat3);
		Secao s8 = new Secao(null, "Man in the Middle", cat3);
		Secao s9 = new Secao(null, "Engenharia Social", cat3);
		Secao s10 = new Secao(null, "Pentest", cat3);
		Secao s11 = new Secao(null, "NMAP | Wireshark", cat3);
		Secao s12 = new Secao(null, "Reverse Engineering", cat3);
		Secao s13 = new Secao(null, "Crawlers e Spiders", cat3);
		
		Autor a1 = new Autor(null, "Flavio Rogerio", "Primeiro Livro", "c:\temp", "solebac@hotmail.com", "Flavio",
				"$2a$10$Bcb/zFo0yHKWsIuAoTZFAObzXzzHgw3TVe1F1CTpcs5i4S8x3rC6q");
		Autor a2 = new Autor(null, "Lucas Rogerio", "Segundo Livro", "c:\temp", "lucas@hotmail.com", "Lucas",
				"$2a$10$Bcb/zFo0yHKWsIuAoTZFAObzXzzHgw3TVe1F1CTpcs5i4S8x3rC6q");
		categoriaRepository.saveAll(Arrays.asList(cat1, cat2, cat4, cat3));
		secRepository.saveAll(Arrays.asList(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13));
		autorRepository.saveAll(Arrays.asList(a1, a2));
		Artigo art1 = new Artigo(null, "Primeiro Artigo", new Date(),
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				"INCLUIDO", "https://www.lipsum.com/", a1, 12);
		Artigo art2 = new Artigo(null, "Segundo Artigo", new Date(),
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				"INCLUIDO", "https://www.lipsum.com/", a2, 12);
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
