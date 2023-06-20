const express = require('express')
const studentsData = require('./data')

const app = express()
const PORT = 8080

app.get('/api/health', (req, res)=>{
    res.send('Server is healthy!!!')
})

app.get('/api/allStudents', (req, res)=>{
    res.send(studentsData)
})

app.get('/api/allStudents/:id', (req, res)=>{
    // console.log(req.params.id, '!!!!')

    const singleStudent = studentsData.find((student)=>{
        // console.log(student,'!!!')

        if(student.id === Number(req.params.id)){
            return true
        }
    })
    res.send(singleStudent);
})

app.get('/api/query', (req, res)=>{
    console.log(req.query, 'i am query')
    res.send(`returning the query: ${req.query.id}`)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})