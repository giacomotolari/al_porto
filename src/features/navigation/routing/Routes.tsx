import { Route } from "react-router";
import { routes } from "./all-routes";

export default function Routes() {
  return (
    <>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </>
  );
}
