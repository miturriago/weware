import "./style.css";
import image from "../../assets/images/description.svg"
function Description() {
  return (
    <div className="bannerMain mb-8 flex flex-col  justify-center">
      <img
        src={image}
        alt=""
        className="object-center mx-auto imageShadow"
        width="60%"
      ></img>
      
    </div>
  );
}

export default Description;
