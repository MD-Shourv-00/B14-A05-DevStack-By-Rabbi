import { Suspense } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Technologies from "./components/technologies/Technologies";
import type { techDataType } from "./type/type";
import { ToastContainer } from "react-toastify";

const techDatafetch = async (): Promise<techDataType[]> => {
  const res = await fetch("/data.json");
  const data = res.json();

  return data;
};

const techDataPromise = techDatafetch();

function App() {
  // console.log(techDataPromise)

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div> loading... </div>}>
        <Technologies techDataPromise={techDataPromise} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
