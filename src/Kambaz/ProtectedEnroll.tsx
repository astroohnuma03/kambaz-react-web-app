export default function ProtectedEnroll({ children, enrolling }: { children: any, enrolling: boolean }) {
  if (!enrolling) {
    return children;
  }
}