package com.araxaprojetosweb.backend.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.araxaprojetosweb.backend.entities.Categoria;
import com.araxaprojetosweb.backend.entities.dto.CategoriaDto;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {
	
	@GetMapping
	public List<CategoriaDto> categoria() {
		Categoria obj = new Categoria(1L, "Test", "Testfdsfas");
		return CategoriaDto.toConvert(Arrays.asList(obj));
	}
}
