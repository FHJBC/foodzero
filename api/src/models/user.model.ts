import { IReservation } from './reservation.model'
import bcrypt from 'bcrypt'
import config from 'config'

import { model, Schema, Model, Document } from 'mongoose'


export interface IUser {
    firstName: string;
    lastName: string;  
    email: string;
    phone: string;
    password: string;
    isAdmin: boolean;
    reservations?: IReservation[];
}

export interface DocumentResult<T> extends Document {
    _doc: T;
}

export interface UserDocument extends IUser, DocumentResult<IUser>  {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(inputPassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String },
    reservations: [String],
    isAdmin: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
)

UserSchema.pre("save", async function (next) {
  let user = this as UserDocument

  if (!user.isModified("password")) {
    return next()
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"))

  if (user.password) {
    const hash = bcrypt.hashSync(user.password, salt)
    user.password = hash
  }

  return next()
})


UserSchema.methods.comparePassword = async function (
  inputPassword: string,
  next: any
): Promise<boolean> {

  const user = this as UserDocument

  if (user.password) {

    if (!user.isModified("password")) {
      return next()
    }

    // const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"))

    // const hash = bcrypt.hashSync(user.password, salt)

    // user.password = hash

    return bcrypt.compare(inputPassword, user.password).catch((e) => false)
  }

  return false

}

export const User: Model<UserDocument> = model<UserDocument>('User', UserSchema)

