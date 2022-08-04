const {Xwing} = require('../src/05-xwing')
const {Spaceship} = require('../src/05-xwing')

describe('Xwing tests', ()=> {
    let newShip = new Spaceship(100,100)
    test('Should level up', ()=> {
        let newShip = new Spaceship(100,100)
        newShip.levelUp(10)
        expect(newShip.xp).toBe(10)

    })
    test('Damage should be taken',()=>{
        newShip.takeDamage(50)
        expect(newShip.shield).toBe(50)

        newShip.takeDamage(50)
        expect(newShip.shield).toBe(0)

        newShip.takeDamage(50)
        expect(newShip.health).toBe(50)
    })
})

describe('X-wing tests', ()=>{

    let lukesXwing = new Xwing(100,100,10)

    test('Health should heal', ()=>{
        lukesXwing.heal()
        expect(lukesXwing.health).toBe(lukesXwing.health + lukesXwing.xp * 0.1)
    })

    test('Speed should increase', ()=>{
        expect(lukesXwing.speed()).toBe(lukesXwing.basicSpeed * lukesXwing.shield === 0 ? 2 : 1)
    })

    test('Leveling up should work', ()=>{
        let x = 20;
        lukesXwing.levelUp(x)
        expect(lukesXwing.health).toBe(100+ Math.max(x, 0))
    })

})
