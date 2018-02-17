import {SHOW_EMAIL_BOX} from '../actions'

function subreddits (state = [], action) {
  switch (action.type) {
    case SHOW_EMAIL_BOX:
      return true

    default:
      return state
  }
}

export default subreddits