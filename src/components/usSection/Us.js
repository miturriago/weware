import "./style.css";
import usSection1 from "../../assets/images/usSection1.svg";
import usSection2 from "../../assets/images/usSection2.svg";
function Us() {
  return (
    <div className="usMain">
      <div class=" usList grid sm:grid-cols-1 md:grid-cols-2 gap-2 mx-auto">
        <div className=" h-[451px] ">
          <img
            src={usSection2}
            alt=""
            
            className="object-center image mx-auto "
            width="100%"
          ></img>
        </div>

        <div className=" h-[451px] flex justify-items-end items-end containerTextRigth sm:mx-auto ">
          <div className="my-auto  textBlock">
            <p className="usTitle text-darkBlue">Announcements</p>
            <p className="usText text-darkBlue">
              Your entire team in one place, with Engage your team with company
              wide announcements that entice engagement. The team homepage
              reveals everything going on with your team.
            </p>
          </div>
        </div>
      </div>

      <div class=" usList md:gap1 grid sm:grid-cols-1 md:grid-cols-2 grid flex sm:flex-col-reverse   gap-2 mx-auto">
        <div className=" h-[451px]   flex justify-items-end items-end containerTextLeft sm:mx-auto  ">
          <div className="my-auto  textBlock">
            <p className="usTitle text-darkBlue">Wiki</p>
            <p className="usText text-darkBlue">
              Create and share knowledge with your team. Whether it be company
              processes, presentations, content your team has created, anything!
              Find anything directly from Slack too.
            </p>
          </div>
        </div>

        <div className="h-[451px]">
          <img
            src={usSection2}
            alt=""
            className="object-center mx-auto image "
            width="100%"
          ></img>
        </div>
      </div>

      <div class=" usList grid sm:grid-cols-1 md:grid-cols-2  grid  gap-2 mx-auto">
        <div className="h-[451px] sm:w-[100%]">
          <img
            src={usSection1}
            alt=""
            className="object-center image mx-auto "
            width="100%"
          ></img>
        </div>

        <div className=" h-[451px] flex justify-items-end items-end containerTextRigth sm:mx-auto ">
          <div className="my-auto  textBlock">
            <p className="usTitle text-darkBlue">Team directory</p>
            <p className="usText text-darkBlue">
              Your entire team in one place, with profile information, history,
              notes and more. You no longer need a clunky separate HR app.
            </p>
          </div>
        </div>
      </div>

      <div class=" usList grid sm:grid-cols-1 md:grid-cols-2 grid  gap-2 mx-auto">
        <div className=" h-[451px]flex justify-items-end  containerTextLeft sm:mx-auto">
          <div className="my-auto  textBlock">
            <p className="usTitle text-darkBlue">Recognition</p>
            <p className="usText text-darkBlue">
              Anyone can thank, recognize co workers for their effort. The
              activity feeds reveal all the great things happening on your team.
            </p>
          </div>
        </div>

        <div className=" h-[451px]">
          <img
            src={usSection2}
            alt=""
            className="object-center mx-auto image "
            width="100%"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Us;
