// import React from "react";
// import { Navigate, Route } from "react-router-dom";
// import { Login } from "../Login/Login";

// interface Props {
//   Component: React.FC<RouteProps>;
//   path: string;
//   exact?: boolean;
// }

// enum AuthRoutes {
//   dashboard = "/dashboard",
//   requests = "requests",
// }

// enum NonAuthRoutes {
//   login = "/",
// }

// const AuthRoute = ({Component, path, exact= false}: Props): JSX.Element => {
//     const isAuthed = !!localStorage.getItem(ACCESS_TOKEN);
//     const message = 'Please login to view this page'
//     return (
//         <Route exact={exact} path={path} render={(props: RouteProps) => isAuthed? (
//             <Component {...props} />
//         ) : (
//             <Route
//         path="*"
//         render={(props) => <Login {...props}/>}
//     />
//         )
//         )}
//     )
// }

// import { useSelector } from "react-redux";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children }: { children: JSX.Element }) => {
//   let location = useLocation();

//   type state = {
//     auth: any;
//   };
//   const { isAuthenticated, loading } = useSelector(
//     (state: state) => state.auth
//   );

//   if (loading) {
//     return <p>Checking authenticaton..</p>;
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/" state={{ from: location }} />;
//   }

//   return children;
// };

// export default PrivateRoute;

import { Outlet, Navigate } from "react-router-dom";

type PrivateRouteProps = {
  auth: any;
  setAuth: any;
};

const PrivateRoutes = ({ auth, setAuth, ...rest }: PrivateRouteProps) => {
  console.log(auth);
  return auth ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
