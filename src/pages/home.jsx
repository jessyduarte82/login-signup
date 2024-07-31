import {Footer} from "../components/footer";
import { Header } from "../components/header";
import Imagem1 from "../components/boas-vindas-a-pagina.jpg";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <img src={Imagem1} alt="" className="w-full bg-cover"/>
      </main>
      <Footer/>
    </>
  );
};
export default Home;