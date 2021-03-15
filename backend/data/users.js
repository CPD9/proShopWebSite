import bcyrpt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcyrpt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Salam Ahmed',
        email: 'salam@gmail.com',
        password: bcyrpt.hashSync('123456', 10),
    },
    {
        name: 'Chuks King',
        email: 'chuks@example.com',
        password: bcyrpt.hashSync('123456', 10),
    },
]

export default users