import paho.mqtt.client as mqtt
import time
import json
import pymysql as PyMySQL


broker = 'broker.emqx.io'

host = "127.0.0.1"
port = 1883
db = PyMySQL.connect(
        host = "127.0.0.1", 
        user="root",  
        passwd="20020125",  
        database="bs",  
        charset='utf8' 
    )


def server_start():
    client_id = time.strftime('%Y%m%d%H%M%S', time.localtime(time.time()))
    client = mqtt.Client(client_id)
    client.on_connect = on_connect
    client.on_message = on_message

    client.connect(broker, port, 60)
    client.loop_forever()



def on_connect(client, user_data, flags, rc):
    print("Connected with result code " + str(rc))
    client.subscribe("testapp")


def on_message(client, user_data, msg):
    print(msg.topic + " " + msg.payload.decode("utf-8"))
    JsonForm = json.loads(msg.payload.decode("utf-8"))
    write_into_db(JsonForm)

def write_into_db(JsonForm):
    cursor = db.cursor()
    msg_sql = "INSERT INTO `message` VALUES('{}', {}, '{}', {}, {}, '{}', {});".format(
        JsonForm["clientId"], JsonForm["alert"], JsonForm["info"],
        JsonForm["lat"], JsonForm["lng"], JsonForm["timestamp"], JsonForm["value"]
    )
    cursor.execute(msg_sql)
    device_sql = "UPDATE `device` SET `activate` = '{}' WHERE `name` = '{}';".format(
        JsonForm["timestamp"], JsonForm["clientId"]
    )
    cursor.execute(device_sql)
    db.commit()


if __name__ == '__main__':
    server_start()
    db.close()
