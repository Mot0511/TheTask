import eel

eel.init('web')

@eel.expose
def test():
    print('asdasd')

eel.start('main.html', size=(720, 480))
