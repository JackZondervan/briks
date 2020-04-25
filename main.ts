namespace SpriteKind {
    export const Edge = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Top = SpriteKind.create()
    export const Brick = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Brick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    info.changeScoreBy(15)
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.x - otherSprite.x, -1 * sprite.vy)
    if (sprite.x >= -150) {
        sprite.vx += -5
    }
})
function buildSetBrick () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            createBrik(index * 16 + 32, Column * 8 + 24)
            Column += 1
        }
        Column = 0
    }
}
function createBrik (x: number, y: number) {
    randNum = Math.randomRange(0, 2)
    if (randNum == 0) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
f 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Brick)
    } else if (randNum == 1) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Brick)
    } else {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Brick)
    }
    brick2.setPosition(x, y)
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Edge, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, sprite.vy)
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
let brick2: Sprite = null
let randNum = 0
let Column = 0
let startBallVar = 0
scene.setBackgroundColor(8)
let paddle = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
paddle.setPosition(80, 110)
controller.moveSprite(paddle, 100, 0)
paddle.setFlag(SpriteFlag.StayInScreen, true)
let top = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Top)
let left = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.Edge)
let right = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.Edge)
top.setPosition(80, 0)
left.setPosition(0, 60)
right.setPosition(159, 60)
let ballVar = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.Ball)
buildSetBrick()
info.setScore(0)
info.setLife(3)
game.onUpdate(function () {
    if (startBallVar == 0) {
        ballVar.setPosition(paddle.x, 105)
        ballVar.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startBallVar = 1
        }
    }
    if (startBallVar == 1) {
        ballVar.setVelocity(Math.randomRange(-30, 30), -50)
        startBallVar = 2
    }
    if (ballVar.y > 115) {
        startBallVar = 0
        info.changeLifeBy(-1)
    }
})
