import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  name: string;
  address: string;
  date: string;
}

const AppointmentSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: String, required: true },
});

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);