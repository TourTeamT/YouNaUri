import Login from "pages/Auth/Login";
import TopNavigation from "pages/TopNavigation";
import { Outlet } from "react-router-dom";
export default function MainPage(): JSX.Element {

  return (
    <div>
      <TopNavigation />
      <Outlet />
      <Login />
    </div>
  );
}
