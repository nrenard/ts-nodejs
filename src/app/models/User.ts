import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email?: string
  firstName?: string
  lastName?: string
  fullName(): string
};

const UserShema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: String
}, { timestamps: true })

UserShema.methods.fullName = function (): string {
  return `${this.firstName} ${this.lastName}`
}

export default model<UserInterface>('User', UserShema)
