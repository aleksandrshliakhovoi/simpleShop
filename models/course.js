const mysql = require('mysql')
const db = require('../config')
const { v4: uuidv4 } = require('uuid')

class Course {
    constructor(title, price, img){
        this.title = title;
        this.price = price;
        this.img = img;
        this.uuid = uuidv4()
    }

    static async update(course) {

        const courses = await Course.getAll()

        const idx =  courses.findIndex(c => c.uuid === courses.uuid)
        courses[idx] = course
        console.log('idx is', idx, 'course.uuid is', course.uuid, ' courses[idx] is',  courses[idx]);

        return new Promise((resolve, reject) => {
            db.query(`UPDATE courses SET title=?, price=?, img=? WHERE uuid=?;`,
            [course.title, course.price, course.img, course.uuid], 
            (err, result) => {
                if(err) {
                    reject (err)
                } else {
                    resolve()
                }
            })
        })
    }

    async save() {

        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO courses(title, price, img, uuid) VALUES(?,?,?,?);`,
            [this.title, this.price, this.img, this.uuid], 
            (err, result) => {
                if(err) {
                    reject (err)
                } else {
                    resolve()
                }
            })
        })
    } 

    static getAll() {   // 
        return  new Promise((resolve, reject ) => {
            db.query('SELECT * FROM courses', (err, content) => {
                if(err) {
                    reject(err) 
                } else {
                    resolve(JSON.parse(JSON.stringify(content)))
                }
            })
        })
        
    }

    static async getById(id) {
            const courses = await Course.getAll()
            return courses.find(c => c.uuid === id)
    }
}

module.exports = Course