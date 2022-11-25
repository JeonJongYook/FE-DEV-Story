<template>
  <div>
    <div>
      <h2>회원가입</h2>
      <div id="registerForm">
        <form @submit.prevent="fnRegister">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="user_email" name="user_email" placeholder="이메일(Email)" aria-label="UserEmail" v-model="user_email">
            <label for="floatingPassword">이메일(Email)</label>
          </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="user_nickname" name="user_nickname" placeholder="닉네임(NickName)" aria-label="UserNickname" v-model="user_nickname">
              <label for="floatingPassword">닉네임(NickName)</label>
            </div>

            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="user_id" name="user_id" placeholder="아이디(ID)" aria-label="UserId" v-model="user_id">
              <label for="user_id">아이디(ID)</label>
            </div>
            
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="user_pw" name="user_pw" placeholder="비밀번호(PW)" aria-label="UserPw" v-model="user_pw">
              <label for="floatingPassword">비밀번호(PW)</label>
            </div>

            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="re_user_pw" name="re_user_pw" placeholder="비밀번호(PW) 재확인" aria-label="ReUserPw" v-model="re_user_pw">
              <label for="floatingPassword">비밀번호(PW) 재확인</label>
            </div>

            <div class="form mb-3">
              <input type="file" class="form-control" aria-label="Profile" required>
              <div class="invalid-feedback">프로필 사진 업로드</div>
            </div>

            <button class="btn btn-primary" type="submit">회원가입</button>
            <br/>        
            <br/>        
          <pre>계정이 이미 있으시다구요? <a href="/login">로그인</a>을 통해 다양한 서비스를 이용 해보세요!</pre>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'PageRegister',
  data() {
    return {
      user_email: '',
      user_id: '',
      user_nickname: '',
      user_pw: '',
      re_user_pw: ''
    };
  },
  methods: {
    ...mapActions(['register']),

    async fnRegister() {

      if (this.user_email === '') {
        alert('이메일을 입력해 주세요.')
        return false;
      }

      if (this.user_nickname === '') {
        alert('닉네임 입력해 주세요.')
        return false;
      }
      if (this.user_id === '') {
        alert('아이디를 입력해 주세요.')
        this.user_id.focus();
        return false;
      }

      if (this.user_pw === '') {
        alert('비밀번호를 입력해 주세요.')
        return false;

      } else if (this.user_pw != this.re_user_pw) {
        alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
        return false;
      }

      try {
        let registerResult = await this.register({
          user_email: this.user_email,
          user_nickname: this.user_nickname,
          user_id: this.user_id,
          user_pw: this.user_pw
        })
        if (registerResult) this.goToPages()

        const TotalInfo = {
          user_email: this.user_email,
          user_nickname: this.user_nickname,
          user_id: this.user_id,
          user_pw: this.user_pw,
        }
        localStorage.setItem("totalinfo", JSON.stringify(TotalInfo));
        // store의 token의 데이터 token값을 저장
        // this.$store.commit('setToken', loginResult.token);
        // username을 store의 username에 저장
        // this.$store.commit('setUsername', loginResult.user_id);

      } catch (err) {
        if (err.message.indexOf('Network Error') > -1) {
          alert('서버에 접속할 수 없습니다. 상태를 확인해주세요.')
        } else {
          alert('로그인 정보를 확인할 수 없습니다.')
        }
      }
    },
    goToPages() {
      this.$router.push("/login");
    },
    computed: {
      ...mapGetters({
        errorState: 'getErrorState'
      })
    }
  },
};
</script>

<style scoped>
#registerForm {
  max-width: 500px;
  margin: auto;
}
</style>