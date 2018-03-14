import request from 'superagent'

export const SHOW_EMAIL_BOX = 'SHOW_EMAIL'
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL'


export const showEmailBox = () => {
  return {
    type: SHOW_EMAIL_BOX
  }
}

export const recieveEmail = (email) => {
  return {
    type: RECEIVE_EMAIL,
    email: email.map(mail => mail.data)
  }
}
