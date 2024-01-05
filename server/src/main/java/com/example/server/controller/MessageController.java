package com.example.server.controller;

import com.example.server.model.Message;
import com.example.server.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class MessageController {
    @Autowired
    MessageService messageService;
    // get message list for device
    @RequestMapping(value = "/message/{name}", method = RequestMethod.GET)
    public List<Message> getDevicePositions(@PathVariable String name) {
        return messageService.getMessages(name);
    }
    // get all message count for device
    @RequestMapping(value = "/message/all/{device}", method = RequestMethod.GET)
    public int getMessageCount(@PathVariable String device) {
        return messageService.getAllMessageCount(device);
    }
    // get all message count for user
    @RequestMapping(value = "/message/user/all/{name}", method = RequestMethod.GET)
    public int getUserMessage(@PathVariable String name) {
        return messageService.getAllMessageCountForUser(name);
    }
    // get device value
    @RequestMapping(value = "/message/value/{name}", method = RequestMethod.GET)
    public List<Map<String, Object>> getDeviceValues(@PathVariable String name) {
        return messageService.getDeviceValue(name);
    }
    // get device info
    @RequestMapping(value = "/message/info/{name}", method = RequestMethod.GET)
    public List<Map<String, Object>> getDeviceInformation(@PathVariable String name) {
        List<Map<String, Object>> Device_Info_Result;
        Device_Info_Result = messageService.getDeviceInfo(name);
        if (Device_Info_Result.size() > 10) {
            int size = Device_Info_Result.size();
            return Device_Info_Result.subList(size - 10, size);
        }
        return Device_Info_Result;
    }
    // get device position
    @RequestMapping(value = "/message/path/{name}", method = RequestMethod.GET)
    public List<Map<String, Object>> getDevicePosition(@PathVariable String name) {
        List<Map<String, Object>> Device_Position_Result = messageService.getDevicePosition(name);
        if (Device_Position_Result.size() >= 10) {
            int size = Device_Position_Result.size();
            Device_Position_Result = Device_Position_Result.subList(size - 10, size);
        }
        return Device_Position_Result;
    }
    // get all device value for user
    @RequestMapping(value = "/message/all/value/{name}", method = RequestMethod.GET)
    public List<Map<String, Object>> getAllDeviceForUser(@PathVariable String name) {
        List<Map<String, Object>> Device_Value_Result;
        Device_Value_Result = messageService.getAllDeviceValueForUser(name);
        int size = Device_Value_Result.size();
        if (size >= 40) {
            return Device_Value_Result.subList(size - 40, size);
        }
        return Device_Value_Result;
    }
}
