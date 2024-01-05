package com.example.server.mapper;

import com.example.server.model.Message;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface MessageMapper {
    // get message list for device
    List<Message> getMessages(String name);
    // get all message count for device
    Map<String, Object> getAllMessageCount(String name);
    // get device value
    List<Map<String, Object>> getDeviceValue(String name);
    // get device info
    List<Map<String, Object>> getDeviceInfo(String name);
    // get device position
    List<Map<String, Object>> getDevicePosition(String name);
    // get all message count for user
    List<Map<String, Object>> getMessageList(String name);
}
