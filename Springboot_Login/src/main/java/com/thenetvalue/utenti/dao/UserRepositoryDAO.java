package com.thenetvalue.utenti.dao;

import com.thenetvalue.utenti.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User,Integer> {
    //convenzione
    //ci consente di fare operazioni sul db senza scrivere codice


    public User findByUsername(String username);

    public List<User> findAllByUsernameContaining(String partialUsername);

    //metodi di userDao cancellata:
    /*

    //Aggiunge un utente
    public int addUser(User user);

    //Preleva un utente in base all'id passato
    public User getUserById(int id);

    //Preleva tutti gli utenti
    public List<User> allUsers();

    //Aggiorna un utente in base all'id passato
    public int updateUser(int id, User user);

    //cancella un utente in base all'id passato
    public int deleteUser(int id);

    */
}
