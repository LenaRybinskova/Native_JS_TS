import {increaseAge, UserAdrType, UserType} from './09_Mutability';


test('reference type test, МУТАБЕЛЬНОЕ ИЗМЕНЕНИЕ ОБЪЕКТА', () => {

    const user: UserType = {
        name: 'Lena',
        age: 33
    }

    increaseAge(user)

    expect(user.age).toBe(34)
})


test('array test, МУТАБЕЛЬНОЕ ИЗМЕНЕНИЕ МАССИВА', () => {

    const user = [{
        name: 'Lena',
        age: 33
    },
        {
            name: 'Sasha',
            age: 33
        }]

    let admin = user // получилась не копия, а две ссылки на один и тот же объект, поэтому это тоже МУТАБЕЛЬНО

    admin.push({name: 'Anna', age: 2})

    expect(admin.length).toBe(3) // и тут добавился элемент
    expect(user.length).toBe(3)  // и тут добавился элемент
})


test('array test, ИММУТАБЕЛЬНОЕ ИЗМЕНЕНИЕ ПРИМИТИВА', () => {

    const userCount = 100
    let adminCount = userCount

    adminCount = 101;

    expect(adminCount).toBe(101)
    expect(userCount).toBe(100)  // НЕ ИЗМЕНИЛОСЬ
})


test('reference type test2, МУТАБЕЛЬНОЕ ИЗМЕНЕНИЕ ОБЪЕКТА', () => {

    const user: UserAdrType = {
        name: 'Lena',
        age: 33,
        address: {
            title: 'Minsk'
        }
    }

// let addr=user.address

    const user2 = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Kanary'

    expect(user.address.title).toBe('Kanary')
})


test('reference type test2, МУТАБЕЛЬНОЕ ИЗМЕНЕНИЕ МАССИВА', () => {

    const adress = {title: 'Minsk'}

    const user1: UserAdrType = {
        name: 'Lena',
        age: 33,
        address: adress
    }


    const user2: UserAdrType = {
        name: 'Natasha',
        age: 30,
        address: adress
    }

    const users = [user1, user2, {name: 'Sasha', age: 33, address: adress}]

    const admins = [user1, user2]

    admins[0].name = 'Elena'

    expect(user1.name).toBe('Elena')
})

// иммутабельность

test('', () => {
    const letters = ['a', 'b', 'c', 'd']

    const pasoirtist = (letters: any) => {
        const copy = [...letters].sort()
    }

    pasoirtist(letters)
})