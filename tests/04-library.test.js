const {Book} = require('../src/04-library')
const {User} = require('../src/04-library')

describe('testing book', ()=> {

    test('Username should be updated if password is correct.', ()=>{
        let newUser = new User('admin', 'admin123')
        newUser.updateUsername('123',456)
        expect(newUser.username).toBe('admin')
        
        newUser.updateUsername('newUserName', 'admin123')
        expect(newUser.username).toBe('newUserName')
    })

    test('Book should check out', ()=>{
        let starWars = new Book('starWars','123', 'cai')
        let user2 = new User('admin', 'admin')
        starWars.currentOwner = 'admin'
        user2.checkoutBook(starWars)
        expect(starWars.isAvailable).toBe(false)
    })

    test('Book should be returned successfully', ()=>{
        let starWars = new Book('starWars','123', 'cai')
        let user2 = new User('admin', 'admin')
        user2.returnBook(starWars)
        expect(starWars.isAvailable).toBe(true)
    })

})