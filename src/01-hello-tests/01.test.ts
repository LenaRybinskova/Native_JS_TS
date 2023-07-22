import {mult, splitIntoWords, sum} from "./01";
// "название" и стрел функ в которой описываем логику тестирования
// лучше делать много мелких тестов, чем один большой

// yarn test запускает тесты в режиме Вотчера(смотрителя),
// сам следит за изм и постоянно тестит


//
let a: number;
let b: number;
let c: number;


// автоматом вызывается после каждого теста и присваив значения СТАРТОВЫЕ
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test("sum should be correct", () => {

    // 1. ИСХОДНЫЕ ДАННЫЕ
//берет из колл-бек функции

    // 2.вызываем тестируемую функцию
    const result1 = sum(a, b)
    a = 100;
    const result2 = sum(a, c)

    //3. ОЖИДАЕМЫЙ РЕЗУЛЬТАТ
    expect(result1).toBe(3)
    expect(result2).toBe(103)
})


test("multiplay should be correct", () => {

    // 1. ИСХОДНЫЕ ДАННЫЕ
//берет из колл-бек функции

    // 2.вызываем тестируемую функцию
    const result1 = mult(a, b)
    const result2 = mult(b, c)

    //3. ОЖИДАЕМЫЙ РЕЗУЛЬТАТ
    expect(result1).toBe(2)
    expect(result2).toBe(6)

})


test("spliting into words should be correct", () => {

    // 1. ИСХОДНЫЕ ДАННЫЕ
    const sent1 = "Hello my friend!";
    const sent2 = "JS - the best  programming language.";


    // 2.вызываем тестируемую функцию ( ACTION)
    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    //3. ОЖИДАЕМЫЙ РЕЗУЛЬТАТ
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")


    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("js")
    expect(result2[1]).toBe("the")
    expect(result2[2]).toBe("best")
    expect(result2[3]).toBe("programming")
    expect(result2[4]).toBe("language")
})

