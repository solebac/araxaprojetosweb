package com.araxaprojetosweb.backend.assembler;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.araxaprojetosweb.backend.entities.services.exceptions.ResourceNotFoundException;

public class ChangeDateFormatAssembler {
	public static Date toDate(String dataPublicacao, String formatter) {
		Date date = null;
		try {
			date = new SimpleDateFormat(formatter).parse(dataPublicacao);
		} catch (ParseException e) {
			throw new ResourceNotFoundException(e.getMessage());
		}
		return date;
	}
}