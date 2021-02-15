const bcrypt = require('bcrypt')

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmailcom',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Yan Samreach',
        email: 'samreachyan@gmailcom',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Sabay JM',
        email: 'sabayjm@gmailcom',
        password: bcrypt.hashSync('123456', 10)
    },
]

module.exports = users
