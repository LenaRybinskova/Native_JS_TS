type UserType = {
    [key:string]: {id:number, name:string}
}

let users: UserType

beforeEach(()=>{
users = {
        "101":{id:101, name: "lena"},
        "102":{id:102, name: "Sasha"},
        "103":{id:103, name: "Anna"},
    }
})


test("update name", ()=>{

    users["101"].name="Lena"

    expect(users["101"]).toEqual({id:101, name: "Lena"})

})

test("delete user", ()=>{

    delete users["101"]

    expect(users["101"]).toBeUndefined()

})