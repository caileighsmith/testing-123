const { Rectangle } = require('../src/01-rectangle.js')


describe('Rectangle Class', () => {
    test('should assign width and height', () =>{
        const r1 = new Rectangle(5,11)
        expect(r1.width).toBe(5)
        expect(r1.height).toBe(11)
    })
})