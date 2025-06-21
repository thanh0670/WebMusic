import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import "./styles.css";

export default function Carroussel(props) {
  console.log("props", props);

  const table = props.cards.map((element, index) => ({
    ...element,
    onClick: () => {
      if (props.onCardClick) {
        props.onCardClick(index);
      }
    },
  }));
  // useEffect(() => {
  //   const elems = document.querySelectorAll(".css-1fzpoyk");
  //   elems.forEach((el) => {
  //     el.style.gap = "10px";

  //     const currentScale = el.style.transform.match(/scale\(([^)]+)\)/);
  //     if (currentScale) {
  //       const scale = parseFloat(currentScale[1]);
  //       const increasedScale = Math.min(scale + 0.1, 1); // tăng 10% nhưng không vượt quá 1
  //       el.style.transform = el.style.transform.replace(
  //         /scale\([^)]+\)/,
  //         `scale(${increasedScale})`
  //       );
  //     }
  //   });
  // }, [props.goToSlide, props.cards]);

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
        opacity: 1,
        objectFit: "cover",
      }}
    >
      <Carousel
        slides={table}
        goToSlide={props.goToSlide ?? 0}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
