package com.araxaprojetosweb.backend.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class AutenticationEncoder {

	private AutenticationEncoder() {
		throw new AssertionError();
	}

	public final static String passwordBCrypt(String arg0) {
		return new BCryptPasswordEncoder().encode(arg0);
	}
<<<<<<< HEAD

=======
	
>>>>>>> ba1fdc0a2f44b864a5f7403e041b64d5e36004a8
}
