from flask import Flask,jsonify
import json
import os

app = Flask(__name__)


@app.route('/')
def hello_world():
	
    file = open("/sys/class/thermal/thermal_zone0/temp")   
    temp = float(file.read()) / 1000 
     
     
    RAM_stats = getRAMinfo()
    RAM_total = round(int(RAM_stats[0]) / 1000,1)
    RAM_used = round(int(RAM_stats[1]) / 1000,1)
    RAM_free = round(int(RAM_stats[2]) / 1000,1)
    DISK_stats = getDiskSpace()

	
    return jsonify({'temp':temp,'ram':[RAM_total,RAM_used,RAM_free],'disk':DISK_stats})

def getRAMinfo():
    p = os.popen('free')
    i = 0
    while 1:
        i = i + 1
        line = p.readline()
        if i==2:
            return(line.split()[1:4])


def getDiskSpace():
    p = os.popen("df -h /")
    i = 0
    while 1:
        i = i +1
        line = p.readline()
        if i==2:
            return(line.split()[1:5])


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=80)