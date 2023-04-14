import React from "react";

function Crew({ info }) {
  const [crew, setCrew] = React.useState(0);

  const onChangeSlider = (index) => {
    setCrew(index);
  };

  return (
    <div className="crew">
      <div className="container crew__container">
        <div className="crew__wrapper">
          <p className="page__preheading crew__title">
            <span>02</span>Meet your crew
          </p>
          <div className="crew__content">
            <div className="crew__img">
              <img src={info[crew].images.png} alt={`${info[crew].name}`} />
            </div>
            <div className="crew__info">
              <p className="crew__position">{info[crew].role}</p>
              <p className="heading__small crew__name">{info[crew].name}</p>
              <p className="crew__bio">{info[crew].bio}</p>
            </div>
            <ul
              className="crew__slider"
              style={{
                gridTemplateColumns: `repeat(${info.length}, fit-content(100%))`,
              }}
            >
              {info.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={
                    itemIndex === crew
                      ? "crew__item crew__item--active"
                      : "crew__item"
                  }
                  onClick={() => onChangeSlider(itemIndex)}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
