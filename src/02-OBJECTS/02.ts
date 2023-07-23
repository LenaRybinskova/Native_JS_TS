type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type Technologietype = {
    id: number
    title: string
}


export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Technologietype[]
}


// созд объекта через синтаксис ЛИТЕРАЛА объекта - скобочки фигурные
const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "nnnnnnnn",
        "city": {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {id: 1, title: "HTML"},
        {id: 2, title: "JS"},
        {id: 3, title: "React"}
    ]
}


console.log(student.technologies[2].title)