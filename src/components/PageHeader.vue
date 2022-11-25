<template>
  <header style="max-width: 100%; margin: 0px 0px;">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/">FE DEV Story</a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
<!--              <a class="nav-link" href="/about">개발자 소개</a>-->
              <a class="nav-link" href="#" @click="fnError">개발자 소개</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                게시판
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/board/list">자유 게시판</a></li>
                <li><hr class="dropdown-divider"></li>
<!--                <li><a class="dropdown-item" href="/board/list/subject">과별 게시판</a></li>-->
                <li><a class="dropdown-item" href="#" @click="fnError">과별 게시판</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" @click="fnError">학년별 게시판</a></li>
              </ul>
            </li>
<!--            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">-->
<!--              <i class="bi bi-bell"></i>99+-->
<!--                <span class="visually-hidden">unread messages</span>-->
<!--            </span>-->
          </ul>

            <form class="d-flex">
              <button type="button" class="btn btn-primary position-relative">
                <i class="bi bi-bell"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{ this.notifyCount }}99+
                  <span class="visually-hidden">읽지 않은 알림</span>
                </span>
              </button>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="/login" v-if="!this.$store.state.isLogin">로그인</a>
                </li>
<!--                <li class="nav-link" id="isLogout_val" v-if="this.$store.state.isLogin" @click="fnDashBoard2()">-->
<!--                  {{this.id}}님 &nbsp;환영합니다~-->
<!--                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dropdown" aria-controls="dropdown" aria-expanded="false" aria-label="Toggle navigation">-->
<!--                    <span class="navbar-toggler-icon"></span>-->
<!--                  </button>-->

                  <li class="nav-item dropdown" v-if="this.$store.state.isLogin">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://avatars.githubusercontent.com/u/54439924?s=400&u=cf2f5a73e043a556945cdaf9d2ad79ab8bd93463&v=4" alt="profile" width="32" height="32" class="rounded-circle">
                    </a>
<!--                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                      게시판-->
<!--                    </a>-->

                    <div class="btn-group-sm">
<!--                      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">-->
<!--                      <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">-->
<!--                      </button>-->
                      <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown1">
                        <li><a class="dropdown-item" href="/DashBoard">마이페이지</a></li>
                        <li><a class="dropdown-item" href="#" @click="fnError">설정</a></li>
                        <li><a class="dropdown-item" href="#" @click="fnError">내 프로필</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" v-if="this.$store.state.isLogin" @click="fnLogoutV2()">로그아웃</a></li>
                      </ul>
                    </div>
                  </li>
                &nbsp;
<!--                  <div class="dropdown text-end">-->
<!--&lt;!&ndash;                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">&ndash;&gt;-->
<!--&lt;!&ndash;                      <img src="https://avatars.githubusercontent.com/u/54439924?s=400&u=cf2f5a73e043a556945cdaf9d2ad79ab8bd93463&v=4" style="max-width: 100%;" alt="profile" width="35" height="35" class="rounded-circle">&ndash;&gt;-->
<!--&lt;!&ndash;                    </a>&ndash;&gt;-->
<!--                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">-->
<!--&lt;!&ndash;                      <li><a class="dropdown-item" href="#">MyPage</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                      <li><a class="dropdown-item" href="#">Settings</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                      <li><a class="dropdown-item" href="#">MyProfile</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;                      <li><hr class="dropdown-divider"></li>&ndash;&gt;-->
<!--&lt;!&ndash;                      <li><a class="dropdown-item" href="#">LogOut</a></li>&ndash;&gt;-->
<!--                    </ul>-->
<!--                  </div>-->
<!--                <li class="nav-link" id="isLogout_val" v-if="this.$store.state.isLogin" @click="fnLogoutV2()">-->
<!--                  로그아웃-->
<!--                </li>-->
                <!-- abc = {{ localStorage.getItem(vuex)}} -->
              </ul>
            </form>
          </div>
        </div>
    </nav>
  </header>
<!--  <header class="p-3 mb-3 border-bottom">-->
<!--    <div class="container">-->
<!--      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">-->
<!--        <div class="dropdown text-end">-->
<!--          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">-->
<!--          </a>-->
<!--          <ul class="dropdown-menu text-small">-->
<!--            <li><a class="dropdown-item" href="#">New project...</a></li>-->
<!--            <li><a class="dropdown-item" href="#">Settings</a></li>-->
<!--            <li><a class="dropdown-item" href="#">Profile</a></li>-->
<!--            <li><hr class="dropdown-divider"></li>-->
<!--            <li><a class="dropdown-item" href="#">Sign out</a></li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </header>-->
</template>

<script>
export default {
  data() {
    return {
        // getItem()을 사용하여 조회한다.
        // 해당 키에 값이 없는 경우 ""로 할당한다.
        userInfo: JSON.parse(localStorage.getItem("totalInfo")) || "",
        id: localStorage.getItem('user_id'),
        pw: '',
        token: '',
        role: ''
    };
  },
  methods: {
    fnLogoutV2() {
      if (confirm("정말 로그아웃 하시겠습니까?")) {
        localStorage.removeItem("totalinfo")
        localStorage.removeItem("user_token")
        localStorage.removeItem("user_role")
        localStorage.removeItem("user_id")
        location.reload();
        alert("안녕히 가십시오!");
      }else {
        location.href(-1);
      }
    },
    fnDashBoard2() {
      // const totalinfo = localStorage.getItem("totalinfo");
      // const user_token = localStorage.getItem("user_token");
      // const user_role = localStorage.getItem("user_role");
      // const user_id = localStorage.getItem("user_id");
      // alert("totalinfo : " + totalinfo);
      // alert("user_token : " + user_token);
      // alert("user_role : " + user_role);
      // alert("user_id : " + user_id);
      this.$router.push("/DashBoard");
      // location.reload();
    },
    fnError(){
      alert("현재 개발중입니다!\n빠른시일내로 업데이트하겠습니다!");
      return false;
    },
    mounted() {
      this.id = this.userInfo.user_id || "";
      this.pw = this.userInfo.user_pw || "";
      // this.token = this.userInfo.user_token || "";
      // this.role = this.userInfo.user_role || "";
    },
  }
}
</script>
  
<style scoped>
@import url('../assets/headers.css');
@import url('https://fonts.googleapis.com/css2?family=Nerko+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gamja+Flower&display=swap');

.navbar-brand {
  font-family: 'Nerko One', cursive;
  font-size: 25px;
}
.nav-link {
  font-family: 'Gamja Flower', cursive;
  font-size: 18px;
}

.btn-group-sm {
  font-family: 'Gamja Flower', cursive;
  font-size: 18px;
}

header {
  font-family: 'Secular One', sans-serif;
}
</style>