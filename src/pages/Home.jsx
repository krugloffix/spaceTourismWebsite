import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="container home__container">
        <div className="home__wrapper">
          <div className="home__info">
            <p className="page__preheading home__pretitle">
              So, you want to travel to
            </p>
            <h1 className="home__title">space</h1>
            <p className="home__text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="home__explore">
            <div className="home__explore--inner">
              <Link to={"/destination"}>explore</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
