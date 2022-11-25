<template>
  <div>
    <div>
      <h2>로그인</h2>
      <div id="loginForm">
        <form @submit.prevent="fnLogin">
            <!-- <div class="input-group mb-3"> -->
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="user_id" name="user_id" placeholder="아이디(ID)" aria-label="UserId" v-model="user_id">
              <label for="user_id">아이디(ID)</label>
            </div>

            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="user_pw" name="user_pw" placeholder="비밀번호(PW)" aria-label="UserPw" v-model="user_pw">
              <label for="floatingPassword">비밀번호(PW)</label>
            </div>
            <!-- 
              <div class="input-group">
                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">저장</button>
              </div> -->

              <!-- <div class="input-group">
                <label for="user_id" class="col-sm-2 col-form-label">아이디(ID)</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="user_id" name="user_id" v-model="user_id">
                </div>
              </div>
              <div class="input-group">
                <label for="user_pw" class="col-sm-2 col-form-label">비밀번호(PW)</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="user_pw" name="user_pw" v-model="user_pw">
                </div>
            </div> -->
          <button type="submit" class="btn btn-primary">로그인</button>
          <br/>
          <br/>
          <pre>계정이 아직까지 없으시다구요? <a href="/register">회원가입</a>을 통해 다양한 서비스를 이용 해보세요!</pre>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      user_id: '',
      user_pw: ''
    }
  },
  methods: {
    ...mapActions(['login']),

    async fnLogin() {
      if (this.user_id === '') {
        alert('ID를 입력해 주세요.')
        this.user_id.focus();
        return
      }

      if (this.user_pw === '') {
        alert('비밀번호를 입력해 주세요.')
        return
      }

      try {
        let loginResult = await this.login({user_id: this.user_id, user_pw: this.user_pw})
        if (loginResult) this.goToPages()

        const TotalInfo = {
          user_id : this.user_id,
          user_pw : this.user_pw,
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
      // this.$router.push({
        // name: 'BoardList'
      // })
      this.$router.push("/board/list");
      // location.reload();
    },
    computed: {
      ...mapGetters({
        errorState: 'getErrorState'
      })
    }
  }
}
</script>

<style>
#loginForm {
  max-width: 500px;
  margin: auto;
}
</style>