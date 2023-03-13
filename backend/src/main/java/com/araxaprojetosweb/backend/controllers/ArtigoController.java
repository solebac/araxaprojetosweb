package com.araxaprojetosweb.backend.controllers;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.araxaprojetosweb.backend.entities.Artigo;
import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.dto.ArtigoDto;
import com.araxaprojetosweb.backend.entities.dto.ArtigoNewsDto;
import com.araxaprojetosweb.backend.entities.dto.MultiDataArticles;
import com.araxaprojetosweb.backend.entities.dto.projection.IArtigoCategoriaProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.IArtigoOfAutorProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.IArtigoRecentsProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.IArtigosNews;
import com.araxaprojetosweb.backend.entities.dto.projection.IComentarioProjecao;
import com.araxaprojetosweb.backend.entities.dto.projection.ITagProjecao;
import com.araxaprojetosweb.backend.entities.services.ArtigoServices;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/articles")
public class ArtigoController {

	final String UPLOAD_FOLDER = "Files-Uploads//";

	@Autowired
	private ArtigoServices services;

	@GetMapping
	public ResponseEntity<Page<ArtigoDto>> findAll(Pageable pageable) {
		Page<ArtigoDto> result = services.findAll(pageable);
		return ResponseEntity.ok().body(result);
	}
	/*
	 * #alt
	 * 
	 * @PostMapping(path="/subcategorias") public ResponseEntity<Page<ArtigoDto>>
	 * findByCategorias(@RequestBody Categoria categorias, Pageable pageable) {
	 * Page<ArtigoDto> result = services.findByCategorias(categorias, pageable);
	 * return ResponseEntity.ok().body(result); }
	 */

	@PostMapping(path = "/subcategorias")
	public ResponseEntity<Page<ArtigoDto>> findByCategorias(@RequestBody Categoria categorias, Pageable pageable) {
		Page<ArtigoDto> result = services.findByCategoria(categorias, pageable);
		return ResponseEntity.ok().body(result);
	}
	
	@PostMapping(path = "/autorCategoriasArtigos")
	public ResponseEntity<Page<ArtigoDto>> findByCategoriaAndAutor(
			@RequestBody MultiDataArticles data,
			Pageable pageable){
		System.out.println(data.getCategoria().getDescricao());
		Page<ArtigoDto> result = services.findByCategoriaAndAutor(data.getCategoria(), data.getAutor(), pageable);
		return ResponseEntity.ok().body(result);
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<ArtigoDto> findById(@PathVariable Long id) {
		ArtigoDto result = services.findById(id);
		return ResponseEntity.ok().body(result);
	}

	// Begin-Recuperação contents page
	@GetMapping(path = "/autores/{url}")
	public ResponseEntity<List<IArtigoOfAutorProjecao>> findAllbyArtigoAutor(@PathVariable String url) {
		List<IArtigoOfAutorProjecao> postautor = services.findAllbyArtigoAutor(url);
		return ResponseEntity.ok().body(postautor);
	}

	@GetMapping(path = "/recents/{intervalo}")
	public ResponseEntity<List<IArtigoRecentsProjecao>> findLimitPosts(@PathVariable Long intervalo) {
		List<IArtigoRecentsProjecao> result = services.findLimitPosts(intervalo);
		return ResponseEntity.ok().body(result);
	}
	
	@GetMapping(path = "/posts/{slug}")
	public ResponseEntity<ArtigoDto> findPostSlug(@PathVariable String slug){
		ArtigoDto obj = services.findBySlog(slug);
		return ResponseEntity.ok().body(obj);
	}
	@GetMapping(path = "/posts/news")
	public ResponseEntity<List<IArtigosNews>> findByNews(){
		List<IArtigosNews> obj = services.findByNews();
		return ResponseEntity.ok().body(obj);
	}

	@GetMapping(path = "/categorias/{categoria_id}")
	public ResponseEntity<List<IArtigoCategoriaProjecao>> findCategoryByArtigo(@PathVariable Integer categoria_id) {
		List<IArtigoCategoriaProjecao> cat = services.findCategoryByArtigo(categoria_id);
		return ResponseEntity.ok().body(cat);
	}

	@GetMapping(path = "/tags/{tag_id}")
	public ResponseEntity<List<ITagProjecao>> findTabByArtigo(@PathVariable Integer tag_id) {
		List<ITagProjecao> cat = services.findTabByArtigo(tag_id);
		return ResponseEntity.ok().body(cat);
	}

	@GetMapping(path = "/comments/{comments_id}")
	public ResponseEntity<List<IComentarioProjecao>> findCommentByArtigo(@PathVariable Integer comments_id) {
		List<IComentarioProjecao> cat = services.findCommentByArtigo(comments_id);
		return ResponseEntity.ok().body(cat);
	}
	// End-Recuperação contents page

	@PostMapping // Inativa (Não cadastra as imagens)
	public ResponseEntity<ArtigoDto> insert(@RequestBody ArtigoDto dto) {
		ArtigoDto result = services.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return null; // Ponto de inatividade
		// return ResponseEntity.created(uri).body(result);
	}

	@PostMapping(path = "/insertFull", consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.MULTIPART_FORM_DATA_VALUE })
	public ResponseEntity<ArtigoDto> formInsertMultPart(
			/*
			 * @RequestPart("dto") ArtigoDto dto, Para consumo do Frontend traco do object
			 * por String
			 */
			@RequestPart("dto") String strDto, @RequestPart("destaque") MultipartFile destaque,
			@RequestPart("card") MultipartFile card) throws JsonMappingException, JsonProcessingException {

		ObjectMapper mapper = new ObjectMapper();// Convert String por Object
		ArtigoDto dto = mapper.readValue(strDto, ArtigoDto.class);

		boolean photoDestaque = saveFile(destaque);
		boolean photoCard = saveFile(card);
		System.out.println(Arrays.asList(dto));
		if (!photoCard) {
			dto.setImgCard("semFotoCard.png");
		}
		if (!photoDestaque) {
			dto.setImgCard("semFotoDestaque.png");
		}

		ArtigoDto result = services.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(result);
	}

