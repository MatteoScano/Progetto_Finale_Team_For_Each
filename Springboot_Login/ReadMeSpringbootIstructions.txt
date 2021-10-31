***Istruzioni per implementazione backend SPRINGBOOT per la gestione degli utenti e degli accessi:***

	1- SE non lo si ha già, creare un Database su phpMyAdmin con il nome "users" con architettura utf8_general_ci	
			(se lo sia ha già, assicurarsi di avere al suo interno <<nella tabella user>> un utente con username:'admin')

		-andare nell'SQL del database appena creato ("users") e inserire le seguenti istruzioni mysql:

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enabled` smallint(6) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user`(`id`, `password`, `username`, `email`, `enabled`, `name`, `surname`) VALUES ('1','U2FsdGVkX19oBrDI7bY4u5zITdVyulDVN8q3IMweLM8=','admin','admin@info.it','1','admin','admin')
('2','U2FsdGVkX19oBrDI7bY4u5zITdVyulDVN8q3IMweLM8=','user','user@info.it','1','user','user');

CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL,
  `enabled` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`username`, `password`, `enabled`) VALUES
('admin', '$2a$10$noppdVmrnZt7ksd98GnLpu32vTc701zLtQmqlCvmPX/TKG1wrErx6', 1),
('user', '$2a$10$9SWWHyk0nxPUmc8AxUokVe0r1He3jVEICF7MhomL9djjfZPQvswzG', 1);


CREATE TABLE `authorities` (
  `username` varchar(50) NOT NULL,
  `authority` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `authorities` (`username`, `authority`) VALUES
('admin', 'ROLE_ADMIN'),
('user', 'ROLE_USER');

ALTER TABLE `authorities`
  ADD UNIQUE KEY `ix_auth_username` (`username`,`authority`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

ALTER TABLE `authorities`
  ADD CONSTRAINT `fk_authorities_users` FOREIGN KEY (`username`) REFERENCES `users` (`username`);
COMMIT;

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(3);


	2-Aprire con IntelliJ la cartella del progetto di springboot e verificare il seguente file presente nel package "resources"

		nomefile: application.properties
		verificare se la 'porta' e il 'nome' del database coincidono con il proprio database


spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/users		//3306 è la porta; 'users', il nome del DB
spring.datasource.username=root							//verifica la username per entrare in phpmyadmin
spring.datasource.password=root							//verifica la password per entrare in phpmyadmin
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver			//verifica se presente jdbc


	3-Assicurarsi di aver avviato MAMP e che sia in regolarmente funzionante


	4-Avvio programma: sotto il "service", cliccare su UtentiApplication o su 'Run' nella barra in alto:
		cliccare su "run"(tastino play) affianco al codice public class UtentiApplication {....etc.}

	
	5-Verificare gli eventuali errori, se il programma funziona la console come ultima riga deve mostrare la seguente scritta:


		.... Tomcat started on port(s): 8080 (http) with context path ''
		.... Started UtentiApplication in 7.921 seconds (JVM running for 8.781)



