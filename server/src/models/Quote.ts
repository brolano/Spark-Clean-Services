import mongoose, { Schema, Document } from 'mongoose';

export interface IQuote extends Document {
  name: string;
  email: string;
  details: string;
}

const QuoteSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  details: { type: String, required: true },
});

export default mongoose.model<IQuote>('Quote', QuoteSchema);