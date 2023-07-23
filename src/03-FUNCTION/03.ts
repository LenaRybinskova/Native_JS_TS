import {StudentType} from "../02-OBJECTS/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02-OBJECTS/02_02";


export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}


// ЧИСТАЯ ФУНКЦИЯ  - функ принимает данные, но не имеет права их менять.
// addSkill Это не чистаф функ,тк мутирует первоначальный объекта

// Вариант написания:
// компоненты писать как фанкшен декларейшен, а колл беки - как стрелочные функции
// вообще это не принципиально

export const makeStudentActive = (st: StudentType) => {
    st.isActive = true
}

export const doesStubentLiveIn = (st: StudentType, city: string) => {
    return st.address.city.title === city
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, Count: number) => {
    building.staffCount -= Count
}

export const toHireStaff = (building: GovernmentBuildingType, Count: number) => {
    building.staffCount += Count
}

export const createMessage= (city: CityType)=>{
return `Hello ${city.title} citizens.I want you be happy. All ${city.citizenNumber} citizens`
}