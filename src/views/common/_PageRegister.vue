<template>
	<div class="container">
		<form @submit.prevent="submitForm()">
			<!-- <div>
				<label for="email">이메일(Email)</label>
				<input type="text" id="email" v-model="user_email" />
			</div> -->
            <div class="form-floating mb-3">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" v-model="user_email" placeholder="이메일 주소를 입력해주세요." @blur="checkDuplicate" />
                <span class="badge badge-danger mt-1" v-if="!availableEmail">이미 사용중인 이메일입니다.</span>
                <span class="badge badge-danger mt-1" v-if="!availableEmailForm">이메일 형식이 다릅니다.</span>
            </div>
            <div class="form-floating mb-3">
				<label for="name">닉네임(NickName)</label>
				<input type="text" class="form-control" id="name" v-model="user_name" placeholder="사용하실 닉네임을 입력해주세요." />
			</div>
			<div class="form-floating mb-3">
				<label for="name">아이디(ID)</label>
				<input type="text" class="form-control" id="name" v-model="user_id" placeholder="사용하실 아이디를 입력해주세요."/>
			</div>
			<div class="form-floating mb-3">
				<label for="password">비밀번호(Password)</label>
				<input type="password" class="form-control" id="password" v-model="user_pw" placeholder="사용하실 비밀번호를 입력해주세요."/>
			</div>
			<div class="form-floating mb-3">
				<label for="passwordConfirm">비밀번호 확인(Password Confirm)</label>
				<input type="password" class="form-control" id="passwordConfirm" v-model="user_pwConfirm" placeholder="확인을 위해 비밀번호를 재입력해주세요."/>
			</div>
			<!-- <div>
				<label for="position">직책</label>
				<input type="text" id="position" v-model="position" />
			</div>
			<div>
				<label for="teamName">팀 이름</label>
				<input type="text" id="teamName" v-model="teamName" />
			</div> -->
			<button type="submit">회원가입</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'PageRegister',
	data() {
		return {
			user_email: '',
            user_id: '',
			user_name: '',
			user_pw: '',
			user_pwConfirm: ''
		};
	},
	methods: {
        // async submitForm() {
            // API 요청시 전달할 userData 객체
            // const userData = {
                // user_email: this.user_email,
                // user_id: this.user_id,
                // user_password: this.user_password,
                // user_Nickname: this.user_Nickname,
            // };
            // const { data } = await registerUser(userData);
            
            // this.logMessage = `${data.username} 님이 가입되었습니다.`;
            
            // 가입 후 폼 초기화
            // this.initForm();
            // },

            // initForm() {
            //     this.user_name = '';
            //     this.user_pw = '';
            // },
		// async submitForm() {
        //     //validation 생략

        //     const userData = {
        //         email: this.email,
        //         name: this.name,
        //         password: this.password,
        //         position: this.position,
        //         teamName: this.teamName,
        //     };
            
        //     const response = await registerUser(userData);
        //     if (response.status == 200) {
        //         alert('환영합니다.');
        //         this.$router.push('/login');
        //     } else {
        //         alert(response.data);
        //     }
        // },
        // async checkDuplicate() {
        //     //일단은 사용가능한 이메일로 true로 초기화 한다.
        //     this.availableEmail = true;
            
        //     //이메일 유효성을 검사한다.
        //     if (!validateEmail(this.email)) {
        //         //유효성이 틀리다면 data 값을 false로 한다.
        //         this.availableEmailForm = false;
        //         return;
        //     } else {
        //         this.availableEmailForm = true;
        //     }
            
        //     //이메일 중복체크를 한다.
        //     const response = await checkDuplicateEmail(this.email);
        //     if (!response.data) {
        //         this.availableEmail = false;
        //     } else {
        //         this.availableEmail = true;
        //     }
        // },
    },
};
</script>

<style scoped></style>