import React from 'react'
import {connect} from 'react-redux'
import {openPopup} from '../../store/action'
import ReviewComponents from './review'
import PopupComponent from './popup'

const Reviews = (props) => {
    const {reviews, openPopup} = props

    const handleOpenPopup = () => {
        openPopup('open')
    }

    return (
        <div className='main__reviews review'>
            {
                reviews.map((review, index) => <ReviewComponents key={review + index} review={reviews[index]} />)
            }
            <button className='main__reviews-button' onClick={() => handleOpenPopup()}>Оставить отзыв</button>
            <PopupComponent />
        </div>
    )
}

const mapStateToProps = (state) => ({
    reviews: state.reviews
})

const mapDispatchToProps = (dispatch) => ({
    openPopup(action) {
        dispatch(openPopup(action))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
