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
import ContactsComponent from './contacts'
import {connect} from 'react-redux'
import {slideSelection, choiceInformation} from '../../store/action'
import ReviewsComponent from './reviews'
import FooterComponent from './footer'
import PropTypes from 'prop-types'

const MIN_SLIDE = 0
const MAX_SLIDE = 2

const Main = (props) => {
    const {slideNumber, selectSlide, buttonSelection, selectedButton} = props

    const slides = [firstPhoto, twoPhoto, threePhoto]

    const nextSlide = () => {
        let pop = slideNumber + 1
        if (pop >= MAX_SLIDE) {
            pop = MAX_SLIDE
        }
        selectSlide(pop)
    }

    const previousSlide = () => {
        let foo = slideNumber - 1
        if (foo <= MIN_SLIDE) {
            foo = MIN_SLIDE
        }
        selectSlide(foo)
    }

    const informationOutput = (selectedButton) => {
        switch(selectedButton) {
            case 'characteristics':
                return <SpecificationsComponent />
            case 'reviews':
                return <ReviewsComponent />
            case 'contacts':
                return <ContactsComponent />
            default: <SpecificationsComponent />
        } 
    }

    const leftButtonInactive = slideNumber === MIN_SLIDE ? 'slider__button slider__button-inactiveLeft' : 'slider__button slider__button-activeLeft'
    const rightButtonInactive = slideNumber === MAX_SLIDE ? 'slider__button slider__button-inactiveRight' : 'slider__button slider__button-activeRight'

    const buttonCharacteristicsActive = selectedButton === 'characteristics' ? 'button-selected' : 'button-notselected'
    const buttonReviewsActive = selectedButton === 'reviews' ? 'button-selected' : 'button-notselected'
    const butoonContactsActive = selectedButton === 'contacts' ? 'button-selected' : 'button-notselected'

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
                            <button className={leftButtonInactive} onClick={() => previousSlide()}></button>
                            <img src={firstPhotoMini} alt='фотография'></img>
                            <img src={twoPhotoMini} alt='фотография'></img>
                            <img src={threePhotoMini} alt='фотография'></img>
                            <button className={rightButtonInactive} onClick={() => nextSlide()}></button>
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
                    <button className={buttonCharacteristicsActive} onClick={() => buttonSelection('characteristics')}>Характеристики</button>
                    <button className={buttonReviewsActive} onClick={() => buttonSelection('reviews')}>Отзывы</button>
                    <button className={butoonContactsActive} onClick={() => buttonSelection('contacts')}>Контакты</button>
                </div>
                {informationOutput(selectedButton)}
            </main>
            <FooterComponent />
        </div>
    )
}

Main.propTypes = {
    slideNumber: PropTypes.number.isRequired,
    selectSlide: PropTypes.func.isRequired,
    buttonSelection: PropTypes.func.isRequired,
    selectedButton: PropTypes.string.isRequired
  };

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
