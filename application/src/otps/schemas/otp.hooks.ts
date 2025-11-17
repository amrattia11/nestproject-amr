import { OtpSchema } from './otp.schema';
import { EncryptionUtils } from '../../utils/encryption.util';

OtpSchema.pre('save', async function (next) {
  const doc: any = this;
  if (doc.isModified('code') && doc.code) {
    doc.code = await EncryptionUtils.hash(doc.code);
  }
  next();
});

export default OtpSchema;
