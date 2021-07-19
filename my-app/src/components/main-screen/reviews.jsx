import React from 'react'
import {connect} from 'react-redux'
import ReviewComponents from './review'

const Reviews = (props) => {
    const {reviews} = props

    return (
        <div className='main__reviews review'>
            {
                reviews.map((review, index) => <ReviewComponents key={review + index} review={reviews[index]} />)
            }
            <button className='main__reviews-button'>Оставить отзыв</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    reviews: state.reviews
})

export default connect(mapStateToProps)(Reviews);