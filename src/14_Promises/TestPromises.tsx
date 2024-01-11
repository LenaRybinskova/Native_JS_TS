import axios from 'axios';
import {logDOM} from '@testing-library/react';
import {log} from 'util';

export const TestPromises = () => {

    /*    let value = []
        const getVacanciesCountFromGoogle = () => {
            return axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    value = res.data.items
                    return res.data.items
                })
        }
        getVacanciesCountFromGoogle().then(data => console.log(data))*/
//---------------------------------------------------------------------------
    /*    const myPromise = axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res=>{return res.data.items})
        console.log("myPromise", myPromise)*/


    /*const testFunc=async ()=>{
        let users = await Promise.resolve("рррррр")
        return users
    }
    console.log(testFunc())*/
//---------------------------------------------------------------------------

    /* function getNumber() {
         const promise = new Promise((resolve, reject) => {
             reject('какая то ошибка произошла')
             setTimeout(() => {
                 console.log('setTimeout')
                 resolve(Math.random())
             }, 2000)

         })
         console.log('вышли из getNumber')
         return promise
     }

     console.log('старт')

     getNumber().then(n => console.log(n))
     getNumber().then(n => console.log(n))*/
//---------------------------------------------------------------------------


    //это синхр вариант с исп ЛокалСторадж
    /*    const repo = {
            save(data: any) {
                try {
                    localStorage.setItem('some-key', JSON.stringify(data))
                } catch (error){
                    return false
                }
                return true
            }
        }
        const result=repo.save("IT-KAMASUTRA")
        result? console.log("Saved"):console.warn("NOT Saved")*/


    /*    //Промисификация--------------------------------------------------
        const repo = {

            asyncSave(data: any) {
                const promise = new Promise((res, rej) => {
                    try {
                        localStorage.setItem('some-key', JSON.stringify(data))
                        res('чем то зарезолвился')
                    } catch (error) {
                        rej(error)
                    }
                })
                return promise
            },

            asyncReadData() {
                return new Promise((res, rej) => {
                    const data = localStorage.getItem('some-key')
                    if (data === null) res((null))
                    else res(JSON.parse(data))
                })
            }
        }


    const run = async () => {

        await repo.asyncSave('IT-KAMASUTRA')
            .then(() => console.log('Saved'))
            .catch((err:string) => console.warn('NOT Saved'))

        const data = await repo.asyncReadData()
        console.log(data)
    }

        run()*/


    //------------------------------------------------------------------

    /*  async function run() {
          await wait(1000)
          console.log(1)
          await wait(1000)
          console.log(2)
          await wait(1000)
          console.log(3)
      }

      function wait(sec: any) {
          const pr = new Promise((res, rej) => {
              setTimeout(() => {
                  res('ok')
              }, sec)
          })
          return pr
      }

      run()*/

    //------------------------------------------------------------------

    async function findUserInDB(id: number) {
        const DB = [{id: 1, name: 'Lena', friend: 'Vera'}, {id: 2, name: 'Sasha', friend: 'Dima'}]
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = DB.find(u => u.id === id)
                user ? resolve(user) : reject('not found user')
            }, randomIntFromInterval(500,1500))

        })
    }

    function randomIntFromInterval(min:any, max:any) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    findUserInDB(2).then(data => console.log(data)).catch(err => console.log(err))

    return (
        <h1>{}</h1>
    )
}
