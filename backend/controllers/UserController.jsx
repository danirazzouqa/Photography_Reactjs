const User = require('../models/User.jsx')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
 return  jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;

        try {
        const user = await User.login(email, password)
        const token = createToken(user._id)

        res.status(200).json({ email, token, username: user.username ,role : user.role})
        } catch (error) {
        res.status(400).json({ error: error.message })
        }
    }



    // signup user
    const signupUser = async (req, res) => {
        const {username, email, password} = req.body;
    
        try {
            const user = await User.signup(username, email, password);
            const token = createToken(user._id);
    
            res.status(200).json({ email, token, username: user.username });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    module.exports = {
        loginUser, signupUser
    }