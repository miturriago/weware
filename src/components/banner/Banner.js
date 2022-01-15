import "./style.css";
import image from "../../assets/images/banner.svg"
function Banner() {
  return (
    <div className="bannerMain mb-8 flex mx-auto flex-col justify-center">
      <img
        src={image}
        alt=""
        className="object-center mx-auto bannerImage"
      ></img>
      <p className=" md:w-[682px] text-center mx-auto mb-8 text-darkBlue text">
        <strong>Weware means:</strong> Easy to find knowledge, content and
        proceses.
        Announcements, team engagement, recognition and profiles. 🙌
      </p>
      <div className="form mx-auto flex space-between ">
        <input
          type="text"
          className=" input focus:shadow border focus:border-green block w-full pl-4 bg-transparent sm:text-sm border-darkBlue bannerInput text-darkBlue rounded-md"
          placeholder="Your email address"
        ></input>

        <a
          href="#"
          className="button ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border  rounded-md shadow-sm text-base font-medium bg-green border-green text-white   hover:shadow"
        >
          Get early access
        </a>
      </div>
    </div>
  );
}

export default Banner;
