import { model, Schema, Model, Document } from 'mongoose'
import { UserDocument } from './user.model'


export interface IReservation extends Document {
    user: UserDocument["_id"];
    date: string;
    time: string;
    guestsNumber: string;
}

export interface ReservationDocument extends IReservation, Document {
  createdAt: Date;
  updatedAt: Date;
}

const ReservationSchema: Schema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User" },
        date: {type: String, required: true},
        time: {type: String, required: true},
        guestsNumber: {type: String, required: true}
    },
    {
        timestamps: true,
    }
)

export const Reservation: Model<IReservation> = model('Reservation', ReservationSchema)

