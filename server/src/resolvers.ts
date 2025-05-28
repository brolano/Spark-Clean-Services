import QuoteModel, { IQuote } from './models/Quote';
import AppointmentModel, { IAppointment } from './models/Appointment';

export const resolvers = {
  Query: {
    quotes: async () => await QuoteModel.find(),
    appointments: async () => await AppointmentModel.find(),
  },
  Mutation: {
    createQuote: async (_: any, { name, email, details }: Omit<IQuote, 'id'>) => {
      const quote = new QuoteModel({ name, email, details });
      await quote.save();
      return quote;
    },
    createAppointment: async (_: any, { name, address, date }: Omit<IAppointment, 'id'>) => {
      const appointment = new AppointmentModel({ name, address, date });
      await appointment.save();
      return appointment;
    },
  },
};
