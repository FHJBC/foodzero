import { Request, Response, NextFunction } from "express";
import {
  CreateReservationInput,
  UpdateReservationInput,
} from "../schema/reservation.schema"
import {
  createReservation,
  getReservation,
  getReservations,
  updateReservation,
  deleteReservation
} from "../services/reservation.service"

export async function createReservationHandler(
  req: Request<{}, {}, CreateReservationInput["body"]>,
  res: Response,
  next: NextFunction
) {
  // const reservation = await createReservation(req, res, next)
  // return res.send(reservation)
  await createReservation(req, res, next)
}

export async function getReservationHandler(
  req: Request<UpdateReservationInput["params"]>,
  res: Response,
  next: NextFunction
) {
  // const reservationId = req.params.reservationId;
  // const reservation = await getReservation({ reservationId });
  await getReservation(req, res, next)

  // if (!reservation) {
  //   return res.sendStatus(404);
  // }

  // return res.send(reservation);
}

export async function getReservationsHandler(
  req: Request<UpdateReservationInput["params"]>,
  res: Response,
  next: NextFunction
) {
  // const reservationId = req.params.reservationId;
  // const reservation = await getReservation({ reservationId });
  await getReservations(req, res, next)

  // if (!reservation) {
  //   return res.sendStatus(404);
  // }

  // return res.send(reservation);
}

export async function updateReservationHandler(
  req: Request<UpdateReservationInput["params"]>,
  res: Response,
  next: NextFunction
) {
  const userId = res.locals.user._id;

  // const reservationId = req.params.reservationId;
  const update = req.body;

  // const reservation = await getReservation({ reservationId });
  await getReservation(req, res, next);

  // if (!reservation) {
  //   return res.sendStatus(404);
  // }

  // if (String(reservation.user) !== userId) {
  //   return res.sendStatus(403);
  // }

  // const updatedReservation = await findAndUpdateReservation({ reservation }, update, {
  //   new: true,
  // });
  await updateReservation(req, res, next)

  // return res.send(updatedProduct);
}

export async function deleteReservationHandler(
  req: Request<UpdateReservationInput["params"]>,
  res: Response,
  next: NextFunction
) {
  const userId = res.locals.user._id;
  const reservationId = req.params.reservationId;

  // const reservation = await getReservation({ reservationId });

  // if (!reservation) {
  //   return res.sendStatus(404);
  // }

  // if (String(reservation.user) !== userId) {
  //   return res.sendStatus(403);
  // }

  // await deleteReservation({ reservationId });
  await deleteReservation(req, res, next)

  // return res.sendStatus(200);
}
