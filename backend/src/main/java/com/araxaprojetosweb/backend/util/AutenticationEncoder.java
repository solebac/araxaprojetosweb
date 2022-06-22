package com.araxaprojetosweb.backend.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class AutenticationEncoder {

	private AutenticationEncoder() {
		throw new AssertionError();
	}

	public final static String passwordBCrypt(String arg0) {
		return new BCryptPasswordEncoder().encode(arg0);
	}

}
