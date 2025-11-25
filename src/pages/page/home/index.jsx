import { Navigate } from "react-router-dom";
import { pagesPathName } from "@/router";

function Home() {
  return <Navigate to={pagesPathName.dashboard.path} />;
}

export default Home;
