import BodyLayout from "./components/Layouts/BodyLayout";
import { Routes, Route } from "react-router-dom";
import { Requests } from "./components/Requests/Requests";
import { Login } from "./components/Login/Login";
import PrivateRoutes from "./components/AuthRoutes/AuthRoute";
import { useState } from "react";
import { Settings } from "./components/Settings/Settings";
import { UserList } from "./components/UserList/UserList";

function App() {
  const [token, setToken] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login auth={token} setauth={setToken} />} />

        <Route element={<PrivateRoutes setAuth={setToken} auth={token} />}>
          <Route
            element={<BodyLayout setAuth={setToken} auth={token} />}
            path="/dashboard"
          />
          <Route
            path="/requests"
            element={<Requests auth={token} setAuth={setToken} />}
          />
          <Route
            path="/userList"
            element={<UserList auth={token} setAuth={setToken} />}
          />
          <Route
            path="/settings"
            element={<Settings auth={token} setAuth={setToken} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
