import { pagesPathName } from "@/router";
import { Navigate } from "react-router-dom";

function Home() {
  return <Navigate to={pagesPathName.realTimeSpinningReserve.path} />;
}

export default Home;
