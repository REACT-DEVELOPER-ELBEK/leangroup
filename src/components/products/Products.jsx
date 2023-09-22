import React from 'react'
import '../../components/normalize/Normalize.scss'
import './Products.scss'
import {products1, products2, products3, products4, products5} from '../../assets/index.js'

const Products = () => {
  return (
    <div className="products">
        <div className="container">
            <div className="products__wrapper">
                <div className="products__title">Наша <span>продукция</span></div>
                <div className="products__btns">
                    <button>Ламинатные тубы</button>
                    <button>Экструзионные</button>
                    <button>Другая упаковка</button>
                </div>
                <div className="products__cards">
                    <img src={products1} alt="" />
                    <img src={products2} alt="" />
                    <img src={products3} alt="" />
                    <img src={products4} alt="" />
                    <img src={products5} alt="" />
                </div>
                <div className="to__catalog"><button>Перейти в каталог</button></div>
            </div>
        </div>
    </div>
  )
}

export default Products