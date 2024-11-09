import Image from "next/image";
import portfolio from "../app/public/Images/portfolio.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SocialIcon from "./social";
export default function Screen() {
  return (
<>
<div id="Screen" className="screen-container">
      <div className="text-section">
        <h3 className="greeting">
          Hii, I am
        </h3>
        <h1 className="name">
          Huzaifa Abdulrab
        </h1>
        <p className="role">
          Frontend Developer
        </p>
        <p className="intro-text">
          To apply my expertise in HTML, CSS, JavaScript, and <br />
          TypeScript to create dynamic, responsive, and <br /> user-friendly
          web applications.
        </p>
        <div className="buttons">
          <Button
            variant={"outline"}
            className="download-cv-btn"
          >
            <a href="/Cv.png" target="_blank">
              Download CV
            </a>
          </Button>
          <Button className="contact-btn">
            <Link href="#Contact">Contact me</Link>
          </Button>
        </div>
      </div>

      <div className="profile-image-container lg:ml-[32rem] md:ml-[23rem]">
        <Image
          src={portfolio}
          alt="Huzaifa Abdulrab image"
          width={350}
          height={400}
          className="profile-image "
        />
      </div>
    </div>
    
<SocialIcon/>
   </>
  );
}
