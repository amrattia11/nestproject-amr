import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OtpDocument = HydratedDocument<Otp>;

@Schema({ timestamps: true })
export class Otp {
  @Prop({ required: true, index: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true, select: false })
  code: string; // hashed

  @Prop({ required: true, default: () => new Date(Date.now() + 1000 * 60 * 10) }) // 10 min
  expiresAt: Date;

  @Prop({ default: false })
  used: boolean;
}

export const OtpSchema = SchemaFactory.createForClass(Otp);
