import React from 'react'
import {connect} from 'react-redux'
import {openPopup} from '../../store/action'
import ReviewComponents from './review'
import PropTypes from 'prop-types'

const Reviews = (props) => {
    const {reviews, openPopup} = props

    const handleOpenPopup = () => {
        openPopup('open')
        window.onkeydown = (evt) => {
            if ( evt.keyCode === 27 ) {
                openPopup('close')
                document.body.classList.remove('overflow');
            }
        };
        document.body.classList.add('overflow');
    }

    return (
        <div className='main__reviews review'>
            {
                reviews.map((review, index) => <ReviewComponents key={review + index} review={reviews[index]} />)
            }
            <button className='main__reviews-button' onClick={handleOpenPopup}>Оставить отзыв</button>
        </div>
    )
}

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        dignity: PropTypes.string,
        limitations: PropTypes.string,
        comment: PropTypes.string.isRequired,
        appraisal: PropTypes.string.isRequired
    })).isRequired,
    openPopup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    reviews: state.reviews
})

const mapDispatchToProps = (dispatch) => ({
    openPopup(action) {
        dispatch(openPopup(action))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
