//import AppRoutes from "./utils/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilEnv, RecoilRoot } from "recoil";
import { lazy, Suspense } from "react";
import Preloder from "./components/Preloder";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

//const InitialRouter = lazy(() => import("./utils/routes"));
const InitialRouter = lazy(() => {
  return Promise.all([
    import("./utils/routes"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

function App() {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback={<Preloder />}>
          <ToastContainer />
          <InitialRouter />
        </Suspense>
      </RecoilRoot>
    </>
  );
}

export default App;
