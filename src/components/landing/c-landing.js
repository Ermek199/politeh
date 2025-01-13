import {  Div,Image } from "atomize";
import FirstImage from "../../assets/image-svg/first-image.svg";
import SecondImage from "../../assets/image-svg/second-image.svg";
import ThirdImage from "../../assets/image-svg/third-image.svg";

const ThirdStep = () => {
  return (
    <Div pos="relative" w="1440px" h="350px"  bg="rgba(4, 11, 21, 1)" p='74px'>
        <Div pos="relative" d="flex" justify="center" align="center" style={{ gap: "1rem" }}>
          <Image w="390px" h="182px" src={FirstImage} alt="first-image" />
          <Image w="390px" h="182px" src={SecondImage} alt="second-image" />
          <Image w="390px" h="182px" src={ThirdImage} alt="third-image" />
        </Div>
      
    </Div>
  );
};

export default ThirdStep;