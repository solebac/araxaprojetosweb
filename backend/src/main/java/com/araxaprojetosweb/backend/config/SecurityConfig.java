package com.araxaprojetosweb.backend.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	@Autowired
	private Environment env;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		if (Arrays.asList(env.getActiveProfiles()).contains("test")) {
			http.headers().frameOptions().disable();
		}

		http
			.authorizeRequests()
			.antMatchers(HttpMethod.POST, "/auth").permitAll()
			.antMatchers("/h2-console", "/h2-console/**").permitAll()
			.antMatchers(HttpMethod.GET, "/").permitAll()
			
			.antMatchers(HttpMethod.GET, "/autor", "/autor/**").permitAll()
			.antMatchers(HttpMethod.POST, "/autor").permitAll()
			.antMatchers(HttpMethod.PUT, "/autor/**").permitAll()
			.antMatchers(HttpMethod.DELETE, "/autor/**").permitAll()
			
			.antMatchers(HttpMethod.GET, "/categoria", "/categoria/**").permitAll()
			.antMatchers(HttpMethod.POST, "/categoria").permitAll()
			.antMatchers(HttpMethod.PUT, "/categoria/**").permitAll()
			.antMatchers(HttpMethod.DELETE, "/categoria/**").permitAll()
			
			.antMatchers(HttpMethod.GET, "/artigocategoria").permitAll()
			.antMatchers(HttpMethod.GET, "/artigo").permitAll()
			.antMatchers(HttpMethod.GET, "/autor").permitAll()
			.antMatchers(HttpMethod.GET, "/comentario").permitAll()
			.antMatchers(HttpMethod.GET, "/tag").permitAll()
			.anyRequest().authenticated()
			.and().cors()
			.and().httpBasic()
			.and().csrf().disable()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	}
	
	@Override
	@Bean
	protected AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}

	@Bean /*Configuração que libera aplicação com servidores diferentes*/
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
		configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PUT", "DELETE", "OPTIONS"));
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}
	@Bean
	public PasswordEncoder encoder() {
	    return new BCryptPasswordEncoder();
	}

}
