import {
    createMessages,
    getStreetsTitlesOfGovernmentBuildings,
    getStreetsTitlesOfHouses,
    greeting,
    ManType
} from './map';
import {CityType} from '../02-OBJECTS/02_02';

let people: ManType[];

beforeEach(()=>{
  people=[
      {name: 'Lena Rybinskova', age: 33},
      {name: 'Sasha Rybinskov', age: 33},
      {name: 'Anna Rybinskova', age: 3},
  ]
})

test("should det array of greeting messages", ()=>{

    const messages = greeting(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Lena welcome to IT")

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

// 01. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles of government buildings', ()=> {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");
})

//02. создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(city.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("White street");
    expect(streetsNames[1]).toBe("Happy street");
    expect(streetsNames[2]).toBe("Happy street");
})

// 03
test('create greeting messages for streets', ()=> {
let messages = createMessages(city.houses)
expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello guys from White street")
})