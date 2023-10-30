import "../App.css";
import Danilo from "../images/danilo.png";
import Girls from "../images/girls.png";
import Helena from "../images/helena.png";
import Stock from "../images/stock.png";
import Start from "../images/start.png";
import Extend from "../images/extend.png";
import Active from "../images/active.png";
import Blue from "../images/blue.png";
import Maskone from "../images/mask1.png";
import Masktwo from "../images/mask2.png";

function Main() {
  return (
    <div>
      <div className="mainOne main">
        <div>
          <h1 className="build">
            Building exactly the eCommerce website you want
          </h1>
          <p className="yar">
            YARA is a customizable open-source eCommerce platform built on
            wordpress. Get ready quickly and make your way.
          </p>
          <div className="inputOne">
            <input type="text" placeholder="Email address" />
            <button>Sign Up</button>
          </div>
        </div>
        <div className="images">
          <div className="imagesOne">
            <img src={Girls} alt="" className="girls" />
            <img src={Helena} alt="" className="helena" />
            <img src={Stock} alt="" className="stock" />
          </div>
          <img src={Danilo} alt="" className="danilo" />
        </div>
      </div>

      <div className="e-simple">
        <h1 className="eh">Your eCommerce made simple</h1>
        <div className="simple-cards main">
          <div className="simple-card">
            <img src={Start} alt="" className="simpleImg" />
            <h2>All You Need to Start</h2>
            <p>
              Add YARA plugin to any WordPress site and set up a new store in
              minutes
            </p>
            <p className="green">Ecommerce for wordpress</p>
          </div>
          <div className="simple-card">
            <img src={Extend} alt="" className="simpleImg" />
            <h2>Customize and Extend</h2>
            <p>
              From subscriptions to gym classes to luxury cars, YARA is fully
              customizable.
            </p>
            <p className="green">Browse Extensions </p>
          </div>
          <div className="simple-card">
            <img src={Active} alt="" className="simpleImg" />
            <h2>Active Community</h2>
            <p>YARA is one of the fastest growing eCommerce communities.</p>
            <p className="green">Check Our Forum </p>
          </div>
        </div>
      </div>

      <div className="mainBlue">
        <div className="blue-items main">
          <div className="blue-item">
            <img src={Maskone} alt="" className="maskone" />
            <div>
              <h2 className="dev">Develop Without Limit</h2>
              <p className="doc">
                YARA is developer friendly, too. Built with a REST API, YARA is
                scalable and can integrate with virtually any service. Design a
                complex store from scratch, extend a store for a client, or
                simply add a single product to a WordPress site - your store,
                your way.
              </p>
              <button className="btnread">Read the Documentation</button>
            </div>
          </div>
          <div className="blue-item">
            <div>
              <h2 className="dev">Know our Global Community</h2>
              <p className="doc">
                YARA is one of the fastest-growing eCommerce communities. We’re
                proud that the helpfullness of the community and a wealth of
                online resources are frequently cited as reasons our users love
                it. There are 80+ meetups worldwide!
              </p>
              <button className="btnread">Read the Documentation</button>
            </div>
            <img src={Masktwo} alt="" className="masktwo" />
          </div>
        </div>
        <img src={Blue} alt="" className="blueboard" />
      </div>

      <div className="yara ">
        <p className="yara-text">
          YARA - the{" "}
          <span className="bold"> most customizable eCommerce platform</span>{" "}
          for building <span className="bold"> your online business</span>
        </p>
        <button className="getbtn">GET STARTED</button>
      </div>
    </div>
  );
}

export default Main;