	private boolean saveFile(MultipartFile file) { // Pode-se criar uma assembler
		if (file.isEmpty()) {
			return false;
		}
		try {
			byte[] bytes = file.getBytes();
			Files.createDirectories(Paths.get(UPLOAD_FOLDER));
			Path path = Paths.get(UPLOAD_FOLDER + file.getOriginalFilename());
			Files.write(path, bytes);
			System.out.println(Arrays.toString(bytes));

		} catch (IOException e) {
			return false;
		}
		return true;
	}

	@GetMapping(path = "/paint/{strPath}")
	public ResponseEntity<InputStreamResource> getImageDynamicType(@PathVariable String strPath,
			@RequestParam Optional<Boolean> jpg) {
		Path path = Paths.get("Files-Uploads//" + strPath);
		MediaType contentType = jpg.orElseGet(() -> false) ? MediaType.IMAGE_JPEG : MediaType.IMAGE_PNG;
		try (InputStream is = new ByteArrayInputStream(Files.readAllBytes(path))) {
			return ResponseEntity.ok().contentType(contentType).body(new InputStreamResource(is));
		} catch (IOException e) {
			return null;
		}

	}

	@PutMapping(value = "/{id}") // Rest Inavito
	public ResponseEntity<ArtigoDto> update(@PathVariable Long id, @RequestBody @Valid ArtigoDto dto) {
		ArtigoDto result = services.update(id, dto);
		return null; // Ponto de inatividade
		// return ResponseEntity.ok().body(result);
	}

	@PutMapping(path = "/updateFull/{id}", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
	public ResponseEntity<?> formUpdateMultPart(@PathVariable Long id, @RequestParam("dto") String strDto,
			@RequestParam("destaque") MultipartFile destaque, @RequestParam("card") MultipartFile card)
			throws JsonMappingException, JsonProcessingException {
		ObjectMapper mapper = new ObjectMapper();
		ArtigoDto dto = mapper.readValue(strDto, ArtigoDto.class);
		boolean photoDestaque = saveFile(destaque);
		boolean photoCard = saveFile(card);
		if (!photoDestaque) {
			dto.setImgCard("semFotoDestaque.png");
		}
		if (!photoCard) {
			dto.setImgCard("semFotoCard.png");
		}
		ArtigoDto result = services.update(id, dto);
		return ResponseEntity.ok().body(result);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> remover(@PathVariable Long id) {
		services.remover(id);
		return ResponseEntity.noContent().build();
	}

}
