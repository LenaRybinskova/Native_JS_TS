import {ManType} from './07_Destructor';

let props: ManType;

beforeEach(()=>{
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"},{title: "3"}],
        adress: {
            street: {
                title: "Nizhegorodskaya street"
            }
        }
    }
})

//объекты
test("", ()=>{

    // const age =props.age
    // const lessons =props.lessons

    const {age,lessons}=props
    const {title} = props.adress.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(3)
    expect(title).toBe("Nizhegorodskaya street")
})

//массивы
test("ghj", ()=>{

    const [,l2, ...rest]=props.lessons

    expect(l2.title).toBe("2")
    expect(rest.length).toBe(1)
    expect(rest[0].title).toBe("3")
    expect(rest[0]).toStrictEqual({title: "3"})
})