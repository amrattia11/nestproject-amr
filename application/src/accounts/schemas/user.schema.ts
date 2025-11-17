import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ select: false })
  password?: string;

  @Prop({ default: false })
  emailConfirmed: boolean;

  @Prop()
  googleId?: string;

  @Prop()
  passwordResetToken?: string;

  @Prop()
  emailConfirmToken?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

