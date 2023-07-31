
export type UserType={
    name: string
    age:number

}

export type UserAdrType={
    name: string
    age:number
    address: {title:string}
}
const user={
    name: "Lena",
    age:33
}

export const increaseAge=(u:UserType)=>{
    u.age++
}