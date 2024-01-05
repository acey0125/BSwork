package com.example.server.service;

import com.example.server.mapper.UserMapper;
import com.example.server.model.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;
    // get user info
    public User getUserInfo(String id) {
        System.out.println(id);
        return userMapper.getUserInfo(id);
    }
    // get all user list
    public List<User> getAll() {
        return userMapper.getAll();
    }
    // insert user
    public int insertUser(String id, String password) {
        return userMapper.insertUser(id, password);
    }

    // register user
    public int registerUser(Map<String, Object> form) {
        // check if user name or email is already exist
        if (userMapper.getUserInfo((String) form.get("name")) != null) {
            return -1;
        } else if (userMapper.checkEmail(form.get("email").toString()) != null) {
            return -2;
        } else {
            return userMapper.registerUser(form);
        }
    }

    // change password
    public int changePassword(Map<String, Object> form) {
        // check if user name or email is already exist
        User user = userMapper.getUserInfo((String) form.get("name"));
        if (user == null || !user.getPassword().equals(form.get("old"))) {
            return -1;
        }
        return userMapper.changePassword(form);
    }
    // change email
    public int changeEmail(Map<String, Object> form) {
        // check if user name or email is already exist
        if (userMapper.getUserInfo((String) form.get("name")) == null) {
            return -1;
        } else if (userMapper.checkEmail(form.get("email").toString()) != null) {
            return -2;
        }
        return userMapper.changeEmail(form);
    }
    // login check
    public User loginCheck(Map<String, Object> form) {
        return userMapper.loginCheck(form);
    }
    // change phone
    public int changePhone(Map<String, Object> form) {
        if (userMapper.getUserInfo((String) form.get("name")) == null) {
            return -1;
        }
        return userMapper.changePhone(form);
    }
    // email check
    public int checkEmail(String email) {
        if (userMapper.checkEmail(email) == null) {
            return 1;
        }
        return 0;
    }
}
