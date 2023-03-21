package com.araxaprojetosweb.backend.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.araxaprojetosweb.backend.entities.services.AutenticationService;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private Environment env;

	@Autowired
	private AutenticationService autenticationService;

	// Configuracoes de autenticacao
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(autenticationService).passwordEncoder(encoder());
	}

	// Configuração de Autorizacao
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		if (Arrays.asList(env.getActiveProfiles()).contains("test")) {
			http.headers().frameOptions().disable();
		}

		http
				.authorizeRequests()
				.antMatchers(HttpMethod.POST, "/auth").permitAll()
				.antMatchers(HttpMethod.POST, "/articles/subcategorias/**").permitAll()
				.antMatchers(HttpMethod.POST, "/articles/autores/**").permitAll()
				.antMatchers(HttpMethod.POST, "/articles/autorCategoriasArtigos/**").permitAll()
				.antMatchers(HttpMethod.GET, "/articles/autores/**").permitAll()
				.antMatchers(HttpMethod.GET, "/articles/recents/**").permitAll()
				.antMatchers(HttpMethod.GET, "/articles/categorias/**").permitAll()
				.antMatchers(HttpMethod.GET, "/articles/tags/**").permitAll()
				.antMatchers(HttpMethod.GET, "/articles/posts/**").permitAll()
				.antMatchers(HttpMethod.GET, "/articles/comments/**").permitAll()
				.antMatchers(HttpMethod.GET, "/categoria/paginacao/**").permitAll()
				.antMatchers(HttpMethod.GET, "/categoria/**").permitAll()
				.antMatchers(HttpMethod.GET, "/swagger-ui/**").permitAll()
				.antMatchers(HttpMethod.GET, "/section/categoria/full/**").permitAll()
				.antMatchers(HttpMethod.GET, "/articles/posts/news").permitAll()
				/*.antMatchers(HttpMethod.GET, "/**").permitAll()*/
				.antMatchers("/h2-console", "/h2-console/**").permitAll()
				.antMatchers("/articles/paint/", "/articles/paint/**").permitAll()
				.antMatchers("/articles/paint/quarentena/", "/articles/paint/quarentena/**").permitAll()
				.antMatchers("/autor/paint/", "/autor/paint/**").permitAll()
				.and()
				.authorizeRequests()
				.anyRequest().authenticated().and()
				.cors().and()
				.httpBasic().and().csrf().disable()
				.sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);

	}

	@Override
	@Bean
	protected AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/*.html", "/v2/**", "/webjars/**", "/configuration/", "/swagger-resources/**");
	}

	@Bean /* Configuração que libera aplicação com servidores diferentes */
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

	/*
	 * public static void main(String[] args) { System.out.println(new
	 * BCryptPasswordEncoder().encode("123")); }
	 */

}
