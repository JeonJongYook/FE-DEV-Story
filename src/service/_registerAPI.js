import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8080',
});

function registerUser(userData) {
	return instance.post('signup', userData);
}

export { registerUser };


// const getUserInfo = (userId, userPw) => {
//   console.log(userId);
//   console.log(userPw);
//   const reqData = {
//     'user_id': userId,
//     'user_pw': userPw
//   }

//   let serverUrl = '//localhost:8081'

//   return axios.post(serverUrl + '/user/login', reqData, {
//   })
// }

// export default {
//   async doLogin(userId, userPw) {
//     try {
//       const getUserInfoPromise = getUserInfo(userId, userPw)
//       const [userInfoResponse] = await Promise.all([getUserInfoPromise])
//       alert(userId + "님! 환영합니다!")
//       if (userInfoResponse.data.length === 0) {
//         return 'notFound'
//       } else {
//         localStorage.setItem('user_token', userInfoResponse.data.user_token)
//         localStorage.setItem('user_role', userInfoResponse.data.user_role)
//         localStorage.setItem('user_id', userInfoResponse.data.user_id)
//         return userInfoResponse
//       }
//     } catch (err) {
//       console.error(err)
//     }
//   }
// }