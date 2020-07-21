import { v4 as uuidv4 } from 'uuid'

// Users
let users = []

// getUser
export const getUser = (req, res) => {
    res.send(users)
}

// CreateUser
export const createUser = (req, res) => {
    const user = req.body

    // Push user with id
    users.push({
        id: uuidv4(),
        ...user
    })

    // send a response to the page
    res.send("user "+ user.firstName +" has been added to the database")
}

// Get User with Id
export const getUserWithId = (req, res) => {
    const {id} = req.params

    const fountUser = users.find((user) => user.id === id)

    res.send("The user is: "+fountUser.firstName)
} 

// Delete User
export const deleteUser = (req, res) => {
    const {id} = req.params

    users = users.filter(user => user.id !== id)

    res.send("The user with id "+ id +" was deleted")
}

// UpdateUser
export const updateUser = (req, res) => {
    const {id} = req.params
    const { firstName, lastName, age } = req.body
    const userToUpdate = users.find(user => user.id === id)

    if(firstName) userToUpdate.firstName = firstName
    if(lastName) userToUpdate.lastName = lastName
    if(age) userToUpdate.age = age

    res.send("user with id "+id+" updated!")
}