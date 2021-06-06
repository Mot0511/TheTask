import eel
import os
import os.path as op
import re

eel.init('web')

path = 'C:/TheTaskPlans/'
format = '.txt'

if os.listdir(path):
    files = os.listdir(path)
    plans = ''

    for i in files:
        plans += i[0:-4] + ' '

    eel.load(plans)

@eel.expose
def savename(newname, oldname):
    os.rename(filespath + oldname, filespath + newname)

@eel.expose
def read_file(path):
    file = open(path, 'r').read()
    return '1'

@eel.expose
def newplan(name):
    file = open(path + name + format, 'w')
    file.close()



eel.start('main.html', size=(720, 480))
