export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}

export type LapTopType = {
    title: string
}

export type UserWithLapTopType = UserType & { lapTop: LapTopType }

export type WithCompanyType = {
    companies: Array<{ id: number, title: string }>
}

// 1
export const maleHairStyle = (u: UserType, power: number) => {
    return {
        ...u,
        hair: u.hair / power
    }
}


// 2
export const moveUser = (user: UserWithLapTopType, city: string) => {
    return {
        ...user, address: {...user.address, city: city}
    }
}


// 3
export const upgradeLaptop = (user: UserWithLapTopType, name: string) => {
    return {...user, lapTop: {...user.lapTop, title: name}}
}

//4
export type userWithBooks = UserType & { books: string[] }

export const moveUserToOtherHouse = (user: UserWithLapTopType & userWithBooks, numberHouse: number) => {
    return {...user, address: {...user.address, house: numberHouse}}
}


//5 примерно 50 минута видео
export const addNewBooksToUser = (u: UserWithLapTopType & userWithBooks, booksArr: string[]) => {
    return {...u, books: [...u.books, ...booksArr]}
}


//6  примерно 58 минута видео

export const updateBook = (u: UserWithLapTopType & userWithBooks, oldBook: string, newBook: string) => {

    return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
}

// 7 примерно 1.06 видео
export const removeBook = (u: UserWithLapTopType & userWithBooks, removeBook: string) => {
    return {
        ...u, books: u.books.filter(b => b !== removeBook)
    }
}

//8
export const updateCompanies = (user: UserWithLapTopType & WithCompanyType, id: number, newComp: string) => {
    return {...user, companies: user.companies.map(c => c.id === id ? {...c, title: newComp} : c)}
}


//9
export const updateCompanyTitle = (companies: {[key:string]: Array<{id:number, title:string}>}, userName: string, companyId: number, newTitle: string) => {
return {...companies, [userName]:companies.userName.map(c=>c.id===companyId ? {...c, title: newTitle}:c)}
}