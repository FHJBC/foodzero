import { IUser } from './../models/User'
import { Request, Response, NextFunction } from 'express'
import jwt from "jsonwebtoken"
import { createError } from '../utils/error'
import config from 'config'


export const verifyToken = (req: Request, res: Response, next: NextFunction, callback: Function) => {

  const token = req.cookies.access_token
  const keyName = req.cookies.key_name

  if (!token) {
    return next(createError(401, "You are not authenticated!"))
  }

  const publicKey = Buffer.from(config.get<string>(keyName), "base64").toString(
    "ascii"
  )

  jwt.verify(token, publicKey, (err: any, decoded: any) => {
    if (err) return next(createError(403, "Token is not valid!"))
    
    // req.user = user

    res.locals.user = decoded

    next()
  })
}

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, next, () => {
    // if (req.user.id === req.params.id || req.user.isAdmin) {
    //   next();
    // } else {
    //   return next(createError(403, "You are not authorized!"));
    // }
    const user = res.locals.user

    if (user.id === req.params.id || user.isAdmin) {
      next()
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req: Request, res: Response, next: NextFunction) => {
  verifyToken(req, res, next, () => {
    const user = res.locals.user

    if (user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  })
}
