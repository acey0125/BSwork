package com.example.server.service;

import com.example.server.mapper.DeviceMapper;
import com.example.server.mapper.MessageMapper;
import com.example.server.mapper.UserMapper;
import com.example.server.model.Device;
import com.example.server.model.Message;
import com.example.server.utils.TimeUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MessageService {
    @Autowired
    MessageMapper messageMapper;
    @Autowired
    UserMapper userMapper;
    @Autowired
    DeviceMapper deviceMapper;

    // get message list for device
    public List<Message> getMessages(String name) {
        return messageMapper.getMessages(name);
    }
    // get all message count for device
    public int getAllMessageCount(String name) {
        Number result = (Number) messageMapper.getAllMessageCount(name).get("result");
        return result.intValue();
    }
    // get all message count for user
    public int getAllMessageCountForUser(String name) {
        int count = 0, id = userMapper.getUserInfo(name).getId();
        List<Device> result;
        result = deviceMapper.getAllDeviceList(id);
        for (Device device : result) {
            count += getAllMessageCount(device.getName());
        }
        return count;
    }
    // get device value
    public List<Map<String, Object>> getDeviceValue(String name) {
        List<Map<String, Object>> devices = messageMapper.getDeviceValue(name);
        for (Map<String, Object> tmpMessage : devices) {
            tmpMessage.put("name", name);
            tmpMessage.put("stamp", TimeUtils.changStampToTime(tmpMessage.get("stamp").toString()));
        }
        return devices;
    }
    // get device info
    public List<Map<String, Object>> getDeviceInfo(String name) {
        List<Map<String, Object>> result;
        result = messageMapper.getDeviceInfo(name);
        for (Map<String, Object> res: result) {
            String time = TimeUtils.changStampToTime(res.get("stamp").toString());
            res.put("stamp", time);
        }
        return result;
    }
    // get device position
    public List<Map<String, Object>> getDevicePosition(String name) {
        return messageMapper.getDevicePosition(name);
    }
    // get all device value for user
    public List<Map<String, Object>> getAllDeviceValueForUser(String user) {
        List<Device> devices = deviceMapper.getAllDeviceList(
                userMapper.getUserInfo(user).getId());
        List<Map<String, Object>> result = new ArrayList<>();
        for (Device device : devices) {
            String name = device.getName();
            List<Map<String, Object>> msg;
            msg = getDeviceValue(name);
            for (Map<String, Object> tmpMessage : msg) {
                tmpMessage.put("name", name);
                result.add(tmpMessage);
            }
        }
        result.sort((o1, o2) -> o1.get("stamp").toString().compareTo(o2.get("stamp").toString()));
        return result;
    }

}
