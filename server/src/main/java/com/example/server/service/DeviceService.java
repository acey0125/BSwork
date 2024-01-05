package com.example.server.service;

import com.example.server.mapper.DeviceMapper;
import com.example.server.mapper.UserMapper;
import com.example.server.model.Device;
import com.example.server.model.User;
import com.example.server.utils.RedisUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin
@Service
public class DeviceService {
    @Autowired
    DeviceMapper deviceMapper;

    @Autowired
    UserMapper userMapper;

    @Autowired
    RedisUtils redisUtils;
    // get device list for user
    public Device getDevice(String name) {
        return deviceMapper.getDevice(name);
    }
    // get statistic form device table
    public List<Map<String, Object>> getDeviceKindStatistic() {
        return deviceMapper.getDeviceKindStatistic();
    }
    // get statistic form device table for user
    public List<Device> getActiveDeviceList(String user) {
        int id = userMapper.getUserInfo(user).getId();
        List<Device> res;
        res = deviceMapper.getAllDeviceList(id);
        LocalDate NowTime = LocalDate.now();
        List<Device> NowDevice = new ArrayList<>();
        for (Device re : res) {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            String activate = re.getActivate();
            if (activate.isEmpty()) {
                continue;
            }
            String day = simpleDateFormat.format(new Date(new Long(activate)));
            if (day.equals(NowTime.toString())) {
                NowDevice.add(re);
            }
        }
        return NowDevice;
    }

    public int getActiveDeviceCount(String user) {
        return getActiveDeviceList(user).size();
    }

    // get device list for user
    public int getAllDevice(String user, String token) {
        if (!redisUtils.redisUserValidation(user, token)) {
            return -1;
        }
        int id = userMapper.getUserInfo(user).getId();
        Number result = (Number) deviceMapper.getAllDevice(id).get("result");
        return result.intValue();
    }

    // get all device list for user
    public List<Device> getAllDeviceList(String user) {
        int id = userMapper.getUserInfo(user).getId();
        return deviceMapper.getAllDeviceList(id);
    }

    // change device config
    public int changeDeviceConfig(Map<String, Object> form) {
        return deviceMapper.changeDeviceConfig(form);
    }

    // add new device
    public int createNewDevice(Map<String, Object> form) {
        if (deviceMapper.getDevice((String) form.get("name")) != null) {
            return 0;
        }
        User user = userMapper.getUserInfo(form.get("user").toString());
        form.put("id", user.getId());
        return deviceMapper.createNewDevice(form);
    }

    // get kind statistic for user
    public List<Map<String, Object>> getDeviceKindStatisticForUser(String user) {
        int id = userMapper.getUserInfo(user).getId();
        List<Map<String, Object>> result;
        result = deviceMapper.getDeviceKindStatisticForUser(id);
        String[] kind = {
          "设备种类1", "设备种类2", "设备种类3", "设备种类4", "设备种类5"
        };
        for (Map<String, Object> res : result) {
            int type = Integer.parseInt(res.get("type").toString()) % 5;
            res.put("type", kind[type - 1]);
        }
        return result;
    }
}
