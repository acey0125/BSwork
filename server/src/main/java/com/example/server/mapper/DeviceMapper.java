package com.example.server.mapper;

import com.example.server.model.Device;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Map;

@Repository
public interface DeviceMapper {
    // get device list for user
    Device getDevice(String name);
    // get statistic form device table
    List<Map<String, Object>> getDeviceKindStatistic();
    // get statistic form device table for user
    List<Map<String, Object>> getDeviceKindStatisticForUser(int id);
    // get active device list for user
    List<Device> getActiveDeviceList(int id);
    // get all device list for user
    Map<String, Object> getAllDevice(int id);
    // get all device list for user
    List<Device> getAllDeviceList(int id);
    // change device config
    int changeDeviceConfig(@Param("form") Map<String, Object> form);
    // add new device
    int createNewDevice(@Param("form") Map<String, Object> map);
}
