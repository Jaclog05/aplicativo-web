import React from 'react'
import Footer from '../../components/footer/Footer';
import coverImage from '/images/cover_image_1.webp';
import MainIcon from '../../components/MainIcon';

function AboutUs() {
  return (
    <div className="w-100">
      <div className='w-100 h-100 position-relative'>
        <div
          className={`position-absolute w-100 h-100 opacity-100`}
          style={{
            transition: 'opacity 0.8s ease-in-out',
            backgroundImage: `url(${coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1
          }}
        />
        <div
          className="text-center text-dark bg-primary py-5 d-flex flex-column align-items-center justify-content-center"
          style={{height: '70vh'}}
        >
          <p className="display-4 fw-bold text-white" style={{zIndex: 3}}>
            Sobre Nosotros
          </p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex-column d-flex flex-md-row gap-5 gap-md-2 text-center align-items-center">
          <MainIcon size='200px' className="mx-auto text-secondary border border-3 border-secondary rounded col-md-3"/>
          <div className="col-md-9 px-3">
            <p className="text-justify mb-0">
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
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs