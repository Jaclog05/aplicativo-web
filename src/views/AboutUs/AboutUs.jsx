import React from 'react'
import Footer from '../../components/footer/Footer';

function AboutUs() {
  return (
    <div className="w-100">
      <div
        className="text-center text-white bg-secondary py-5 d-flex flex-column align-items-center justify-content-center"
        style={{height: '70vh'}}
      >
        <p className="display-4 fw-bold">
          Sobre Nosotros
        </p>
      </div>
      <div className="p-5">
        <div className="px-5">
          <p className="text-center">
            Somos un grupo de arquitectos, apasionados por compartir el conocimiento
            que hemos adquirido durante nuestros cinco años de carrera universitaria.
            Nos hemos propuesto a través de este documento incentivar a la mejora de la calidad
            de las viviendas producidas por el sector inmobiliario en Colombia,
            a través de un instrumento de apoyo y asesoramiento para aquellos que
            están en proceso de comprar una vivienda. Queremos ayudarles a entender
            las cualidades de la propiedad y su relación con un precio justo.
            Nuestro objetivo es hacer una contribución significativa al mercado inmobiliario
            y la construcción de viviendas en todo el mundo. Esperamos que este proyecto
            sea el punto de partida para lograrlo.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs