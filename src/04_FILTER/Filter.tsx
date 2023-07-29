import {CityType, GovernmentBuildingType} from '../02-OBJECTS/02_02';

const ages = [18, 20, 22, 1, 100, 90, 14]


export const predicate = (age: number) => {
    return age > 90
}
const oldAges = [100]


type CourseType = {
    title: string
    price: number
}
const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

export const cheapCourses = (course: CourseType) => {
    return course.price < 160
}

const chipCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150}
]

//--------------------------
export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    return {...city, houses: city.houses.filter(h => h.address.street.title !== street)}
}

export const getBuildingsWithStaffCountGreaterThen = (arrBildings: GovernmentBuildingType[], count: number) => {

    return arrBildings.filter(b => b.staffCount > count)
}