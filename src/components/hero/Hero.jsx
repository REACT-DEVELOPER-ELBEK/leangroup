import React, { Component } from 'react'
import Slider from "react-slick";
import './Hero.scss'
import '../../components/normalize/Normalize.scss'
import {hero} from '../../assets/index.js'

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 2000,
        cssEase: "linear",
      };
      return (
        <div className='hero'>
          <Slider {...settings} className='hero__slide'>
            <div>
              <img src={hero} alt="" />
            </div>
            <div>
            <img src={hero} alt="" />
            </div>
            <div>
            <img src={hero} alt="" />
            </div>
          </Slider>
          <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <h3>LEANGROUP - тубы и этикетки</h3>
                    <h1>Ламинатные тубы</h1>
                    <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                    <button>Каталог</button>
                </div>
            </div>
          </div>
        </div>
      );
    }
  }