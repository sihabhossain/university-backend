import { TStudent } from '../student/student.interface';
import { User } from './user.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  //   if (await Student.isUserExists(studentData.id)) {
  //     throw new Error('user already exists');
  //   }

  const result = await User.create(studentData);

  return result;
};

export const UserService = {
  createStudentIntoDB,
};
