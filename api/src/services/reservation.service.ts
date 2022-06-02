import { Request, Response, NextFunction } from 'express'
import { Reservation, IReservation } from '../models/reservation.model'
import { omit } from "lodash"
import { FilterQuery, FlattenMaps, Model } from "mongoose"

// export async function createReservation(input: typeof Reservation) {
//   try {
//     const reservation = await Reservation.create(input)
//     // return omit(reservation.toJSON(), "password");
//     return reservation.toJSON()
//   } catch (e: any) {
//     throw new Error(e);
//   }
// }

// export async function getReservation ({
//     _id,
//     query
// }:{
//     _id: string,
//     query: FilterQuery<IReservation>
// }): Promise<FlattenMaps<Model<IReservation, {}, {}, {}>>> {
//   const Reservation = await Reservation.findOne({ _id })

// //   if (!reservation) {
// //     return false
// //   }

//   return reservation.toJSON()
// }

// export async function findReservation(query: FilterQuery<typeof Reservation>) {
//   return Reservation.findOne(query).lean()
// }

export const createReservation = async (req: Request, res: Response, next: NextFunction) => {
  
  const userId = res.locals.user._id

  const reservation = req.body

  try {
    // const savedReservation = await newReservation.save()
    const savedReservation = await Reservation.create({ ...reservation, user: userId });
    res.status(200).json(savedReservation)
  } catch (err) {
    next(err)
  }
}

export const getReservation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const reservation = await Reservation.findById(req.params.id)
    res.status(200).json(reservation)
  } catch (err) {
    next(err)
  }
}

export const getReservations = async (req: Request, res: Response, next: NextFunction) => {
  
  try {
  
    const reservations = await Reservation.find()

    res.status(200).json(reservations)

  } catch (err) {
    next(err)
  }
}

export const updateReservation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedReservation)
  } catch (err) {
    next(err)
  }
}

export const deleteReservation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id)
    res.status(200).json("Reservation has been deleted.")
  } catch (err) {
    next(err)
  }
}

