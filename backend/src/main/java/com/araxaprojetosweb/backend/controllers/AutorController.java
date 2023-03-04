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

import com.araxaprojetosweb.backend.entities.Autor;
import com.araxaprojetosweb.backend.entities.dto.AutorDto;
import com.araxaprojetosweb.backend.entities.services.AutorServices;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/autor")
public class AutorController {

	final String UPLOAD_FOLDER = "Files-Uploads//perfil//";
	
	@Autowired
	private AutorServices services;
	
	@GetMapping
	public ResponseEntity<List<AutorDto>> findAll(){
		List<Autor> obj = services.findAll();
		return ResponseEntity.ok().body(AutorDto.toConvert(obj));
	}
	
	@GetMapping(path = "/paginacao")
	public ResponseEntity<Page<AutorDto>> findAllPage(Pageable pageable){
		Page<AutorDto> result = services.findAllPage(pageable);
		return ResponseEntity.ok().body(result);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<AutorDto> findById(@PathVariable Long id){
		AutorDto obj = AutorDto.toConvertId(services.findById(id));
		return ResponseEntity.ok().body(obj);
	}
	
	@PostMapping //Inativo
	public ResponseEntity<AutorDto> insert(@RequestBody @Valid Autor obj){
		Autor autor = services.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(autor.getId()).toUri();
		//return ResponseEntity.created(uri).body(new AutorDto(autor));
		return null;
	}
	
	@PostMapping(path="/insertFull", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<AutorDto> insertFull(
			@RequestPart("dto") String strDto,
			@RequestPart("files") MultipartFile photos
			) throws JsonMappingException, JsonProcessingException{
		ObjectMapper mapper = new ObjectMapper();
		Autor result = mapper.readValue(strDto, Autor.class);
		boolean photoCard = saveFile(photos);
		if (!photoCard) {
			result.setFoto("semFotoCard.png");
		}
		Autor autor = services.insert(result);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(autor.getId()).toUri();
		return ResponseEntity.created(uri).body(new AutorDto(autor));
	}
	
	@PutMapping(value = "/{id}")//Inativo
	public ResponseEntity<AutorDto> update(@PathVariable Long id, @RequestBody Autor obj){
		Autor autor = services.atualizar(id, obj);
		//return ResponseEntity.ok().body(new AutorDto(autor));
		return null;
	}
	@PutMapping(path = "/updateFull/{id}", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<AutorDto> updateFull(
			@PathVariable Long id,
			@RequestPart("dto") String strDto,
			@RequestPart("files") MultipartFile photos) throws JsonMappingException, JsonProcessingException{
		ObjectMapper mapper = new ObjectMapper();
		Autor autor = mapper.readValue(strDto, Autor.class);
		boolean photoRetro = saveFile(photos);
		System.out.println(Arrays.asList(autor));
		if (!photoRetro) {
			autor.setFoto("semFotoCard.png");
		}
		Autor upAutor = services.atualizar(id, autor);
		return ResponseEntity.ok().body(new AutorDto(upAutor));
	}
	
	private boolean saveFile(MultipartFile file) { // Pode-se criar uma assembler
		if (file.isEmpty()) {
			return false;
		}
		try {
			byte[] bytes = file.getBytes();
			Files.createDirectories(Paths.get(UPLOAD_FOLDER));
			Path path = Paths.get(UPLOAD_FOLDER + file.getOriginalFilename());
			//Path path = Paths.get(file.getOriginalFilename());
			Files.write(path, bytes);
			System.out.println(Arrays.toString(bytes));
			System.out.println(file.getOriginalFilename());

		} catch (IOException e) {
			return false;
		}
		return true;
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> remover(@PathVariable Long id){
		services.remover(id);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping(path = "/paint/{strPath}")
	public ResponseEntity<InputStreamResource> getImageDynamicType(@PathVariable String strPath,
			@RequestParam Optional<Boolean> jpg) {
		Path path = Paths.get("Files-Uploads//perfil//" + strPath);
		MediaType contentType = jpg.orElseGet(() -> false) ? MediaType.IMAGE_JPEG : MediaType.IMAGE_PNG;
		try (InputStream is = new ByteArrayInputStream(Files.readAllBytes(path))) {
			return ResponseEntity.ok().contentType(contentType).body(new InputStreamResource(is));
		} catch (IOException e) {
			return null;
		}

	}

}
