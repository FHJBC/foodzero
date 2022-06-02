import bcrypt from "bcryptjs"
import config from "config"
import { Request, Response, NextFunction } from "express"
import { User } from "../models/user.model"
import { createUser } from "../services/user.service"
import { createError } from "../utils/error"
import { signJwt } from "../utils/jwt.utils"

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const salt = bcrypt.genSaltSync(config.get<number>("saltWorkFactor"))
    // const hash = bcrypt.hashSync(req.body.password, salt)

    // const newUser = new User({
    //   ...req.body,
    //   password: hash
    // })

    // await newUser.save()
    // res.status(200).send("User has been created.")

    await createUser(req.body)

  } catch (err) {
    next(err)
  }
}


export const login = async (req: Request, res: Response, next: NextFunction) => {
  
  try {

    const user = await User.findOne({ email: req.body.email })

    if (!user) return next(createError(404, "User not found!"))

    let isPasswordCorrect: boolean = false

    if (user.password) {
      // isPasswordCorrect = await bcrypt.compare(
      //   req.body.password,
      //   user.password
      // )
      isPasswordCorrect = await user.comparePassword(req.body.password)
    }

    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or email!"))

    const accessToken = signJwt(
    { id: user._id, isAdmin: user.isAdmin },
    "accessTokenPrivateKey",
    { expiresIn: config.get("accessTokenTtl") } // 15 minutes
  )

    const { password, isAdmin, ...otherDetails } = user._doc

    res
      .cookie("access_token", accessToken, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err)
  }
};
