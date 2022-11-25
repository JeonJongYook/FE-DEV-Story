<template>
    <div class="findEmailPage">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col">
                </div>
                <div class="col">
                    <div><h4 style="margin-top: 40px;">가입하신 핸드폰 번호를 입력해주세요</h4></div>
                    <input type="text" id="phone" placeholder="핸드폰 번호를 입력해주세요" class="form-control joinInput">
                    <input type="button" class="btn btn-primary btn btn-default btn-sm" value="인증번호 전송" id="sendPhone" @click="sendPhone()" style="marign-top:10px;">
                    
                    <div style="margin-top: 10px;"><h4>인증 번호를 입력해주세요</h4></div>
                    <input type="text" id="phone" placeholder="인증 번호를 입력해주세요" class="form-control joinInput">
                    <input type="button" class="btn btn-primary btn btn-default btn-sm" id="sendRandnum" @click="sendRandnum()" value="확인" style="marign-top:10px;" disabled>
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import button from '@/assets/mdb/src/js/bootstrap/dist/button';

  export default {
    methods: {
        // sendPhone() {
        //     var phone = document.getElementById('phone').value;
        //     var button = document.getElementById('sendPhone');
        //     var url = "http://localhost:8080/confirm/phone";
        //     var button2 = document.getElementById('sendRandNum');
        //     if(module.checkEmthy(phone)) {
        //         alert('이메일을 입력해주세요');
        //         return false;
        //     }
        //     button.disabled=true;
        //     let data = JSON.stringify({
        //         "unit" : phone,
        //         "scope" : "phone",
        //         "detail" : "find"
        //     });
        //     module.requestToPostServer2(url, data).then(result=> {
        //         alert(result.message);
        //         if(!result.flag) {
        //             button.disabled=false;
        //             return;
        //         }
        //         button2.disabled=false;
        //     }).catch(error=>{
        //         alert(error);
        //         button.disabled=false;
        //     })
        // },
        // sendRandnum() {
        //     var phone = document.getElementById('phone').value;
        //     var button = document.getElementById('sendPhone');
        //     var url = "http://localhost:8080/confirm/phone";
        //     var button2 = document.getElementById('sendRandNum');

        //     if(module.checkEmthy(phone)) {
        //         alert('이메일을 입력해주세요');
        //         button.disabled=false;
        //         return;
        //     }
        //     let data=JSON.stringify({
        //         "phoneOrEmail" : phone,
        //         "unit" : phone,
        //         "randNum" : document.getElementById('randnum').value,
        //         "detail" : "find"
        //     });
        //     button2.disabled=true;
        //     module.requestPutToServer2(url, data).then(result=> {
        //         alert(result.message);
        //         if(!result.flag) {
        //             button2.disabled=false;
        //             return;
        //         }
        //     }).catch(error=>{
        //         alert(error);
        //         button.disabled=false;
        //     })
        // },
        // created() {
        //     // alert(error);
        //     button.disabled=false;
        // }
    }
  }
</script>

<style>
</style>