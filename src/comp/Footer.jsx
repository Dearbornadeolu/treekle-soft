import style from "../comp/Footer.module.css";
import Facebook from "../images/facebook.png";
import Instagram from "../images/instagram.png";
import X from "../images/X.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer1}>
        <div className={style.footerServices}>
          <h5>Services</h5>
          <a href="">Food</a>
          <a href="">VIP Plane</a>
          <a href="">Taxi Services</a>
          <a href="">VIP Lodging</a>
        </div>
        <div className={style.footerAcct}>
          <h5>Account</h5>
          <a href="">My Account</a>
          <a href="">Our Partners</a>
        </div>
        <div className={style.footerDestination}>
          <h5>DestinationXplorer</h5>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
          <a href="">Feedback</a>
        </div>
      </div>
      <div className={style.footer2}>
        <div className={style.footerImgs}>
          <img src={Facebook} alt="" className={style.footerImg} />
          <img src={Instagram} alt="" className={style.footerImg} />
          <img src={X} alt="" className={style.footerImg} />
        </div>
        <p>&copy; 2023 DestinationXplorer All Rights Reserved.</p>
        <p>Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
