import "./style.css";
import image from "../../assets/images/description.svg"
import resImage from "../../assets/images/descriptionRes.svg"
import description1 from "../../assets/images/description1.svg"
function Description() {
  return (
    <div className="bannerMain mb-8 flex flex-col  justify-center">
      <img
        src={image}
        alt=""
        className=" descriptionImage object-center mx-auto imageShadow"
        width="60%"
      ></img>
      <div className="resImage">
      <img
        src={resImage}
        alt=""
        className=" object-center mx-auto imageShadow"
        width="90%"
      ></img>
      <img
        src={description1}
        alt=""
        className="mb-5 object-center mx-auto "
        width="80%"
      ></img>
      <img
        src={description1}
        alt=""
        className="mb-5 object-center  mx-auto"
        width="80%"
      ></img>
      <img
        src={description1}
        alt=""
        className=" object-center mx-auto "
        width="80%"
      ></img>
      </div>
      
    </div>
  );
}

export default Description;
