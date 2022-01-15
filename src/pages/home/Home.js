import Banner from "../../components/banner/Banner";
import Clients from "../../components/clients/Clients";
import Description from "../../components/descriptionSection/Description";
import Header from "../../components/header/Header";
import Us from "../../components/usSection/Us";

function Home() {
  return (
    <div className="main ">
      <Header></Header>
      <Banner></Banner>
      <Description></Description>
      <Clients></Clients>
      <Us></Us>
    </div>
  );
}

export default Home;
