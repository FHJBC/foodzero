import { model, Schema, Model, Document } from 'mongoose'
import { UserDocument } from './user.model'

export interface IReservation extends Document {
    user: UserDocument["_id"];
    date: Date;
    time: string;
    guestsNumber: string;
}

const ReservationSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    date: {type: Date, required: true},
    time: {type: String, required: true},
    guestsNumber: {type: String, required: true}
})

export const Reservation: Model<IReservation> = model('Reservation', ReservationSchema)

