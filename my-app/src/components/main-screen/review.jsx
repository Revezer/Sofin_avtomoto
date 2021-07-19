import React from 'react'

const Review = (props) => {
    const {review} = props

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
                <span></span>
                <span className='appraisal-text'>Советует</span>
            </div>
            <div className='review__conteiner-answer answer'>
                <span className='answer-time'>1 минуту назад</span>
                <span className='answer-text'>Ответить</span>
            </div>
        </div>
    )
}

export default Review;