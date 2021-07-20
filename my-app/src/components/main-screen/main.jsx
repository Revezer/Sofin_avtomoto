import React from 'react'
import HeaderComponent from './header'
import firstPhoto from '../../img/firstPhoto.jpg'
import twoPhoto from '../../img/twoPhoto.jpg'
import threePhoto from '../../img/threePhoto.jpg'
import firstPhotoMini from '../../img/firstPhotoMini.jpg'
import twoPhotoMini from '../../img/twoPhotoMini.jpg'
import threePhotoMini from '../../img/threePhotoMini.jpg'
import engineType from '../../img/engineType.png'
import gearbox from '../../img/gearbox.png'
import power from '../../img/power.png'
import volume from '../../img/volume.png'
import SpecificationsComponent from './specifications'
import {connect} from 'react-redux'
import {slideSelection, choiceInformation} from '../../store/action'
import ReviewsComponent from './reviews'
import FooterComponent from './footer'

const Main = (props) => {
    const {slideNumber, selectSlide, buttonSelection, selectedButton} = props

    const slides = [firstPhoto, twoPhoto, threePhoto]

    const nextSlide = () => {
        let pop = slideNumber + 1
        selectSlide(pop)
    }

    const previousSlide = () => {
        let foo = slideNumber - 1
        selectSlide(foo)
    }

    const informationOutput = (selectedButton) => {
        switch(selectedButton) {
            case 'characteristics':
                return <SpecificationsComponent />
            case 'reviews':
                return <ReviewsComponent />
            case 'contacts':
                return
            default: <SpecificationsComponent />
        } 
    }

    return (
        <div>
            <HeaderComponent />
            <main className='main'>
                <div className='main__conteiner conteiner'>
                    <div>
                        <div className='conteiner__photo'>
                            <img className='conteiner__photo-img' src={slides[slideNumber]} alt='фотография' />
                            <span className='conteiner__photo-text'>new model</span>
                        </div>
                        <div className='conteiner__slider slider'>
                            <button className='slider__button' onClick={() => previousSlide()}></button>
                            <img src={firstPhotoMini} alt='фотография'></img>
                            <img src={twoPhotoMini} alt='фотография'></img>
                            <img src={threePhotoMini} alt='фотография'></img>
                            <button className='slider__button' onClick={() => nextSlide()}></button>
                        </div>
                    </div>
                    <div className='container__info info'>
                        <h2 className='info__name'>Марпех 11</h2>
                        <ul className='info__list'>
                            <li className='info__item'>
                                <img className='info__icon' src={engineType} alt='тип двигателя' />
                                <span className='info__text'>бензин</span>
                            </li>
                            <li className='info__item'>
                                <img className='info__icon info__icon-size' src={gearbox} alt='коробка передач' />
                                <span className='info__text'>механика</span>
                            </li>
                            <li className='info__item'>
                                <img className='info__icon  info__icon-size' src={power} alt='мощность' />
                                <span className='info__text'>100 л.с.</span>
                            </li>
                            <li className='info__item'>
                                <img className='info__icon  info__icon-size' src={volume} alt='объем' />
                                <span className='info__text'>1.4 л</span>
                            </li>
                        </ul>
                        <div className='info__prise'>
                            <span className='info__prise-new'>2 300 000 ₽</span>
                            <span className='info__prise-old'>2 400 000 ₽</span>
                        </div>
                        <button className='info__buy'>оставить заявку</button>
                        <button className='info__credit'>в кредит от  11 000 ₽</button>
                    </div>
                </div>
                <div className='main__button button'>
                    <button className='button-selected' onClick={() => buttonSelection('characteristics')}>Характеристики</button>
                    <button className='button-notselected' onClick={() => buttonSelection('reviews')}>Отзывы</button>
                    <button className='button-notselected' onClick={() => buttonSelection('contacts')}>Контакты</button>
                </div>
                {}
                {informationOutput(selectedButton)}
            </main>
            <FooterComponent />
        </div>
    )
}

const mapStateToProps = (state) => ({
    slideNumber: state.slideNumber,
    selectedButton: state.info,
})

const mapDispatchToProps = (dispatch) => ({
    selectSlide(number) {
        dispatch(slideSelection(number))
    },
    buttonSelection(info) {
        dispatch(choiceInformation(info))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
