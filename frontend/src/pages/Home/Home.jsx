import "./Home.css";
import image from "../../../assets/placeholder.jpg";

function Home() {
  return (
    <>
      <div className="wrapperDark">
        <div className="home">
          <div className="welcomeText">
            <h1>Focus on the work.</h1>
            <h1>Automate your workout.</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>

          <div className="imageShowcase">
            <img src={image} alt="imageShowcase"></img>
          </div>
        </div>

        {/* 
        <div className="wrapperLight">
          <div className="home">
            <div className="featureContainer">
              <div className="featureText">
                <h1>Header</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="featureShowcase">
                <div className="feature">
                  <h1>testing</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="feature">
                  <h1>testing</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
            */}
      </div>
    </>
  );
}

export default Home;
