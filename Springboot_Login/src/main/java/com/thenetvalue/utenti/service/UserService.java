package com.thenetvalue.utenti.service;

import com.thenetvalue.utenti.dao.UserRepositoryDAO;
import com.thenetvalue.utenti.model.User;
import com.thenetvalue.utenti.security.SecurityConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    UserRepositoryDAO userDAO;    //interfaccia
    SecurityConfiguration passwordEncoder;

    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO) {
        this.userDAO = userDAO;
    }

    public String addUser(@Qualifier("SecurityConfiguration") User user){

        //.withUser("user").password(passwordEncoder.encode("password")).roles("USER")

        //user.setPassword(passwordEncoder.encript);
        //prendere la password e decodificarla con il bean del security configuration


        User result = userDAO.save(user);        // save(user.setPassword());   passwordencoder.encript
        if (result!=null && result.getId() != 0){
            return "Utente salvato correttamente";
        }else{
            return "Errore nel salvataggio dell'utente";
        }
    }

    public User getUserById(int id){
        Optional<User> optionalUser = userDAO.findById(id);
        return optionalUser.orElse(null); //optionalUser.get || se l'oggetto non è nullo lo retituisce altrimenti restituisci null
    }

    public Iterable<User> allUsers() {
        return userDAO.findAll();   //restituisce un iterable
    }

    public String updateUser(int id, User user) {

        user.setId(id);
        User result= userDAO.save(user);
        if (result!=null && result.getId() != 0){
            return "Utente aggiornato correttamente";
        }else{
            return "Errore nell'aggiornamento dell'utente";
        }
    }

    public String deleteUser(int id) {
        User userRecuperato = userDAO.findById(id).orElse(null);
        if (userRecuperato==null){
            return "Utente non trovato";
        }else {
            userDAO.deleteById(id);         //cancella utente
            return "Utente eliminato correttamente";
        }
    }

    public User getUserByUsername(String username) {
        return userDAO.findByUsername(username);
    }

    public List<User> findAllByUsernameContaining(String partialUsername) {
        return userDAO.findAllByUsernameContaining(partialUsername);
    }
}
