import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addReview, openPopup} from '../../store/action'
import PropTypes from 'prop-types'

const Popup = (props) => {
    const {reviews, addNewReview, popup, closePopup} = props

    const [newReview, setNewReview] = useState({
        name: '',
        dignity: '',
        limitations: '',
        comment: '',
        appraisal: '0',
    })

    const handleFieldChange = (evt) => {
        const {name, value} = evt.target;

        setNewReview({
          ...newReview,
          [name]: value,
        });
      };

    const handleSubmit = (evt) => {
        evt.preventDefault()
        let newReviews = reviews.slice()
        newReviews.push(newReview)
        addNewReview(newReviews)
        closePopup('close')
    }

    const disabledPopup = popup === 'close' ? 'review__popup popup review__popup-disabled' : 'review__popup'

    const handleClosePopup = () => {
        closePopup('close')
    }

    const oneStar = newReview.appraisal > 0 ? 'popup__redstar' : 'popup__star'
    const twoStar = newReview.appraisal > 1 ? 'popup__redstar' : 'popup__star'
    const threeStar = newReview.appraisal > 2 ? 'popup__redstar' : 'popup__star'
    const fourStar = newReview.appraisal > 3 ? 'popup__redstar' : 'popup__star'
    const fiveStar = newReview.appraisal > 4 ? 'popup__redstar' : 'popup__star'

    return (
        <form className={disabledPopup} onSubmit={handleSubmit}>
                <span className='popup__name'>Оставить отзыв</span>
                <div className='popup__block'>
                    <div className='popup__conteiner'>
                        <input className='popup__text' placeholder='Имя' required name='name' onChange={handleFieldChange}></input>
                        <input className='popup__text' placeholder='Достоинства' name='dignity' onChange={handleFieldChange}></input>
                        <input className='popup__text' placeholder='Недостатки' name='limitations' onChange={handleFieldChange}></input>
                    </div>
                    <div className='popup__conteiner'>
                        <div className='popup__block-rating'>
                            <span className='popup__title'>Оцените товар:</span>
                            <div className='popup__rating' onClick={handleFieldChange}>
                                <label className={oneStar}>
                                    <input className='visually-hidden' name='appraisal' defaultValue={1} type='radio'/>
                                </label>
                                <label className={twoStar}>
                                    <input className='visually-hidden' name='appraisal' defaultValue={2} type='radio'/>
                                </label>
                                <label className={threeStar}>
                                    <input className='visually-hidden' name='appraisal' defaultValue={3} type='radio'/>
                                </label>
                                <label className={fourStar}>
                                    <input className='visually-hidden' name='appraisal' defaultValue={4} type='radio'/>
                                </label>
                                <label className={fiveStar}>
                                    <input className='visually-hidden' name='appraisal' defaultValue={5} type='radio'/>
                                </label>
                            </div>
                        </div>
                        <textarea className='popup__text popup__text-comment' placeholder='Комментарий' required name='comment' onChange={handleFieldChange}></textarea>
                    </div>
                </div>
                <button className='popup__button' type='submit'>оставить отзыв</button>
                <button className='popup__button-close' onClick={() => handleClosePopup()}></button>
            </form>
    )
}

Popup.propTypes = {
    addNewReview: PropTypes.func.isRequired,
    closePopup: PropTypes.func.isRequired,
    popup: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        dignity: PropTypes.string,
        limitations: PropTypes.string,
        comment: PropTypes.string.isRequired,
        appraisal: PropTypes.string.isRequired
    })).isRequired,
  };

const mapStateToProps = (state) => ({
    reviews: state.reviews,
    popup: state.popup
})

const mapDispatchToProps = (dispatch) => ({
    addNewReview(newReview) {
        dispatch(addReview(newReview))
    },
    closePopup(action) {
        dispatch(openPopup(action))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
