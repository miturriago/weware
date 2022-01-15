import "./style.css";
import client1 from "../../assets/images/client1.svg";
import client2 from "../../assets/images/client2.svg";
import client3 from "../../assets/images/client3.svg";
import client4 from "../../assets/images/client4.svg";
import client5 from "../../assets/images/client5.svg";
import client6 from "../../assets/images/client6.svg";
function Clients() {
  return (
    <div className="clientMain  pb-8 flex flex-col  justify-center">
      <p className="text-darkBlue mx-auto title sm:text-center">
        Distributed teams brought together
      </p>
      <div className="mx-auto list flex flex-wrap">
        <img  src={client1} alt="" className="object-center sm:w-[126px]"></img>
        <img src={client2} alt="" className="object-center sm:w-[126px] "></img>
        <img src={client3} alt="" className="object-center sm:w-[126px]"></img>
        <img src={client4} alt="" className="object-center sm:w-[126px]"></img>
        <img src={client5} alt="" className="object-center sm:w-[126px]"></img>
        <img src={client6} alt="" className="object-center sm:w-[126px]"></img>
      </div>
      <p className="mx-auto text-darkBlue title mb-8">
        Engage your remote team
      </p>
      <p className="text-darkBlue mx-auto paragraph md:mb-5">
        Remote work is challenging when knowledge is spread across slack,
        emails, documents and spreadsheets. It is especially challenging when
        trying to find information and engage with your remote team.
      </p>
      <p className="text-darkBlue mx-auto paragraph">
        <strong>Weware solves all that.</strong> Create your team directory with
        profiles, share company announcements, create knowledge wiki where you
        share important information and processes. Best of all, weware is also a
        place to engage and recognize effort.
      </p>
    </div>
  );
}

export default Clients;
