import style from "../comp/Footer.module.css";
import Facebook from "../images/FB.png";
import Instagram from "../images/INSTA.png";
import X from "../images/TWI.png";
import YT from "../images/YOUTUBE.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer1}>
        <div className={style.footerServices}>
          <h5>YARA</h5>
          <p>
            YARA is a customizable open-source <br />
            eCommerce platform built on wordPress. Get <br />
            started quickly and make your way.
          </p>
        </div>

        <div className={style.footerDestination}>
          <h5>USEFUL LINKS</h5>
          <a href="">About </a>
          <a href="">Services</a>
          <a href="">Testimonial</a>
        </div>
      </div>
      <div className={style.footer2}>
        <h5>SOCIAL LINKS</h5>
        <div className={style.footerImgs}>
          <img src={Facebook} alt="" className={style.footerImg} />
          <img src={X} alt="" className={style.footerImg} />
          <img src={Instagram} alt="" className={style.footerImg} />
          <img src={YT} alt="" className={style.footerImg} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
