package com.example.server.mapper;

import com.example.server.model.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface UserMapper {
    // get user info
    User getUserInfo(String id);
    // get all user list
    List<User> getAll();
    // insert user
    int insertUser(String id, String password);
    // register user
    int registerUser(@Param("form") Map<String, Object> form);
    // change password
    int changePassword(@Param("form") Map<String, Object> form);
    // change email
    int changeEmail(@Param("form") Map<String, Object> form);
    // change phone
    int changePhone(@Param("form") Map<String, Object> form);
    // login check
    User loginCheck(@Param("form") Map<String, Object> form);
    // email check
    User checkEmail(String email);
}
