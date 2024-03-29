const bcrypt = require('bcryptjs')

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Yan Samreach',
        email: 'samreachyan@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Sabay JM',
        email: 'sabayjm@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

module.exports = users