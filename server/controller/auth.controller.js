const User = require("../Module/userModel.js")
const bcrypt = require("bcrypt")
const { errorHandler } = require("../utils/error.js")
const jwt = require("jsonwebtoken")


const signup = async (req, res, next) => {
    const { firstName, lastName, phone, email, password } = req.body;
    if (!firstName
        || !lastName
        || !email
        || !password
        || !phone) {
        return next(errorHandler(400, "All Field are required"))
    }

    const hashPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashPassword,
        phone,
    })
    try {
        await newUser.save()
        res.json({ success: true, message: "Sign Up Successful" });
    } catch (error) {
        next(error)
    }
}


const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const loginData = await User.findOne({ email });
        if (!loginData) {
            return next(errorHandler(400, 'user not found'))
        }
        const matchpassword = bcrypt.compareSync(
            password,
            loginData.password
        );
        if (matchpassword) {
            const token = jwt.sign({ user: loginData }, process.env.JWT_SECRET, {
                expiresIn: "1w",
            });
            return res.json({
                loginData,
                token,
                success: true,
            });
        } else {
            res.status(401).json({
                message: " user not found",
            });
        }
    } catch (err) {
        console.error(err);
    }
};

module.exports = { signup, signin };