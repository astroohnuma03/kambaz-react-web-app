import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const findEnrollments = async () => {
  const { data } = await axios.get(`${ENROLLMENTS_API}`);
  return data;
}
export const createEnrollment = async (userId: string, courseId: string) => {
  const response = await axios.post(`${ENROLLMENTS_API}`, { userId, courseId });
  return response.data;
}
export const deleteEnrollment = async (enrollmentId: string) => {
  const response = await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
  return response.data;
};