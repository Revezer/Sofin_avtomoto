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
import {slideSelection, choiceInformation, openPopup} from '../../store/action'
import ReviewsComponent from './reviews'
import FooterComponent from './footer'
import PropTypes from 'prop-types'
import PopupComponent from '../main-screen/popup'

const MIN_SLIDE = 0
const MAX_SLIDE = 2

const Main = (props) => {
    const {slideNumber, selectSlide, buttonSelection–°haracteristics, buttonSelectionReviews, buttonSelectionContacts, selectedButton, closePopup, popup} = props

    const slides = [firstPhoto, twoPhoto, threePhoto]

    const onButtonClickNextSlide = () => {
        let pop = slideNumber + 1
        if (pop >= MAX_SLIDE) {
            pop = MAX_SLIDE
        }
        selectSlide(pop)
    }

    const onButtonClickPreviousSlide = () => {
        let foo = slideNumber - 1
        if (foo <= MIN_SLIDE) {
            foo = MIN_SLIDE
        }
        selectSlide(foo)
    }

    const getInformationOutput = (selectedButton) => {
        switch(selectedButton) {
            case 'characteristics':
                return <SpecificationsComponent />
            case 'reviews':
                return <ReviewsComponent />
            case 'contacts':
                return <ContactsComponent />
            default: 
                return <SpecificationsComponent />
        } 
    }

    const handleClosePopup = () => {
        closePopup('close')
        document.body.classList.remove('overflow');
    }

    const closePopupDiv = popup === 'open' ? <div className='openpopup' onClick={handleClosePopup}></div> : ''

    const activityPopup = popup === 'open' ? <PopupComponent /> : ''

    const leftButtonInactive =  slideNumber === MIN_SLIDE ? 'slider__button slider__button-inactiveLeft' : 'slider__button slider__button-activeLeft'
    const rightButtonInactive = slideNumber === MAX_SLIDE ? 'slider__button slider__button-inactiveRight' : 'slider__button slider__button-activeRight'

    const buttonCharacteristicsActive = selectedButton === 'characteristics' ? 'button-selected' : 'button-notselected'
    const buttonReviewsActive = selectedButton === 'reviews' ? 'button-selected' : 'button-notselected'
    const butoonContactsActive = selectedButton === 'contacts' ? 'button-selected' : 'button-notselected'

    return (
        <>
            <HeaderComponent />
            <main className='main'>
                <div className='main__conteiner conteiner'>
                    <div>
                        <div className='conteiner__photo'>
                            <img className='conteiner__photo-img' src={slides[slideNumber]} alt='—Ą–ĺ—ā–ĺ–≥—Ä–į—Ą–ł—Ź' />
                            <span className='conteiner__photo-text'>new model</span>
                        </div>
                        <div className='conteiner__slider slider'>
                            <button className={leftButtonInactive} aria-label='–ļ–Ĺ–ĺ–Ņ–ļ–į –≤ –Ľ–Ķ–≤–ĺ' onClick={onButtonClickPreviousSlide}></button>
                            <img src={firstPhotoMini} alt='—Ą–ĺ—ā–ĺ–≥—Ä–į—Ą–ł—Ź'></img>
                            <img src={twoPhotoMini} alt='—Ą–ĺ—ā–ĺ–≥—Ä–į—Ą–ł—Ź'></img>
                            <img src={threePhotoMini} alt='—Ą–ĺ—ā–ĺ–≥—Ä–į—Ą–ł—Ź'></img>
                            <button className={rightButtonInactive} aria-label='–ļ–Ĺ–ĺ–Ņ–ļ–į –≤ –Ņ—Ä–į–≤–ĺ' onClick={onButtonClickNextSlide}></button>
                        </div>
                    </div>
                    <div className='container__info info'>
                        <h2 className='info__name'>–ú–į—Ä–Ņ–Ķ—Ö 11</h2>
                        <ul className='info__list'>
                            <li className='info__item'>
                                <img className='info__icon' src={engineType} alt='—ā–ł–Ņ –ī–≤–ł–≥–į—ā–Ķ–Ľ—Ź' />
                                <span className='info__text'>–Ī–Ķ–Ĺ–∑–ł–Ĺ</span>
                            </li>
                            <li className='info__item'>
                                <img className='info__icon info__icon-size' src={gearbox} alt='–ļ–ĺ—Ä–ĺ–Ī–ļ–į –Ņ–Ķ—Ä–Ķ–ī–į—á' />
                                <span className='info__text'>–ľ–Ķ—Ö–į–Ĺ–ł–ļ–į</span>
                            </li>
                            <li className='info__item'>
                                <img className='info__icon  info__icon-size' src={power} alt='–ľ–ĺ—Č–Ĺ–ĺ—Ā—ā—Ć' />
                                <span className='info__text'>100 –Ľ.—Ā.</span>
                            </li>
                            <li className='info__item'>
                                <img className='info__icon  info__icon-size' src={volume} alt='–ĺ–Ī—ä–Ķ–ľ' />
                                <span className='info__text'>1.4 –Ľ</span>
                            </li>
                        </ul>
                        <div className='info__prise'>
                            <span className='info__prise-new'>2 300 000 ‚āĹ</span>
                            <span className='info__prise-old'>2 400 000 ‚āĹ</span>
                        </div>
                        <button className='info__buy'>–ĺ—Ā—ā–į–≤–ł—ā—Ć –∑–į—Ź–≤–ļ—É</button>
                        <button className='info__credit'>–≤ –ļ—Ä–Ķ–ī–ł—ā –ĺ—ā  11 000 ‚āĹ</button>
                    </div>
                </div>
                <div className='main__button button'>
                    <button className={buttonCharacteristicsActive} onClick={buttonSelection–°haracteristics}>–•–į—Ä–į–ļ—ā–Ķ—Ä–ł—Ā—ā–ł–ļ–ł</button>
                    <button className={buttonReviewsActive} onClick={buttonSelectionReviews}>–ě—ā–∑—č–≤—č</button>
                    <button className={butoonContactsActive} onClick={buttonSelectionContacts}>–ö–ĺ–Ĺ—ā–į–ļ—ā—č</button>
                </div>
                {getInformationOutput(selectedButton)}
            </main>
            <FooterComponent />
            {closePopupDiv}
            {activityPopup}            
        </>
    )
}

Main.propTypes = {
    slideNumber: PropTypes.number.isRequired,
    selectSlide: PropTypes.func.isRequired,
    selectedButton: PropTypes.string.isRequired,
    closePopup: PropTypes.func.isRequired,
    popup: PropTypes.string.isRequired,
    buttonSelection–°haracteristics: PropTypes.func.isRequired,
    buttonSelectionReviews: PropTypes.func.isRequired,
    buttonSelectionContacts: PropTypes.func.isRequired
  };

const mapStateToProps = (state) => ({
    slideNumber: state.slideNumber,
    selectedButton: state.info,
    popup: state.popup
})

const mapDispatchToProps = (dispatch) => ({
    selectSlide(number) {
        dispatch(slideSelection(number))
    },
    buttonSelection–°haracteristics() {
        dispatch(choiceInformation('characteristics'))
    },
    buttonSelectionReviews() {
        dispatch(choiceInformation('reviews'))
    },
    buttonSelectionContacts() {
        dispatch(choiceInformation('contacts'))
    },
    closePopup(action) {
        dispatch(openPopup(action))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
