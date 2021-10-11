
package com.thenetvalue.utenti.security;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.jdbc.support.DatabaseStartupValidator;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import javax.sql.DataSource;
import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery("select username,password,enabled "   //Preleva gli utenti tramite query con le password criptate
                        + "from users "
                        + "where username = ?");

        //per i ruoli -> .authoritiesByUsernameQuery("select username, authority"+"from authorities"+"where username = ?");

        //.usersByUsernameQuery("select username,password,enabled from user where username =  "+"?"+" ")
        //.authoritiesByUsernameQuery("select username, authority"+"from authorities"+"where username = ?");

                //.withDefaultSchema()    //crea le tabelle e inserisce gli utenti di seguito
                /* Questa funziona!!
                auth.inMemoryAuthentication()  //crea lo schema ma non va bene con il nostro database, serve uno schema di default (scritto su phpmyadmin)

                .withUser("user").password(passwordEncoder.encode("password")).roles("USER")
                .and()
                .withUser("admin").password(passwordEncoder.encode("admin")).roles("ADMIN");
                */
    }

    @Override
    protected void configure(HttpSecurity http) throws  Exception{
        http.cors();
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/utenti/*")
                .hasAnyRole("USER", "ADMIN")
                .antMatchers(HttpMethod.POST, "/utenti/")
                .hasRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/utenti/")
                .hasRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/utenti/")
                .hasRole("ADMIN")
                .anyRequest().authenticated()
                .and()
                .httpBasic();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return this.passwordEncoder;
        //return NoOpPasswordEncoder.getInstance();
    }
@Bean
    public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
        corsConfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type",
                "Accept", "Authorization", "Origin, Accept", "X-Requested-With",
                "Access-Control-Request-Method", "Access-Control-Request-Headers"));
        corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization",
                "Access-Control-Allow-Origin", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
        corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
        return new CorsFilter(urlBasedCorsConfigurationSource);
    }

}
