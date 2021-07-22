import React from 'react'

const Contacts = () => {
    return (
        <section className='section__contacts contacts'>
            <div className='contact__block'>
                <div className='contact__container'>
                    <span className='contact__title'>Адрес</span>
                    <span className='contact__text'>Санкт-Петербург,</span>
                    <span className='contact__text contact__text-top'>набережная реки Карповки, дом 5</span>
                </div>
                <div className='contact__container'>
                    <span className='contact__title'>Режим работы</span>
                    <span className='contact__text'>Ежедневно, с 10:00 до 21:00</span>
                </div>
                <div className='contact__container'>
                    <span className='contact__title'>Телефон</span>
                    <span className='contact__text'>8 (800) 333-55-99</span>
                </div>
                <div className='contact__container'>
                    <span className='contact__title'>E-mail</span>
                    <span className='contact__text'>info@avto-moto.ru</span>
                </div>
            </div>
            <div>
            <iframe className='map' title='карта' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.8300125432181!2d30.314303316195904!3d59.96814316668017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTcwMjI!5e0!3m2!1sru!2sru!4v1626866014938!5m2!1sru!2sru" width="431" height="271" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </section>
    )
}

export default Contacts
