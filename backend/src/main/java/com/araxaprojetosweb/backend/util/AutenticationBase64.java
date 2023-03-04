package com.araxaprojetosweb.backend.util;

import java.util.Base64;

public class AutenticationBase64 {
	private AutenticationBase64() {
		throw new AssertionError();
	}
	public static String passwordEncodeBase64(String arg0) {
		return Base64.getEncoder().encodeToString(arg0.getBytes());
	}
	
	public static String passwordDecodeBase64(String arg0) {
		byte[] decodeByte = Base64.getDecoder().decode(arg0);
		return new String(decodeByte);
	}
}