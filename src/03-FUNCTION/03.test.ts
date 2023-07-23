import {StudentType} from "../02-OBJECTS/02";
import {addSkill, doesStubentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
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
})

test("new tech skill should be added to student", () => {
    addSkill(student,"JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined() // .toBeDefined() значит определен, он есть
})


test("student should be active", () => {
    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})


test("does student live in city", () => {
    let result1 = doesStubentLiveIn(student, "Moscow")
    let result2 = doesStubentLiveIn(student, "Minsk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})