package com.araxaprojetosweb.backend.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloWordController {
	@RequestMapping("/")
	@ResponseBody
	public String home() {
		return "Hello Word...!";
	}
}
