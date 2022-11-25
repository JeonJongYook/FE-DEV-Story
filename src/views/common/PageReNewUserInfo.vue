<template>
    <div class="changePwdPage">
        <h1 id="logo2" class="center">FE DEV Story</h1>
        <div class="center2">
            <h4 class="mt-5">새 비밀번호를 입력해 주세요</h4>
            <input type="password" id="pwd" class="loginInput mt-2" placeholder="4자이상 10자 이하입니다">
            <h4 class="mt-3">한번더 입력해 주세요</h4>
            <input type="password" id="pwd2" class="loginInput mt-2" placeholder="4자이상 10자 이하입니다">
            <br />
            <input type="button" value="변경" class="mt-3" id="updateButton" @click="this.tryUpdatePwd">
            <div id="done"></div>
        </div>
    </div>
</template>

<script>
  export default {
    methods: {
    }
  }
</script>

<style>
#logo2 {
    text-align: center;
    margin-top: 50px;
    color: black;
    font: italic 5em "Fira Sans", serif;
}
.center {
    position: absolute;
    top: 20%;
    left: 50%;
    margin-left: -250px;
    margin-top: -50px;
}
.center2 {
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -150px;
    margin-top: -50px;
}
</style>