const express = require('express')
const app = express()

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

app.listen(8000, function () {
	console.log('Server is running on port 8000')
})
