import { object, date, string, TypeOf } from "zod"

/**
 * @openapi
 * components:
 *   schema:
 *     Reservation:
 *       type: object
 *       required:
 *        - date
 *        - time
 *        - guestsNumber
 *       properties:
 *         date:
 *           type: date
 *         time:
 *           type: string
 *         guestsNumber:
 *           type: string
 */

const payload = {
  body: object({
    date: date({
      required_error: "Date is required",
    }),
    time: string({
      required_error: "Time is required",
    }),
    guestsNumber: string({
      required_error: "The number of guests is required",
    }),
  }),
};

const params = {
  params: object({
    reservationId: string({
      required_error: "reservationId is required",
    }),
  }),
};

export const createReservationSchema = object({
  ...payload,
});

export const updateReservationSchema = object({
  ...payload,
  ...params,
});

export const deleteReservationSchema = object({
  ...params,
});

export const getReservationSchema = object({
  ...params,
});

export type CreateReservationInput = TypeOf<typeof createReservationSchema>;
export type UpdateReservationInput = TypeOf<typeof updateReservationSchema>;
export type ReadReservationInput = TypeOf<typeof getReservationSchema>;
export type DeleteReservationInput = TypeOf<typeof deleteReservationSchema>;
