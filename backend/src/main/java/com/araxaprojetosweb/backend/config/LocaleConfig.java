package com.araxaprojetosweb.backend.config;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;
@Configuration
public class LocaleConfig {
	@Bean
	public MessageSource messageSource() {
	  ReloadableResourceBundleMessageSource messageSource = new 
	  ReloadableResourceBundleMessageSource();
	  messageSource.setBasename("classpath:AppResources");
	  messageSource.setDefaultEncoding("UTF-8");
	  return messageSource;
	}

	/*
	 * Create LocaleResolver Bean
	 */
	@Bean
	public LocaleResolver localeResolver(){
	  CookieLocaleResolver resolver = new CookieLocaleResolver();
	  resolver.setDefaultLocale(new Locale("pt-BR")); // your default locale
	  return resolver;
	}
}
