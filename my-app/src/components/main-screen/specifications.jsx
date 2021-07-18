import React from 'react'

const Specifications = () => {
    return(
        <ul className='main__fullinfo fullinfo'>
                    <li className='fullinfo__item'>
                        <span className='fullinfo__text'>Трансмиссия</span>
                        <span className='fullinfo__text'>Роботизированная</span>
                    </li>
                    <li className='fullinfo__item'>
                        <span className='fullinfo__text'>Мощность двигателя, л.с.</span>
                        <span className='fullinfo__text'>249</span>
                    </li>
                    <li className='fullinfo__item'>
                        <span className='fullinfo__text'>Тип двигателя</span>
                        <span className='fullinfo__text'>Бензиновый</span>
                    </li>
                    <li className='fullinfo__item'>
                        <span className='fullinfo__text'>Привод</span>
                        <span className='fullinfo__text'>Полный</span>
                    </li>
                    <li className='fullinfo__item'>
                        <span className='fullinfo__text'>Объем двигателя, л</span>
                        <span className='fullinfo__text'>2.4</span>
                    </li>
                    <li className='fullinfo__item'>
                        <span className='fullinfo__text'>Макс. крутящий момент</span>
                        <span className='fullinfo__text'>370/4500</span>
                    </li>
                    <li className='fullinfo__item'>
                        <span className='fullinfo__text'>Количество цилиндров</span>
                        <span className='fullinfo__text'>4</span>
                    </li>
                </ul>
    )
}

export default Specifications;