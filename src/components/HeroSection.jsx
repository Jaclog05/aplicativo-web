import React, { useEffect, useState, useRef } from 'react'
import { HashLink } from "react-router-hash-link";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isNextHovered, setIsNextHovered] = useState(false);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const timerRef = useRef(null)

  const slides = [
    'public/images/cover_image_1.webp',
    'public/images/cover_image_2.webp',
    'public/images/cover_image_3.webp',
    'public/images/cover_image_4.webp'
  ];

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
  };

  useEffect(() => {
    resetTimer();

    return () => {
      if(timerRef.current){
        clearInterval(timerRef.current);
      }
    }
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetTimer();
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  }

  return (
    <div className="position-relative" style={{ height: "75vh", overflow: "hidden" }}>
      <div className='w-100 h-100 position-relative'>
        {
          slides.map((slide, index) => (
            <div
              key={index}
              className={`position-absolute w-100 h-100 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transition: 'opacity 0.8s ease-in-out',
                backgroundImage: `url(${slide})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))
        }

        <div 
          className="position-absolute w-100 h-100"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1
          }}
        />
      </div>

      <div
        className="text-center text-light position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center w-100"
        style={{ height: "75vh", zIndex: 3 }}
      >
        <p className="display-5 fw-bold">Descubre cuánto vale tu hogar hoy</p>
        <p className="w-50">
          No necesitas ser un experto:
          <br/>
          Solo dinos las características de tu inmueble y nosotros hacemos el resto.
        </p>
        <HashLink
          smooth
          to="/#appraisal_section"
          className="btn btn-secondary text-light"
        >
          Empezar
        </HashLink>
      </div>

      <button 
        className="btn position-absolute top-50 start-0 translate-middle-y ms-3"
        onMouseEnter={() => setIsPrevHovered(true)}
        onMouseLeave={() => setIsPrevHovered(false)}
        onClick={prevSlide}
        style={{ zIndex: 3 }}
      >
        <i className={isPrevHovered ? "bi-arrow-left-circle-fill" : "bi-arrow-left-circle"}
        style={{ fontSize: "3rem", color: 'white' }}></i>
      </button>
      
      <button 
        className="btn position-absolute top-50 end-0 translate-middle-y me-3"
        onMouseEnter={() => setIsNextHovered(true)}
        onMouseLeave={() => setIsNextHovered(false)}
        onClick={nextSlide}
        style={{ zIndex: 3 }}
      >
        <i className={isNextHovered ? "bi-arrow-right-circle-fill" : "bi-arrow-right-circle"} 
           style={{ fontSize: "3rem", color: "white" }}></i>
      </button>

      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex" style={{ zIndex: 3 }}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`btn p-1 mx-1 ${index === currentSlide ? 'text-white' : 'text-secondary'}`}
            onClick={() => setCurrentSlide(index)}
          >
            •
          </button>
        ))}
      </div>
    </div>
  )
}

export default HeroSection