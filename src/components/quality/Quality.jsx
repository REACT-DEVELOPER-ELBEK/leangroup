import React, { Component } from "react";
import Slider from "react-slick";
import '../../components/normalize/Normalize.scss'
import './Quality.scss'
import {quality1, quality2, quality3, quality4, quality5} from '../../assets/index.js'

export default class AutoPlay extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        arrow: true
    };
    return (
      <div className="quality">
        <div className="container">
            <div className="quality__wrapper">
                <div className="quality__title">Качество продукции подтверждают <span>сертификаты</span></div>
            <div className="quality__content">
            <Slider {...settings}>
            <div>
            <img src={quality1} alt="" />
          </div>
          <div>
            <img src={quality2} alt="" />
          </div>
          <div>
            <img src={quality3} alt="" />
          </div>
          <div>
            <img src={quality4} alt="" />
          </div>
          <div>
            <img src={quality5} alt="" />
          </div>
          <div>
            <img src={quality1} alt="" />
          </div>
          <div>
            <img src={quality2} alt="" />
          </div>
          <div>
            <img src={quality3} alt="" />
          </div>
          <div>
            <img src={quality4} alt="" />
          </div>
          <div>
            <img src={quality5} alt="" />
          </div>
          <div>
            <img src={quality1} alt="" />
          </div>
          <div>
            <img src={quality2} alt="" />
          </div>
          <div>
            <img src={quality3} alt="" />
          </div>
          <div>
            <img src={quality4} alt="" />
          </div>
          <div>
            <img src={quality5} alt="" />
          </div>
        </Slider>
            </div>
            </div>
        </div>
      </div>
    );
  }
}