import React from "react"

type LessonType = {
    title: string
}

type StreetType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: LessonType[]
    adress: {
        street: StreetType
    }
}

let props = {
    name: "Lena",
    age: 32,
    lessons: [{title: "1"}, {title: "2"},{title: "3"}],
    adress: {
        street: {
            title: "Nizhegorodskaya street"
        }
    }
}

const [ls1,ls2]=props.lessons

// const age=props.age
// const lessons = props.lessons


const {age, lessons, adress} = props
const {title} = props.adress.street

type DestructuringType = {
    title: string
    man: ManType
}

export const Destructuring: React.FC<DestructuringType> = (props) => {

    // const {title}=props
    // const {name}=props.man

    // сразу вытащ  и тайтл и найм
    const {title, man:{name}}=props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{name}</div>
        </div>
    );
};

// деструктуризация массива
const useStateCustom = (message:string)=>{
    return [message, function (){}]
}


const [message, setMessage]=useStateCustom("Hello")

