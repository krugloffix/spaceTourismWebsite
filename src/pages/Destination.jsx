import React from "react";

function Destination({ info }) {
  const [destination, setDestination] = React.useState(0);

  let destinations = [];
  info.map((item) => destinations.push(item.name));

  const onChangeDestination = (index) => {
    setDestination(index);
  };

  return (
    <div className="destination">
      <div className="container destination__container">
        <div className="destination__wrapper">
          <p className="page__preheading destination__title">
            <span>01</span>Pick your destination
          </p>
          <div className="destination__content">
            <img src={info[destination].images.png} alt="" />
            <div className="destination__info">
              <ul
                className="destination__list"
                style={{
                  gridTemplateColumns: `repeat(${destinations.length}, fit-content(100%))`,
                }}
              >
                {destinations.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={
                      destination === itemIndex
                        ? "destination__item destination__item--active"
                        : "destination__item"
                    }
                    onClick={() => onChangeDestination(itemIndex)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {
                <>
                  <h2 className="destination__name">
                    {info[destination].name}
                  </h2>
                  <p className="destination__description">
                    {info[destination].description}
                  </p>
                  <div className="destination__numbers">
                    <p className="subheading--bellefair destination__distance">
                      <span className="subheading--barlow">avg. distance</span>
                      {info[destination].distance}
                    </p>
                    <p className="subheading--bellefair destination__time">
                      <span className="subheading--barlow">
                        est. travel time
                      </span>
                      {info[destination].travel}
                    </p>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
