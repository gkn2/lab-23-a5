def find_length(name):
    letters = len(name)
    return letters



def change_greeting(name):
    letters = find_length(name)
    return "Length = " + str(letters)



mySprite = sprites.create(assets.image("""mc"""), SpriteKind.player)



mySprite.say(change_greeting("Pat"))