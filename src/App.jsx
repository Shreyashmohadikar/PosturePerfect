import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import ExercisePage from "./pages/ExercisePage";
const Home = lazy(() => import("./pages/Home"));
const ExercisePage = lazy(() => import("./pages/ExercisePage"));

import Background from "./components/Background/Background";
import Header from "./components/Header";

import DetectionContextProvider from "./contexts/DetectionContext";
import CurrentPoseContextProvider from "./contexts/CurrentPoseContext";

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Header />
      <DetectionContextProvider>
        <CurrentPoseContextProvider>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:exercise" element={<ExercisePage />} />
            </Routes>
          </Suspense>
        </CurrentPoseContextProvider>
      </DetectionContextProvider>
    </BrowserRouter>
  );
}

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen grid place-items-center">
      <h3 className="font-bold text-2xl text-white">LOADING ...</h3>
    </div>
  );
};

export default App;
