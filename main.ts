enum ActionKind {
    Walking,
    Idle,
    Jumping,
    picking,
    pichkding2,
    idle2
}
namespace SpriteKind {
    export const rook = SpriteKind.create()
    export const pick = SpriteKind.create()
    export const fern = SpriteKind.create()
    export const tree = SpriteKind.create()
    export const good = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
6 6 9 9 6 6 9 9 6 6 9 9 6 6 9 9 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
6 6 9 9 6 6 9 9 6 6 9 9 6 6 9 9 
6 6 9 9 6 6 9 9 6 6 9 9 6 6 9 9 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
6 6 9 9 6 6 9 9 6 6 9 9 6 6 9 9 
6 6 9 9 6 6 9 9 6 6 9 9 6 6 9 9 
6 6 9 9 6 6 9 9 6 6 9 9 6 6 9 9 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
e e 4 4 e e 4 4 e e 4 4 e e 4 4 
4 4 e e 4 4 e e 4 4 e e 4 4 e e 
4 4 e e 4 4 e e 4 4 e e 4 4 e e 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile10 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile12 = img`
f f f f f f f f f f f f f f f f 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile13 = img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
f 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile14 = img`
f f f f f f f f f f f f f f f f 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
`
    //% blockIdentity=images._tile
    export const tile15 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
`
    //% blockIdentity=images._tile
    export const tile16 = img`
f f f f f f f f f f f f f f f f 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 f 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("roocks")
    myCounter = sevenseg.createCounter(SegmentStyle.Medium, SegmentScale.Half, 2)
    myCounter.count = rock
    myCounter.setDigitColor(1)
    myCounter.x = mySprite.x
    myCounter.y = mySprite.y
    pause(1000)
    myCounter.setDigitColor(0)
})
sprites.onOverlap(SpriteKind.pick, SpriteKind.good, function (sprite, otherSprite) {
    if (can == true) {
        otherSprite.setImage(img`
. . . . . c c b b b . . . . . . 
. . . . c b 5 5 d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d 5 5 b . . 
. . . c b b 5 5 d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b 5 b 
c b b 5 5 d b b b b b d d b d b 
c c b b d d d d d d 5 5 b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b 5 d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`)
        pause(300)
        if (can == true) {
            otherSprite.setImage(img`
. . . . . c c b b b . . . . . . 
. . . . c b 5 5 d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d 5 5 b . . 
. . . c b b 5 5 d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b 5 b 
c b b 5 5 d b b b b b d d b d b 
c c b b d d d d d d 5 5 b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b 5 d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
            pause(300)
            if (can == true) {
                otherSprite.setImage(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
f f f f f f f f f f f f f f f f 
f 2 2 2 2 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
                pause(300)
                if (can == true) {
                    otherSprite.destroy(effects.disintegrate, 500)
                    rock += Math.randomRange(1, 2)
                    good_vill += 2
                    info.changeScoreBy(2)
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.pick, SpriteKind.tree, function (sprite, otherSprite) {
    if (can == true) {
        otherSprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 . . . . . . . . . . . 
. . . . . . . . . . 8 6 6 8 . . . . . . . . . . 
. . . . . . . . . 8 8 6 6 8 8 . . . . . . . . . 
. . . . . . . . . 8 6 6 6 6 8 . . . . . . . . . 
. . . . . . . . 8 6 6 6 6 6 6 8 . . . . . . . . 
. . . . . . 8 8 6 6 6 6 6 6 6 6 8 8 . . . . . . 
. . . . . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . 
. . . . . 8 8 6 6 6 6 6 6 6 6 6 6 8 8 . . . . . 
. . . . . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . 
. . . . 8 6 6 8 8 6 6 6 6 6 8 8 8 6 6 8 . . . . 
. . . . 8 8 8 8 6 6 8 8 8 6 6 8 6 8 8 8 . . . . 
. . . . . 8 6 8 6 8 8 6 8 8 6 8 6 6 8 . . . . . 
. . . . 8 6 6 8 8 8 6 6 8 8 8 8 8 6 8 . . . . . 
. . . . 8 6 8 8 8 8 6 8 8 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 6 6 8 8 8 8 8 8 6 6 8 8 8 . . . . 
. . . . 8 6 6 6 8 8 8 8 6 8 8 8 6 6 6 8 . . . . 
. . . 8 6 6 6 8 8 6 8 6 6 8 6 8 8 6 6 6 8 . . . 
. . 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 8 . . . 
. 8 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 . . 
. 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 8 . 
. 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 . 
. . 8 8 6 6 8 6 6 6 8 6 6 8 6 6 6 6 8 6 6 6 8 . 
. . 8 6 8 8 6 6 8 8 8 6 6 8 8 6 8 6 6 8 8 6 6 8 
. 8 6 6 8 8 6 8 8 6 8 6 8 6 6 8 8 8 6 8 8 8 8 8 
8 6 6 8 8 6 8 8 6 6 8 8 8 8 6 6 8 8 8 8 6 8 . . 
8 8 8 8 6 6 8 6 6 8 8 8 8 8 8 6 8 6 8 8 6 6 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 8 8 6 8 . 
. 8 8 6 6 6 8 8 6 6 8 8 6 8 8 6 8 8 6 8 6 8 8 . 
. 8 6 6 6 8 8 6 6 6 8 8 6 6 8 6 6 6 6 6 6 6 8 8 
8 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8 
8 8 8 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 8 8 . 
. . 8 8 8 8 6 6 8 6 6 6 6 6 6 6 6 6 8 8 8 8 . . 
. . . . . 8 6 8 8 6 6 8 6 6 6 8 8 6 8 . . . . . 
. . . . . . 8 8 8 6 8 8 8 6 6 8 8 8 8 . . . . . 
. . . . . . . . . 8 8 e e 8 8 . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f f . . . 
. f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f . . . 
. f f f f f f f f f f f f f f f f f f f f . . . 
`)
        pause(300)
        if (can == true) {
            otherSprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 . . . . . . . . . . . 
. . . . . . . . . . 8 6 6 8 . . . . . . . . . . 
. . . . . . . . . 8 8 6 6 8 8 . . . . . . . . . 
. . . . . . . . . 8 6 6 6 6 8 . . . . . . . . . 
. . . . . . . . 8 6 6 6 6 6 6 8 . . . . . . . . 
. . . . . . 8 8 6 6 6 6 6 6 6 6 8 8 . . . . . . 
. . . . . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . 
. . . . . 8 8 6 6 6 6 6 6 6 6 6 6 8 8 . . . . . 
. . . . . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . 
. . . . 8 6 6 8 8 6 6 6 6 6 8 8 8 6 6 8 . . . . 
. . . . 8 8 8 8 6 6 8 8 8 6 6 8 6 8 8 8 . . . . 
. . . . . 8 6 8 6 8 8 6 8 8 6 8 6 6 8 . . . . . 
. . . . 8 6 6 8 8 8 6 6 8 8 8 8 8 6 8 . . . . . 
. . . . 8 6 8 8 8 8 6 8 8 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 6 6 8 8 8 8 8 8 6 6 8 8 8 . . . . 
. . . . 8 6 6 6 8 8 8 8 6 8 8 8 6 6 6 8 . . . . 
. . . 8 6 6 6 8 8 6 8 6 6 8 6 8 8 6 6 6 8 . . . 
. . 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 8 . . . 
. 8 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 . . 
. 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 8 . 
. 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 . 
. . 8 8 6 6 8 6 6 6 8 6 6 8 6 6 6 6 8 6 6 6 8 . 
. . 8 6 8 8 6 6 8 8 8 6 6 8 8 6 8 6 6 8 8 6 6 8 
. 8 6 6 8 8 6 8 8 6 8 6 8 6 6 8 8 8 6 8 8 8 8 8 
8 6 6 8 8 6 8 8 6 6 8 8 8 8 6 6 8 8 8 8 6 8 . . 
8 8 8 8 6 6 8 6 6 8 8 8 8 8 8 6 8 6 8 8 6 6 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 8 8 6 8 . 
. 8 8 6 6 6 8 8 6 6 8 8 6 8 8 6 8 8 6 8 6 8 8 . 
. 8 6 6 6 8 8 6 6 6 8 8 6 6 8 6 6 6 6 6 6 6 8 8 
8 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8 
8 8 8 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 8 8 . 
. . 8 8 8 8 6 6 8 6 6 6 6 6 6 6 6 6 8 8 8 8 . . 
. . . . . 8 6 8 8 6 6 8 6 6 6 8 8 6 8 . . . . . 
. . . . . . 8 8 8 6 8 8 8 6 6 8 8 8 8 . . . . . 
. . . . . . . . . 8 8 e e 8 8 . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f f . . . 
. f 2 2 2 2 2 2 2 2 f f f f f f f f f f f . . . 
. f f f f f f f f f f f f f f f f f f f f . . . 
`)
            pause(300)
            if (can == true) {
                otherSprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 . . . . . . . . . . . 
. . . . . . . . . . 8 6 6 8 . . . . . . . . . . 
. . . . . . . . . 8 8 6 6 8 8 . . . . . . . . . 
. . . . . . . . . 8 6 6 6 6 8 . . . . . . . . . 
. . . . . . . . 8 6 6 6 6 6 6 8 . . . . . . . . 
. . . . . . 8 8 6 6 6 6 6 6 6 6 8 8 . . . . . . 
. . . . . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . 
. . . . . 8 8 6 6 6 6 6 6 6 6 6 6 8 8 . . . . . 
. . . . . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . 
. . . . 8 6 6 8 8 6 6 6 6 6 8 8 8 6 6 8 . . . . 
. . . . 8 8 8 8 6 6 8 8 8 6 6 8 6 8 8 8 . . . . 
. . . . . 8 6 8 6 8 8 6 8 8 6 8 6 6 8 . . . . . 
. . . . 8 6 6 8 8 8 6 6 8 8 8 8 8 6 8 . . . . . 
. . . . 8 6 8 8 8 8 6 8 8 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 6 6 8 8 8 8 8 8 6 6 8 8 8 . . . . 
. . . . 8 6 6 6 8 8 8 8 6 8 8 8 6 6 6 8 . . . . 
. . . 8 6 6 6 8 8 6 8 6 6 8 6 8 8 6 6 6 8 . . . 
. . 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 8 . . . 
. 8 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 . . 
. 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 8 . 
. 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 . 
. . 8 8 6 6 8 6 6 6 8 6 6 8 6 6 6 6 8 6 6 6 8 . 
. . 8 6 8 8 6 6 8 8 8 6 6 8 8 6 8 6 6 8 8 6 6 8 
. 8 6 6 8 8 6 8 8 6 8 6 8 6 6 8 8 8 6 8 8 8 8 8 
8 6 6 8 8 6 8 8 6 6 8 8 8 8 6 6 8 8 8 8 6 8 . . 
8 8 8 8 6 6 8 6 6 8 8 8 8 8 8 6 8 6 8 8 6 6 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 8 8 6 8 . 
. 8 8 6 6 6 8 8 6 6 8 8 6 8 8 6 8 8 6 8 6 8 8 . 
. 8 6 6 6 8 8 6 6 6 8 8 6 6 8 6 6 6 6 6 6 6 8 8 
8 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8 
8 8 8 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 8 8 . 
. . 8 8 8 8 6 6 8 6 6 6 6 6 6 6 6 6 8 8 8 8 . . 
. . . . . 8 6 8 8 6 6 8 6 6 6 8 8 6 8 . . . . . 
. . . . . . 8 8 8 6 8 8 8 6 6 8 8 8 8 . . . . . 
. . . . . . . . . 8 8 e e 8 8 . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f f . . . 
. f 2 2 2 2 f f f f f f f f f f f f f f f . . . 
. f f f f f f f f f f f f f f f f f f f f . . . 
`)
                pause(300)
                if (can == true) {
                    otherSprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 . . . . . . . . . . . 
. . . . . . . . . . 8 6 6 8 . . . . . . . . . . 
. . . . . . . . . 8 8 6 6 8 8 . . . . . . . . . 
. . . . . . . . . 8 6 6 6 6 8 . . . . . . . . . 
. . . . . . . . 8 6 6 6 6 6 6 8 . . . . . . . . 
. . . . . . 8 8 6 6 6 6 6 6 6 6 8 8 . . . . . . 
. . . . . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . 
. . . . . 8 8 6 6 6 6 6 6 6 6 6 6 8 8 . . . . . 
. . . . . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . 
. . . . 8 6 6 8 8 6 6 6 6 6 8 8 8 6 6 8 . . . . 
. . . . 8 8 8 8 6 6 8 8 8 6 6 8 6 8 8 8 . . . . 
. . . . . 8 6 8 6 8 8 6 8 8 6 8 6 6 8 . . . . . 
. . . . 8 6 6 8 8 8 6 6 8 8 8 8 8 6 8 . . . . . 
. . . . 8 6 8 8 8 8 6 8 8 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 6 6 8 8 8 8 8 8 6 6 8 8 8 . . . . 
. . . . 8 6 6 6 8 8 8 8 6 8 8 8 6 6 6 8 . . . . 
. . . 8 6 6 6 8 8 6 8 6 6 8 6 8 8 6 6 6 8 . . . 
. . 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 8 . . . 
. 8 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 . . 
. 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 8 . 
. 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 . 
. . 8 8 6 6 8 6 6 6 8 6 6 8 6 6 6 6 8 6 6 6 8 . 
. . 8 6 8 8 6 6 8 8 8 6 6 8 8 6 8 6 6 8 8 6 6 8 
. 8 6 6 8 8 6 8 8 6 8 6 8 6 6 8 8 8 6 8 8 8 8 8 
8 6 6 8 8 6 8 8 6 6 8 8 8 8 6 6 8 8 8 8 6 8 . . 
8 8 8 8 6 6 8 6 6 8 8 8 8 8 8 6 8 6 8 8 6 6 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 8 8 6 8 . 
. 8 8 6 6 6 8 8 6 6 8 8 6 8 8 6 8 8 6 8 6 8 8 . 
. 8 6 6 6 8 8 6 6 6 8 8 6 6 8 6 6 6 6 6 6 6 8 8 
8 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8 
8 8 8 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 8 8 . 
. . 8 8 8 8 6 6 8 6 6 6 6 6 6 6 6 6 8 8 8 8 . . 
. . . . . 8 6 8 8 6 6 8 6 6 6 8 8 6 8 . . . . . 
. . . . . . 8 8 8 6 8 8 8 6 6 8 8 8 8 . . . . . 
. . . . . . . . . 8 8 e e 8 8 . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. f f f f f f f f f f f f f f f f f f f f . . . 
. f 2 f f f f f f f f f f f f f f f f f f . . . 
. f f f f f f f f f f f f f f f f f f f f . . . 
`)
                    pause(300)
                    if (can == true) {
                        otherSprite.destroy(effects.disintegrate, 500)
                        tree1 += 2
                        info.changeScoreBy(2)
                    }
                }
            }
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    let fernes = false
    if (fernes == false) {
        if (game.ask("billd", "!!!")) {
            if (game.ask("fernst", "=10 rocks ")) {
                if (rock > 9) {
                    rock += -10
                    mySprite4 = sprites.create(img`
. . . . . . . b b . . . . . . . . . . . 
. . . . . . . b b . . . . . . . . . . . 
. . . . . . . b b . . . . . . . . . . . 
. . . . . . . b b . . . . . . . . . . . 
. . . . . . . b b . . . . . . . . . . . 
. . . . . . b b b b b b b b b . . . . . 
. . . . . . b b b b b b b b b . . . . . 
. . . . . . b b b b b b b b b . . . . . 
. . . . . . b b b b b b b b b . . . . . 
. . . . . . b b b b b b b b b . . . . . 
. . . . . b b b b b b b b b b b . . . . 
. . . . b b b b b f f f f b b b b . . . 
. . . b b b b b f f f f f f b b b . . . 
. . . b b b b b f f f f f f b b b . . . 
. . . b b b b b f f f f f f b b b . . . 
. . . b b b b b f f f f f f b b b . . . 
. . . b b b b b f f f f f f b b b . . . 
. . . b b b b b f f f f f f b b b . . . 
. . b b b b b b f f f f f f b b b b . . 
. b b b b b b b f f f f f f b b b b b . 
`, SpriteKind.fern)
                    mySprite4.setPosition(mySprite.x, mySprite.y)
                }
            }
        }
    }
})
function doSomething () {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dd == false) {
        can = true
        animation.setAction(mySprite3, ActionKind.picking)
        pause(400)
        can = false
        animation.setAction(mySprite3, ActionKind.idle2)
    } else {
        if (dd == true) {
            can = true
            animation.setAction(mySprite3, ActionKind.pichkding2)
            pause(400)
            can = false
            animation.setAction(mySprite3, ActionKind.idle2)
        }
    }
    animation.stopAnimation(animation.AnimationTypes.All, mySprite3)
})
sprites.onOverlap(SpriteKind.pick, SpriteKind.rook, function (sprite, otherSprite) {
    if (can == true) {
        otherSprite.setImage(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`)
        pause(300)
        if (can == true) {
            otherSprite.setImage(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 f f f f f f 
f f f f f f f f f f f f f f f f 
`)
            pause(300)
            if (can == true) {
                otherSprite.setImage(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
f f f f f f f f f f f f f f f f 
f 2 2 2 2 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`)
                pause(300)
                if (can == true) {
                    otherSprite.destroy(effects.disintegrate, 500)
                    rock += 2
                    info.changeScoreBy(2)
                }
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.rook, myTiles.tile1, function (sprite, location) {
    tiles.setWallAt(location, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fern, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        doSomething()
    }
})
let level = 0
let mySprite4: Sprite = null
let tree1 = 0
let good_vill = 0
let can = false
let myCounter: DigitCounter = null
let dd = false
let mySprite3: Sprite = null
let mySprite: Sprite = null
let rock = 0
rock = 0
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f . . f f . . . . . . . 
. . f 5 5 f f 5 5 f . . . . . . 
. f f 5 5 f f 5 5 f f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 f f 5 5 f f 5 f . . . . . 
. f 5 f f 5 5 f f 5 f . . . . . 
. f 5 5 5 3 3 5 5 5 f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 f 5 f 5 f 5 f f . . . . . 
. f 5 f f f 5 f f f f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 5 f f f f 5 5 f . . . . . 
. f 5 5 f . . f 5 5 f . . . . . 
. f f f f . . f f f f . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`1e001e00030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303101103100f1103100f1103030303030303030303030303030303030303030e020f0202020f02021203030303030303030303030303030303030303030e02020202020202020c03030303030303030303030303030303030303030b02020202020202120a03030303030303030303030303030303030303030a0e0202020202020211030303030303030303030303030303030303030310020d0d02020202020c03030303030303030303030303030303030303030e120a0a0e020d02020a03030303030303030303030303030303030303030b0c03030b0c0a0b0d1303030303030303030303030303030303030303030a0a03030a0a030a0a0a0303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 . . . 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 . . 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.castle.tilePath1,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.castle.tilePath4,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 13))
mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . b b b b b b b . . . . . 
. . . . b b b b b b b b b . . . . 
. . . b b . . . e . . . b . . . . 
. . . . . . . . e . . . . b . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . . . . . . . . . . 
`, SpriteKind.pick)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(11, 13))
mySprite3.follow(mySprite)
let anim = animation.createAnimation(ActionKind.Idle, 1000)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f . . f f . . . . . . . 
. . f 5 5 f f 5 5 f . . . . . . 
. f f 5 5 f f 5 5 f f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 f f 5 5 f f 5 f . . . . . 
. f 5 f f 5 5 f f 5 f . . . . . 
. f 5 5 5 3 3 5 5 5 f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 f 5 f 5 f 5 f f . . . . . 
. f 5 f f f 5 f f f f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 5 f f f f 5 5 f . . . . . 
. f 5 5 f . . f 5 5 f . . . . . 
. f f f f . . f f f f . . . . . 
`)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f . . f f . . . . . . . 
. . f 5 5 f f 5 5 f . . . . . . 
. f f 5 5 f f 5 5 f f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 f f 5 5 f f 5 f . . . . . 
. f 5 f f 5 5 f f 5 f . . . . . 
. f 5 5 5 3 3 5 5 5 f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 f 5 f 5 f 5 f f . . . . . 
. f 5 f f f 5 f f f f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 5 f f f f 5 5 f . . . . . 
. f f f f . . f f f f . . . . . 
`)
animation.attachAnimation(mySprite, anim)
anim = animation.createAnimation(ActionKind.Walking, 150)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f . . f f . . . . . . . 
. . f 5 5 f f 5 5 f . . . . . . 
. f f 5 5 f f 5 5 f f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 f f 5 5 f f 5 f . . . . . 
. f 5 f f 5 5 f f 5 f . . . . . 
. f 5 5 5 3 3 5 5 5 f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 f 5 f 5 f 5 f f . . . . . 
. f 5 f f f 5 f f f f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 5 f f f f 5 5 f . . . . . 
. f f f f . . f f f f . . . . . 
`)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f . . f f . . . . . . . 
. . f 5 5 f f 5 5 f . . . . . . 
. f f 5 5 f f 5 5 f f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 f f 5 5 f f 5 f . . . . . 
. f 5 f f 5 5 f f 5 f . . . . . 
. f 5 5 5 3 3 5 5 5 f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 f 5 f 5 f 5 f f . . . . . 
. f 5 f f f 5 f f f f . . . . . 
. f 5 5 5 5 5 5 5 5 f . . . . . 
. f 5 5 f f f f 5 5 f . . . . . 
. f 5 5 f . . f 5 5 f . . . . . 
. f f f f . . f f f f . . . . . 
`)
animation.attachAnimation(mySprite, anim)
anim = animation.createAnimation(ActionKind.picking, 200)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . b b b . . . . . 
. . . . . . . . . . . b b . . . . 
. . . . . . . . . . . . b b . . . 
. . . . . . . . . . . . . b b . . 
. . . . . . . . . . . . e . b b . 
. . . . . . . . . . . e . . . b b 
. . . . . . . . . . e . . . . . b 
. . . . . . . . . e . . . . . . b 
. . . . . . . . e . . . . . . . . 
. . . . . . . . . . . . . . . . . 
`)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . b b b b b b b . . . . . 
. . . . b b b b b b b b b . . . . 
. . . b b . . . e . . . b . . . . 
. . . . . . . . e . . . . b . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . . . . . . . . . . 
`)
animation.attachAnimation(mySprite3, anim)
anim = animation.createAnimation(ActionKind.pichkding2, 200)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . b b b . . . . . . . . . 
. . . . b b b . . . . . . . . . . 
. . . b b . . . . . . . . . . . . 
. . b b . . . . . . . . . . . . . 
. b b . e . . . . . . . . . . . . 
b b . . . e . . . . . . . . . . . 
b b . . . . e . . . . . . . . . . 
b . . . . . . e . . . . . . . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . . . . . . . . . . 
`)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . b b b b b b b . . . . . 
. . . . b b b b b b b b b . . . . 
. . . b b . . . e . . . b . . . . 
. . . . . . . . e . . . . b . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . . . . . . . . . . 
`)
animation.attachAnimation(mySprite3, anim)
anim = animation.createAnimation(ActionKind.idle2, 200)
anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . b b b b b b b . . . . . 
. . . . b b b b b b b b b . . . . 
. . . b b . . . e . . . b . . . . 
. . . . . . . . e . . . . b . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . e . . . . . . . . 
. . . . . . . . . . . . . . . . . 
`)
dd = true
let mySprite2 = sprites.create(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.rook)
mySprite2.setImage(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
tiles.placeOnRandomTile(mySprite2, myTiles.tile1)
game.onUpdateInterval(Math.randomRange(5000, 10000), function () {
    mySprite2 = sprites.create(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.rook)
    tiles.placeOnRandomTile(mySprite2, myTiles.tile1)
})
game.onUpdateInterval(Math.randomRange(5000, 10000), function () {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 . . . . . . . . . . . 
. . . . . . . . . . 8 6 6 8 . . . . . . . . . . 
. . . . . . . . . 8 8 6 6 8 8 . . . . . . . . . 
. . . . . . . . . 8 6 6 6 6 8 . . . . . . . . . 
. . . . . . . . 8 6 6 6 6 6 6 8 . . . . . . . . 
. . . . . . 8 8 6 6 6 6 6 6 6 6 8 8 . . . . . . 
. . . . . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . 
. . . . . 8 8 6 6 6 6 6 6 6 6 6 6 8 8 . . . . . 
. . . . . 8 6 6 6 6 6 6 6 6 6 6 6 6 8 . . . . . 
. . . . 8 6 6 8 8 6 6 6 6 6 8 8 8 6 6 8 . . . . 
. . . . 8 8 8 8 6 6 8 8 8 6 6 8 6 8 8 8 . . . . 
. . . . . 8 6 8 6 8 8 6 8 8 6 8 6 6 8 . . . . . 
. . . . 8 6 6 8 8 8 6 6 8 8 8 8 8 6 8 . . . . . 
. . . . 8 6 8 8 8 8 6 8 8 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 6 6 8 8 8 8 8 8 6 6 8 8 8 . . . . 
. . . . 8 6 6 6 8 8 8 8 6 8 8 8 6 6 6 8 . . . . 
. . . 8 6 6 6 8 8 6 8 6 6 8 6 8 8 6 6 6 8 . . . 
. . 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 8 . . . 
. 8 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 . . 
. 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 8 . 
. 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 . 
. . 8 8 6 6 8 6 6 6 8 6 6 8 6 6 6 6 8 6 6 6 8 . 
. . 8 6 8 8 6 6 8 8 8 6 6 8 8 6 8 6 6 8 8 6 6 8 
. 8 6 6 8 8 6 8 8 6 8 6 8 6 6 8 8 8 6 8 8 8 8 8 
8 6 6 8 8 6 8 8 6 6 8 8 8 8 6 6 8 8 8 8 6 8 . . 
8 8 8 8 6 6 8 6 6 8 8 8 8 8 8 6 8 6 8 8 6 6 8 . 
. 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 8 8 6 8 . 
. 8 8 6 6 6 8 8 6 6 8 8 6 8 8 6 8 8 6 8 6 8 8 . 
. 8 6 6 6 8 8 6 6 6 8 8 6 6 8 6 6 6 6 6 6 6 8 8 
8 6 6 6 6 6 6 6 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 8 
8 8 8 6 6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 6 8 8 . 
. . 8 8 8 8 6 6 8 6 6 6 6 6 6 6 6 6 8 8 8 8 . . 
. . . . . 8 6 8 8 6 6 8 6 6 6 8 8 6 8 . . . . . 
. . . . . . 8 8 8 6 8 8 8 6 6 8 8 8 8 . . . . . 
. . . . . . . . . 8 8 e e 8 8 . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. . . . . . . . f e e e f e e f . . . . . . . . 
. . . . . . . . f e f e f f e f . . . . . . . . 
`, SpriteKind.tree)
    tiles.placeOnRandomTile(mySprite2, myTiles.tile1)
})
game.onUpdateInterval(Math.randomRange(5000, 10000), function () {
    mySprite2 = sprites.create(img`
. . . . . c c b b b . . . . . . 
. . . . c b 5 5 d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d 5 5 b . . 
. . . c b b 5 5 d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b 5 b 
c b b 5 5 d b b b b b d d b d b 
c c b b d d d d d d 5 5 b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b 5 d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.good)
    tiles.placeOnRandomTile(mySprite2, myTiles.tile1)
})
forever(function () {
	
})
forever(function () {
    music.playMelody("F E F F E F G F ", 253)
})
forever(function () {
	
})
forever(function () {
    if (controller.A.isPressed()) {
    	
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        dd = true
    } else {
        if (controller.right.isPressed()) {
            dd = false
        }
    }
})
forever(function () {
    if (level == 0) {
        if (info.score() > 9) {
            game.splash("level up")
            pause(200)
            game.splash("level up")
            level = 1
        }
    }
})
forever(function () {
    if (controller.anyButton.isPressed()) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.setAction(mySprite, ActionKind.Walking)
        pause(300)
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        pause(2000)
        animation.setAction(mySprite, ActionKind.Idle)
    }
})
forever(function () {
	
})
