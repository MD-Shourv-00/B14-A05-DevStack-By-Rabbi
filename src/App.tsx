import Footer from "./components/Footer";
import Nav from "./components/Nav";
import type { techDataType } from "./type/type";


const techDatafetch = async (): Promise<techDataType[]> => {
  const res = await fetch("/data.json")
  const data = res.json()

  return data;
}


function App() {
  const techDataPromise = techDatafetch();
  console.log(techDataPromise)

  return (
    <>
      <Nav />
      <Footer />
    </>
  )
}

export default App;
