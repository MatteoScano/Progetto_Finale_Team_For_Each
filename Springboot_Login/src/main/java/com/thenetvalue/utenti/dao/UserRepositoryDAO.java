package com.thenetvalue.utenti.dao;

import com.thenetvalue.utenti.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User,Integer> {

    public User findByUsername(String username);

    public List<User> findAllByUsernameContaining(String partialUsername);

}
