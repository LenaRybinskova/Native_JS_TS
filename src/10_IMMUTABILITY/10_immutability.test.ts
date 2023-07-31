import {
    addNewBooksToUser,
    maleHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanies, updateCompanyTitle,
    upgradeLaptop,
    UserType,
    userWithBooks,
    UserWithLapTopType, WithCompanyType
} from './10_immutability';


// 1
test('', () => {

    let user: UserType = {
        name: 'Lena',
        hair: 100,
        address: {city: 'Msk', house: 11}
    }


    maleHairStyle(user, 2)
    expect(user.hair).toBe(50)
})

// 2
test('change address', () => {

    let user: UserWithLapTopType = {
        name: 'Lena',
        hair: 100,
        address: {city: 'Minsk', house: 12},
        lapTop: {title: 'ZenBook'}
    }

    const movedUser = moveUser(user, 'Msk')

    expect(user).not.toBe(movedUser) // юзеры не равны
    expect(user.address).not.toBe(movedUser.address) // адреса не равны
    expect(movedUser.address.city).toBe('Msk')
    expect(user.lapTop).toBe(movedUser.lapTop)// объекты ЛепТтоп равны(тк ссылка на один и то же объект)
})

// 3
test('upgrade laptop to macbook', () => {

    let user: UserWithLapTopType = {
        name: 'Lena',
        hair: 100,
        address: {city: 'Minsk', house: 12},
        lapTop: {title: 'ZenBook'}
    }

    const upgrade = upgradeLaptop(user, 'macbook')


    expect(user.lapTop).not.toBe(upgrade.lapTop)
    expect(upgrade.lapTop.title).toBe('macbook')
    expect(user.address).toBe(upgrade.address)
})

//4
test('change house', () => {
    let user: UserWithLapTopType & userWithBooks = {
        name: 'Lena',
        hair: 100,
        address: {city: 'Minsk', house: 12},
        lapTop: {title: 'ZenBook'},
        books: ['Css', 'JS', 'TS']
    }

    const upgadeUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(upgadeUser)
    expect(user.books).toBe(upgadeUser.books)
    expect(upgadeUser.address.house).toBe(99)
})

//5
test('add new books', () => {
    let user: UserWithLapTopType & userWithBooks = {
        name: 'Lena',
        hair: 100,
        address: {city: 'Minsk', house: 12},
        lapTop: {title: 'ZenBook'},
        books: ['Css', 'JS', 'TS']
    }

    const upgadeUser = addNewBooksToUser(user, ['React', 'restAPI'])

    expect(user).not.toBe(upgadeUser)
    expect(user.books).not.toBe(upgadeUser.books)

    expect(upgadeUser.books[3]).toBe('React')
    expect(upgadeUser.books[4]).toBe('restAPI')
})


//6
test('upbate book', () => {
    let user: UserWithLapTopType & userWithBooks = {
        name: 'Lena',
        hair: 100,
        address: {city: 'Minsk', house: 12},
        lapTop: {title: 'ZenBook'},
        books: ['Css', 'JS', 'TS']
    }

    const upgadeUserBook = updateBook(user, 'JS', 'restAPI')

    expect(user).not.toBe(upgadeUserBook)
    expect(user.books).not.toBe(upgadeUserBook.books)
    expect(upgadeUserBook.books[1]).toBe('restAPI')

})

//7
test('remove \'JS\' book', () => {
    let user: UserWithLapTopType & userWithBooks = {
        name: 'Lena',
        hair: 100,
        address: {city: 'Minsk', house: 12},
        lapTop: {title: 'ZenBook'},
        books: ['Css', 'JS', 'TS']
    }

    const userWithRemoveBook = removeBook(user, 'JS')

    expect(user).not.toBe(userWithRemoveBook)
    expect(user.books).not.toBe(userWithRemoveBook.books)
    expect(userWithRemoveBook.books[1]).toBe('TS')
    expect(userWithRemoveBook.books.length).toBe(2)

})


//8
test('update companies', () => {
    let user: UserWithLapTopType & WithCompanyType = {
        name: 'Lena',
        hair: 100,
        address: {city: 'Minsk', house: 12},
        lapTop: {title: 'ZenBook'},
        companies: [{id: 1, title: 'epam'}, {id: 1, title: 'INCUBATOR'}]
    }

    const userWithUpdateCompanies = updateCompanies(user, 1, 'EPAM')

    expect(user).not.toBe(userWithUpdateCompanies)
    expect(user.companies).not.toBe(userWithUpdateCompanies.companies)
    expect(user.lapTop).toBe(userWithUpdateCompanies.lapTop)
    expect(userWithUpdateCompanies.companies[0].title).toBe('EPAM')

})


//9
test('update company', () => {


    let companies = {
        'Lena': [{id: 1, title: 'epam'}, {id: 1, title: 'INCUBATOR'}],
        'Sasha': [{id: 2, title: 'INCUBATOR'}]
    }

    const updateCompany =updateCompanyTitle(companies,"Lena", 1, "EPAM")

    expect(companies).not.toBe(updateCompany)

    expect(updateCompany["Sasha"]).toBe(companies["Sasha"])
    expect(updateCompany["Lena"][0].title).toBe('EPAM')

})