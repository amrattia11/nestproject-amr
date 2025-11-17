import { UserSchema } from './user.schema';
import { EncryptionUtils } from '../../utils/encryption.util';

UserSchema.pre('save', async function (next) {
  const doc: any = this;
  if (doc.isModified('password') && doc.password) {
    doc.password = await EncryptionUtils.hash(doc.password);
  }
  next();
});

export default UserSchema;

