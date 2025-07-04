import { reviewService } from '../../services/review'

import { store } from '../store'
import { ADD_REVIEW, REMOVE_REVIEW, SET_REVIEWS, SET_GIG_REVIEWS } from '../review/review.reducer'
import { SET_SCORE } from '../user/user.reducer'

export async function loadReviews(filterBy) {
    try {
        const reviews = await reviewService.query(filterBy)
        store.dispatch({ type: SET_REVIEWS, reviews })
    } catch (err) {
        console.log('ReviewActions: err in loadReviews', err)
        throw err
    }
}

export async function addReview(review) {
    console.log('add review:', review)
    try {
        const addedReview = await reviewService.add(review)
        store.dispatch(getActionAddReview(addedReview))
        const { score } = addedReview.byUser
        store.dispatch({ type: SET_SCORE, score })
    } catch (err) {
        console.log('ReviewActions: err in addReview', err)
        throw err
    }
}

export async function removeReview(reviewId) {
    try {
        await reviewService.remove(reviewId)
        store.dispatch(getActionRemoveReview(reviewId))
    } catch (err) {
        console.log('ReviewActions: err in removeReview', err)
        throw err
    }
}

// Command Creators
export function getActionRemoveReview(reviewId) {
    return { type: REMOVE_REVIEW, reviewId }
}
export function getActionAddReview(review) {
    return { type: ADD_REVIEW, review }
}

export async function loadReviewsByGig(gigId) {
    const reviews = await reviewService.query({ gigId })
    store.dispatch({ type: SET_GIG_REVIEWS, gigId, reviews })
    return reviews
}