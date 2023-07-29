import {cheapCourses, demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen, predicate} from './Filter';
import {CityType} from '../02-OBJECTS/02_02';

test('shoult take old mens then 90 ', () => {

    const ages = [18, 20, 22, 1, 100, 90, 14]

    // const oldAges = ages.filter(predicate)
    const oldAges = ages.filter(a => a > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})


test('shoult take price <160  ', () => {

    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

    // const chipCourses = courses.filter(cheapCourses)
    const chipCourses = courses.filter(c => c.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].price).toBe(110)
})


test('get only completed tasks', () => {

    const tasks = [
        {id: 1, title: 'CSS', isDone:false},
        {id: 2, title: 'JS', isDone:false},
        {id: 3, title: 'TS', isDone:true},
        {id: 4, title: 'REACT', isDone:true},
    ]

    const completedTasks=tasks.filter(t=>t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('TS')
    expect(completedTasks[1].title).toBe('REACT')
})


test('get only uncompleted tasks', () => {

    const tasks = [
        {id: 1, title: 'CSS', isDone:false},
        {id: 2, title: 'JS', isDone:false},
        {id: 3, title: 'TS', isDone:true},
        {id: 4, title: 'REACT', isDone:true},
    ]

    const completedTasks=tasks.filter(t=>!t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('CSS')
    expect(completedTasks[1].title).toBe('JS')
})

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id:1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                id:2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "Happy street"
                    }
                }
            },
            {
                id:3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: "Happy street"
                    }
                }
            }
        ],
        governmentBuildings: [{
            type: "HOSPITAL",
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: "Central Str"
                }
            }
        }, {
            type: "FIRE-STATION",
            budget: 500000,
            staffCount: 1000,
            address: {
                street: {title: "South Str"}
            }
        }],
        citizenNumber: 1000000
    }
})

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    let filtered = demolishHousesOnTheStreet(city, 'Happy street');

    expect(filtered.houses.length).toBe(1);
    expect(filtered.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})