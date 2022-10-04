import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  token: string | null;
  children: ReactNode;
}

export const ProtectedRoute: FC<IProtectedRouteProps> = ({
  token,
  children,
}: IProtectedRouteProps) => {
  if (token === null) {
    return <Navigate to="/script" replace />;
  }

  return <>{children}</>;
};
