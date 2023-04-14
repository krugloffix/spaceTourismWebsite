import React from "react";

function Technology({ info }) {
  const [technology, setTechnology] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const onChangeSlider = (index) => {
    setTechnology(index);
  };

  return (
    <div className="technology">
      <div className="container technology__container">
        <div className="technology__wrapper">
          <p className="page__preheading technology__title">
            <span>03</span>Space launch 101
          </p>
          <div className="technology__content">
            <ul
              className="technology__slider"
              style={
                windowWidth > 768
                  ? {
                      gridTemplateRows: `repeat(${info.length}, fit-content(100%))`,
                    }
                  : {
                      gridTemplateColumns: `repeat(${info.length}, fit-content(100%))`,
                    }
              }
            >
              {info.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={
                    itemIndex === technology
                      ? "technology__item technology__item--active"
                      : "technology__item"
                  }
                  onClick={() => onChangeSlider(itemIndex)}
                >
                  <span>{itemIndex}</span>
                </li>
              ))}
            </ul>
            <div className="technology__info">
              <p className="technology__prename">the terminology ...</p>
              <div className="heading__small technology__name">
                {info[technology].name}
              </div>
              <p className="technology__text">{info[technology].description}</p>
            </div>
            <div className="technology__img">
              <img
                src={
                  windowWidth > 768
                    ? info[technology].images.portrait
                    : info[technology].images.landscape
                }
                alt={`${info[technology].name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
