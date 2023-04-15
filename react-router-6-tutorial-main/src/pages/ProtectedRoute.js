import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
	if (!user) {
		return <Navigate to={"/"}></Navigate>;
	}
	return children;
};

export default ProtectedRoute;
