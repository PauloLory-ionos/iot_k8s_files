from influxdb import InfluxDBClient
import time
import paho.mqtt.client as mqtt
import json
from datetime import datetime
import calendar
import csv
# Connect to InfluxDB
client = InfluxDBClient(host='85.215.191.169', port=8086,username='iot', password='q@pl10!0T')

#mqtt 85.215.194.102:31234
# MQTT broker details
#broker_address = "85.215.194.102"  # Replace with your broker address
#broker_port = 31234 
broker_address = "85.215.215.230"  # Replace with your broker address
broker_port = 1883 


# MQTT topic and message
topic = "mycobot/joints"  # Replace with your topic
  # Replace with your message



# Create an MQTT client
clientMqtt = mqtt.Client("CLIENT1")
# Connect to the MQTT broker

clientMqtt.connect(broker_address, broker_port)

# Publish the message to the topic



# Create a database
client.switch_database('iot_data')

# Define the message data to be inserted

def first_move():
    message_data = {
        "type": "joint_data",
        "data": {
            "joint1_angle": 0.0,
            "joint2_angle": -50.0,
            "joint3_angle": -60.0,
            "joint4_angle": 35.0,
            "joint5_angle": 0.0,
            "joint6_angle": 0.0
        }
    }

    # Convert the message data to InfluxDB line protocol format
    measurement = "mycobot_data"
    tags = {"type": message_data["type"]}
    fields = {}
    for joint, angle in message_data["data"].items():
        fields[joint] = angle
    influxdb_data = [{
        "measurement": measurement,
        "tags": tags,
        "fields": fields
    }]
    return influxdb_data

#mc.send_angles([90,-50,-60,35,0,0], 20)
def second_move( value1, value2, value3, value4, value5, value6):
    timestamp = int(datetime.utcnow().timestamp() *1000)
    message_data = {
    "type": "joint_data",
    "data": {
        "mycobot_date": timestamp,
        "joint1_angle": value1,
        "joint2_angle": value2,
        "joint3_angle": value3,
        "joint4_angle": value4,
        "joint5_angle": value5,
        "joint6_angle": value6,
        "gripper": 'false'
        }
    }

    measurement = "mycobot_data"
    tags = {"type": message_data["type"]}
    fields = []

    for key, value in message_data["data"].items():
        fields.append(f"{key}={value}")

   
    influxdb_data = f"{measurement},{','.join(f'{key}={value}' for key, value in tags.items())} {','.join(fields)}"
    
    return influxdb_data



def send_messages():
    # Insert the data into InfluxDB
    #client.write_points(first_move(), database='iot_data')
    #for (float i = 0f; i <= 1f; i += 0.1f)
   
    start = 0.0
    stop = 90.0
    step = 5.0

    start2 = 0.0
    stop2 = 90.0

    start3 = 0.0
    stop3 = 90.0

#    for i in range(int((stop - start) / step) + 1):
#        value = start + i * step
#        value2 = start2 - i * step
#        value3 = start3 + i * step
#        print(value)
#        #client.write_points(second_move(value,value2,value3), database='iot_data')
#        clientMqtt.publish(topic, json.dumps(second_move(value,value2,value3)))
#        #clientMqtt.publish(topic, "estou aqui")
#
#        time.sleep(2)
        
with open('C:\dev\mycobot\pl_scripts\mycobotfile.csv', 'r') as file:
    # Create a CSV reader object
    csv_reader = csv.reader(file)
    while True:
        # Iterate over each row in the CSV
        for row in csv_reader:
            # Extract the values and assign them to variables
            value1, value2, value3, value4, value5, value6 = map(float, row)
            
            # Do something with the values
            clientMqtt.publish(topic, json.dumps(second_move(value1, value2, value3, value4, value5, value6)))
            time.sleep(0.2)    
    
    

send_messages()
    