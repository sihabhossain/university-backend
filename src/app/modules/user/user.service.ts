import config from '../../config';
import { TStudent } from '../student/student.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  if (!password) {
    password = config.default_pass as string;
  }

  const result = await User.create(studentData);

  return result;
};

export const UserServices = {
  createStudentIntoDB,
};
