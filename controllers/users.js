import { v4 as uuid } from 'uuid';

let users = [];
export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuid()});
    return res.status(200).json({ message: "success", data: users})
}

export const getUsers = (req, res) => {
    if(users)
        return res.status(200).json({ message: "success", data: users})
    return res.status(404).json({ message: "No Data", data: users})

}

export const getUser = (req, res) => {
    const {  id } = req.params;
    const user = users.find((user) => user.id === id);
    if(user)
        return res.status(200).json({ message: "success", data: user})
    return res.status(404).json({ message: "success", data: user})
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    if(user){
         if(firstName) user.firstName = firstName;
         if(lastName) user.lastName = lastName;
         if(age) user.age = age;
         return res.status(200).json({ message: "success", data: user})
    }
    return res.status(404).json({ message: "success", data: []})
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id)
    return res.status(200).json({ message: "success", data: users})
}
