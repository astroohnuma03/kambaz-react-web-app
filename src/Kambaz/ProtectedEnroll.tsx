import { useSelector } from "react-redux";
export default function ProtectedEnroll({ children, enrollment }: { children: any, enrollment: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const userEnrolled = enrollments.some((e: any) => e.user === currentUser._id && e.course === enrollment?.course);

  if (!userEnrolled) {
    return null;
  }

  return children;
}