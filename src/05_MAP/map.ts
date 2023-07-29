import {GovernmentBuildingType, HouseType} from '../02-OBJECTS/02_02';

export type ManType = {
    name: string
    age: number
}

const people: ManType[] = [
    {name: 'Lena Rybinskova', age: 33},
    {name: 'Sasha Rybinskov', age: 33},
    {name: 'Anna Rybinskova', age: 3},
]
// 1 вар написания функ
const dimychTransformatof = (man: ManType) => ({
    stack: ['JS', 'TS', 'HTML', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})

// 2 вар написания функ
// const dimychTransformatof2= (man: ManType) => {
//     return{
//         stack: ['JS', 'TS', 'HTML', 'tdd', 'react'],
//         firstName: man.name.split(' ')[0],
//         lastName: man.name.split(' ')[1]
//     }
// }

const dev = people.map(dimychTransformatof)
const dev2 = people.map(p => ({
    stack: ['JS', 'TS', 'HTML', 'tdd', 'react'],
    firstName: p.name.split(' ')[0],
    lastName: p.name.split(' ')[1]
}))


export const greeting = (people: ManType[]) => {
    return people.map(p => `Hello ${p.name.split((' '))[0]} welcome to IT`)
}

// 01
export const getStreetsTitlesOfGovernmentBuildings = (govBindings: GovernmentBuildingType[]) => {
    return govBindings.map(b => b.address.street.title)
}

// 02
export const getStreetsTitlesOfHouses = (arr: HouseType[]) => {
    return arr.map(a => a.address.street.title)
}
//03
export const createMessages=(houses:HouseType[] )=>{
    return houses.map(h => (
        `Hello guys from ${h.address.street.title}`
    ))
}