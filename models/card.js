const mysql = require('mysql')
const  db = require('../config')
const Course = require('./course')


class Card {
    
    static async add(course){  
        
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO card(cardcourses, cardprice)VALUES(?,?);`,
            [course.uuid, +course.price],
            (err, data) => {
                if(err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }

    static async fetch(){
 
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM card;', (err, content) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(JSON.stringify(content)))
                }
            })
        })

    }
}

module.exports = Card