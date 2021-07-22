import React from 'react'
import PropTypes from 'prop-types'

const Review = (props) => {
    const {review} = props

    const ONE_STARS_RATING = 20;
    const rating = review.appraisal * ONE_STARS_RATING + `%`;

    return (
        <div className='review__conteiner'>
            <span className='review__conteiner-name'>{review.name}</span>
            <div className='review__conteiner-dignity dignity'>
                <span className='dignity-title'>Достоинства</span>
                <span className='dignity-text'>{review.dignity}</span>
            </div>
            <div className='review__conteiner-limitation limitation'>
                <span className='limitation-title'>Недостатки</span>
                <span className='limitation-text'>{review.limitations}</span>
            </div>
            <span className='review__conteiner-title'>Комментарий</span>
            <span className='review__conteiner-text'>{review.comment}</span>
            <div className='review__conteiner-appraisal appraisal'>
                <div className='appraisal__stars'>
                    <span className='appraisal__redStars' style={{width: rating}}></span>
                </div>
                <span className='appraisal-text'>Советует</span>
            </div>
            <div className='review__conteiner-answer answer'>
                <span className='answer-time'>1 минуту назад</span>
                <span className='answer-text'>Ответить</span>
            </div>
        </div>
    )
}

Review.propTypes = {
    review: PropTypes.object.isRequired,
};

export default Review;