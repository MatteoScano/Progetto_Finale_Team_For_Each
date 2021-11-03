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
    UserRepositoryDAO userDAO;    //interfaccia user


    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO) {
        this.userDAO = userDAO;
    }

    //Aggiunge utente
    public String addUser(User user){
        User result = userDAO.save(user);       
        if (result!=null && result.getId() != 0){
            return "Utente salvato correttamente";
        }else{
            return "Errore nel salvataggio dell'utente";
        }
    }
    
    // Prende l'utente con l'id passato
    public User getUser(int id){
        Optional<User> optionalUser = userDAO.findById(id);
        return optionalUser.orElse(null); //optionalUser.get || se l'oggetto non è nullo lo retituisce altrimenti restituisci null
    }

    //Prende tutti gli users
    public Iterable<User> allUsers() {
        return userDAO.findAll();   //restituisce un iterable
    }

    //Aggiorna l'utente con l'id passato
    public String updateUser(int id, User user) {
        user.setId(id);
        User result= userDAO.save(user);
        if (result!=null && result.getId() != 0){
            return "Utente aggiornato correttamente";
        }else{
            return "Errore nell'aggiornamento dell'utente";
        }
    }

    //Cancella l'utente con l'id passato
    public String deleteUser(int id) {
        User userRecuperato = userDAO.findById(id).orElse(null);
        if (userRecuperato==null){
            return "Utente non trovato";
        }else {
            userDAO.deleteById(id);         //cancella utente
            return "Utente eliminato correttamente";
        }
    }

    //Visualizza l'utente con lo username passato
    public User getUserByUsername(String username) {
        return userDAO.findByUsername(username);
    }

    //Visualizza l'utente con lo username parziale passato
    public List<User> findAllByUsernameContaining(String partialUsername) {
        return userDAO.findAllByUsernameContaining(partialUsername);
    }
}
