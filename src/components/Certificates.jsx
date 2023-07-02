import React, { useState, useRef, useEffect } from 'react';
import GitImage from '../assets/Certificados/Git, GitHub-GitFlow.jpg';
import HtmlImage from '../assets/Certificados/HTML-CSS-JAVASCRIPT.png';
import BootstrapCert from '../assets/Certificados/Bootstrap.png';
import ReactCert from '../assets/Certificados/React.png';
import arrowFoward from '../assets/arrow_forward_ios_FILL0_wght400_GRAD200_opsz48.svg';
import arrowBackward from '../assets/arrow_back_ios_FILL0_wght400_GRAD200_opsz48.svg';
import descubraNuvem from '../assets/Certificados/DescubraNuvem.jpg'
import fundamentosAws from '../assets/Certificados/FundamentosAWS.jpg'
import servicosAws from '../assets/Certificados/ServiçosAWS.jpg'

const Certificates = () => {
    const certificateImages = [HtmlImage, BootstrapCert, ReactCert, descubraNuvem, fundamentosAws, servicosAws, GitImage];
    const totalSlides = certificateImages.length;

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideContainerRef = useRef(null);

    const handlePrevSlide = () => {
        const container = slideContainerRef.current;
        const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
        const scrollAmount = container.offsetWidth * newSlide;
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };

    const handleNextSlide = () => {
        const container = slideContainerRef.current;
        const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
        const scrollAmount = container.offsetWidth * newSlide;
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    };

    useEffect(() => {
        const container = slideContainerRef.current;
        const scrollAmount = container.offsetWidth * currentSlide;
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, [currentSlide]);

    return (
        <div>
            <section id='certificates'>
                <p className='certificates-ttl'>Certificados</p>
                <p className='certificates-descp'>Todos os certificados podem ser autenticados através do meu perfil do LinkedIn.</p>
                <div className="slide-container" ref={slideContainerRef}>
                    {certificateImages.map((image, index) => (
                        <img key={index} src={image} alt="Certificate" />
                    ))}
                </div>

                <div>
                    <img src={arrowBackward} alt='iconarrow' className="slide-btn-prev" onClick={handlePrevSlide} />
                    <img src={arrowFoward} alt='iconarrow' className="slide-btn-next" onClick={handleNextSlide} />
                </div>

                <div className="slide-indicator">
                    {certificateImages.map((_, index) => (
                        <span
                            key={index}
                            className={`slide-indicator-dot ${index === currentSlide ? 'current' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Certificates;
