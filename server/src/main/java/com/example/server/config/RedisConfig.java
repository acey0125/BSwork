package com.example.server.config;

import org.springframework.cache.annotation.CachingConfigurerSupport;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.interceptor.KeyGenerator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.lang.reflect.Method;


//It inherits the 'CachingconfigurerSupport' class
//which is a class provided by Spring to help configure caching

@Configuration
@EnableCaching
public class RedisConfig extends CachingConfigurerSupport {
    @Bean
//The KeyGenerator interface has a method called 'generate', which takes three parameters: 
//target object, method, and parameter, and returns an Object as the cached key.
    public KeyGenerator keyGenerator() {
        return new KeyGenerator() {
            @Override
            public Object generate(Object target, Method method, Object... params) {
                StringBuilder Redis_String_Builder = new StringBuilder();
                Redis_String_Builder.append(target.getClass().getName());
                Redis_String_Builder.append(method.getName());
                for (Object obj : params) {
                    Redis_String_Builder.append(obj.toString());
                }
                return Redis_String_Builder.toString();
            }
        };
    }
}

//The purpose of doing this is to ensure that 
//each different method call will have a unique cache key.
