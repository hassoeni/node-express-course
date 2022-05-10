const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const mockUserData = [{ name: 'Mark' }, { name: 'Jill' }]
app.get('/users', function (req, res) {
	res.json({
		success: true,
		message: 'Successfully got users!',
		users: mockUserData,
	})
})

app.get('/users/:id', function (req, res) {
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'Successfully got user!',
		user: req.params.id,
	})
})

app.post('/login', function(req, res){
    const username = req.body.username
    const password = req.body.password
    const mockUserName= "BillyTheKid"
    const mockPassword = "superSecret"

    if(username === mockUserName && password === mockPassword){
        res.json({
            success: true,
            message: 'Successfully logged in!',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match',
        })
    }
})



app.listen(8000, function () {
	console.log('Server is running on port 8000')
})
