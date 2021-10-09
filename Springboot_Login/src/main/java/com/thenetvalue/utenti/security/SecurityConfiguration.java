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
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    DataSource dataSource;

    @Override
    protected void configure(HttpSecurity http) throws  Exception{
        http.cors();
        http.csrf().disable()   //disabilitare le chiamate in contemporanea
                .authorizeRequests()
                .antMatchers(HttpMethod.GET,"/utenti/*")

                .hasAnyRole("USER", "ADMIN")                    //permessi per la GET admin e utenti
                .antMatchers(HttpMethod.POST,"/utenti/*")
                .hasAnyRole("USER","ADMIN")                                       //permesso per la POST solo admin
                .antMatchers(HttpMethod.DELETE,"/utenti/*")
                .hasRole("ADMIN")                                       //permesso per la DELETE solo admin
                .antMatchers(HttpMethod.PUT,"/utenti/*")
                .hasRole("ADMIN")                                       //permesso per la PUT solo admin
                .anyRequest().authenticated()
                .and()
                .httpBasic();   //login con basic autentication
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
       auth.jdbcAuthentication()
               .dataSource(dataSource)
        //Preleva gli utenti tramite query con le password criptate
                .usersByUsernameQuery("select username,password,enabled from user where username =  "+"?"+" ");


                //.authoritiesByUsernameQuery("select username, authority"+"from authorities"+"where username = ?");

                //.withDefaultSchema()    //crea le tabelle e inserisce gli utenti di seguito


                auth.inMemoryAuthentication()  //crea lo schema ma non va bene con il nostro database, serve uno schema di default (scritto su phpmyadmin)

                .withUser("user").password(passwordEncoder.encode("password")).roles("USER")
                .and()
                .withUser("admin").password(passwordEncoder.encode("admin")).roles("ADMIN");
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return this.passwordEncoder;
    }
}
