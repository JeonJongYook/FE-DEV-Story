import axios from 'axios'

const getUserInfo = (userEmail, userNickname, userId, userPw) => {
  const reqData = {
    'user_email': userEmail,
    'user_nickname': userNickname,
    'user_id': userId,
    'user_pw': userPw
  }

  let serverUrl = '//localhost:8081'

  return axios.post(serverUrl + '/user/register', reqData, {
  })
}

export default {
  async doRegister(userEmail, userNickname, userId, userPw) {
    try {
      const getUserInfoPromise = getUserInfo(userEmail, userNickname, userId, userPw)
      const [userInfoResponse] = await Promise.all([getUserInfoPromise])
      alert(userId + "님! 환영합니다!")
      if (userInfoResponse.data.length === 0) {
        return 'notFound'
      } else {
        localStorage.setItem('user_token', userInfoResponse.data.user_token)
        localStorage.setItem('user_role', userInfoResponse.data.user_role)
        localStorage.setItem('user_id', userInfoResponse.data.user_id)
        return userInfoResponse
      }
    } catch (err) {
      console.error(err)
    }
  }
}