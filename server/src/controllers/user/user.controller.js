import User from "../../models/user.js";

const registerUser = async (req, res) => {
    const {
        body: { id, password }
    } = req;

    new User({ id, password }).save((err, result) => {
        if(err) {
            res.status(500).json({
                success: false,
                message: 'DB_ERROR'
            });
        }

        console.log(`registerUser success:${result}`);
    });
}
   

export default {
    registerUser
}