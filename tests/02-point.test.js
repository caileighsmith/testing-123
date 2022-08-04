const {Point} = require('../src/02-point')

describe('Point class', ()=>{
    test('Should assign x and y', ()=>{
        const newPoint = new Point(10,5)
        expect(newPoint.x).toBe(10)
        expect(newPoint.y).toBe(5)
    })
    test('should move x and y', ()=>{
        const point3 = new Point(10,10)
        point3.move(1,2)
        expect(point3.x).toBe(11)
        expect(point3.y).toBe(12)
    })


    test('Should reflect', ()=> {
        const point2 = new Point(10,5)
        point2.reflect()
        expect(point2.x).toBe(5)
        expect(point2.y).toBe(10)
    })
    
    test ('should stretch', ()=> {
        const point4 = new Point(10,10)
        point4.stretch(2,2)
        expect(point4.x).toBe(20)
        expect(point4.y).toBe(20)
    })
})