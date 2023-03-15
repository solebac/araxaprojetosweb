package com.araxaprojetosweb.backend.assembler;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

import org.springframework.stereotype.Component;

@Component
public class DecoderAssembler {
	
	public String toDecoder(String dto) {
		return URLDecoder.decode(dto, StandardCharsets.UTF_8);
	}
	
}
