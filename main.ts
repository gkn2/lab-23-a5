function find_length(name: string) {
    let letters = name.length
    return letters
}

function change_greeting(name: string) {
    let letters = find_length(name)
    return "Length = " + ("" + letters)
}

let mySprite = sprites.create(assets.image`mc`, SpriteKind.Player)
mySprite.say(change_greeting("Pat"))
