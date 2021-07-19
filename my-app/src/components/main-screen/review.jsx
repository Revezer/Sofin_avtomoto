import React from 'react'

const Review = (props) => {
    const {review} = props

    return (
        <div className='review__conteiner'>
            <span className='review__conteiner-name'>{review.name}</span>
            <div className='review__conteiner-dignity'>
                <span>Достоинства</span>
                <span>{review.dignity}</span>
            </div>
            <div className='review__conteiner-limitation'>
                <span>Недостатки</span>
                <span>{review.limitations}</span>
            </div>
            <span className='review__conteiner-comment'>Комментарий</span>
            <span className='review__conteiner-commentText'>{review.comment}</span>
            <div className='review__conteiner-appraisal'>
                <span></span>
                <span>Советует</span>
            </div>
            <div className='review__conteiner-time'>
                <span>1 минуту назад</span>
                <span>Ответить</span>
            </div>
        </div>
    )
}

export default Review;