const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const User = require("../models/userModel");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", async (req, res) => {
  try {
    const user = req.body;
    console.log(user);

    const userExists = await User.findOne({
      email: user.email,
    });

    if (userExists) {
      return res.send({
        success: false,
        message: "User with this email already exists in DB.",
      });
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password, salt)

    const newUser = new User({...user, password: hashedPassword});
    newUser.save();

    const token = jwt.sign({userId: newUser._id}, process.env.jwt_encryption_key, {expiresIn: '1d'})
    console.log(token);

    res.send({
      success: true,
      message: "User Successfully registered.",
      data: token
    });
  } catch (error) {
    console.log(error);
    res.send({
        success: false,
        mesaage: "Internal Server Error"
    })
  }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })

        if(!user){
            return res.send({
                success: false,
                message: "User does not exist."
            })
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user.password)

        if(!isValidPassword){
            return res.send({
                success: false,
                message: "Incorect Password."
            })
        }

        const token = jwt.sign({userId: user._id}, process.env.jwt_encryption_key, {expiresIn: '1d'})
        console.log(token);
        
        return res.send({
            success: true,
            message: 'User is logged in.',
            data: token
        })
    } catch (error) {
        console.log(error)
        res.send({
            success: false,
            message: 'Internal Server Error'
        })
    }
})

// Protected route
router.get('/currentUser', authMiddleware, async (req, res) => {
  try {
    const userId = req.body.userId
    const user = await User.findOne({_id: userId})
    console.log("current user:", user);
    if(!user){
      return res.send({
        success: false,
        message: "User not found."
      })
    }

    return res.send({
      success: true,
      message: "User fetched successfully",
      data: user
    })
  } catch (error) {
    res.send({
      success: false,
      message: "Something went wrong.",
      error: error
    })
  }
})

exports.router = router;