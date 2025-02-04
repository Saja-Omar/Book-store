import React from "react";
import HeaderMid from "../../components/Header/HeaderMid";
import HeaderTop from "../../components/Header/HeaderTop";
import Slider from "../../components/Sliderr/Slider";
import Services from "../../components/Servicess/Services";
import BookSlider from "../../components/BookSliders/BookSlider";
import { books } from "../../data/books";
import HidingTitle from "../../components/HidingTitle";

function HomeBage() {
  return (
    <div className="home">
      <Slider />
      <Services />
      <HidingTitle title="Most gifted" />
      <BookSlider data={books} />
      <HidingTitle title="Best seller" />
      <BookSlider data={books} />
      <HidingTitle title="Most wished for" />
      <BookSlider data={books} />
    </div>
  );
}
export default HomeBage;
