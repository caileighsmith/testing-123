const {Cuboid} = require('../src/03-cuboid')


describe('Testing cuboid', ()=>{
    test ('Volume should assign to correct amount',() =>{
        const newCube = new Cuboid(10,10,10)
        expect(newCube.volume()).toBe(1000)
    })
    test('Paint should change colour',()=>{
        const thisCube = new Cuboid(10,10,10)
        thisCube.colour = 'red'
        expect(thisCube.colour).toBe('red')
    })

})