import eel
import os
import os.path as op
import re

eel.init('web')

path = 'C:/TheTaskPlans/'
format = '.txt'

if os.path.exists(path):
    if os.listdir(path):
        files = os.listdir(path)
        plans = ''

        for i in files:
            plans += i[0:-4] + ' '

        eel.load(plans)

else:
    os.mkdir(path)




@eel.expose
def savename(oldname, newname):
    os.rename(path + oldname, path + newname)

# @eel.expose
# def read_file(path):
#     file = open(path, 'r').read()
#     return '1'

@eel.expose
def del_plan(name):
    os.remove(path + name + format)

@eel.expose
def newplan(name):
    file = open(path + name + format, 'w')
    file.close()

@eel.expose
def load_tasks(name):
    tasks = []
    with open(path + name + format, 'r') as f:
        tasks = f.read().splitlines()

    eel.load_tasks(tasks)



eel.start('main.html', size=(720, 480))
