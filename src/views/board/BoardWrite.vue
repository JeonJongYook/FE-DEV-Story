<template>
    <div class="board-detail">
      <div class="board-contents">
        <input type="text" v-model="title" class="w3-input w3-border" placeholder="제목을 입력해주세요." style="font-size: 20px;">
        <br/>
        <input type="text" v-model="author" class="w3-input w3-border" placeholder="작성자를 입력해주세요." style="font-size: 20px;" v-if="idx === undefined">
      </div>
      <div class="board-contents">
        <textarea id="" cols="30" rows="10" v-model="contents" class="w3-input w3-border" style="resize: none; font-size: 18px;">
        </textarea>
      </div>
      <!-- <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" /> 
        <label for="file" class="input-plus">+</label>
      </ul> -->
      <div class="common-buttons">
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave"><i class="bi bi-pencil-square"></i>&nbsp;작성</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList"><i class="bi bi-list"></i>&nbsp;목록</button>
      </div>
    </div>

  </template>
  
  <script>
  export default {
    data() { //변수생성
      return {
        requestBody: this.$route.query,
        idx: this.$route.query.idx,
  
        title: '',
        author: '',
        contents: '',
        created_at: ''
      }
    },
    mounted() {
      this.fnGetView()
    },
    methods: {
      fnGetView() {
        if (this.idx !== undefined) {
          this.$axios.get(this.$serverUrl + '/board/' + this.idx, {
            params: this.requestBody
          }).then((res) => {
            this.title = res.data.title
            this.author = res.data.author
            this.contents = res.data.contents
            this.created_at = res.data.created_at
          }).catch((err) => {
            console.log(err)
          })
        }
      },
      fnList() {
        delete this.requestBody.idx
        this.$router.push({
          path: './list',
          query: this.requestBody
        })
      },
      fnView(idx) {
        this.requestBody.idx = idx
        this.$router.push({
          path: './detail',
          query: this.requestBody
        })
      },
      fnSave() {
        let apiUrl = this.$serverUrl + '/board'
        this.form = {
          "idx": this.idx,
          "title": this.title,
          "contents": this.contents,
          "author": this.author
        }
  
        if (this.idx === undefined) {
          //입력
          this.$axios.post(apiUrl, this.form)
          .then((res) => {
            alert('게시글이 저장되었습니다.')
            this.fnView(res.data.idx)
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        } else {
          //수정
          this.$axios.patch(apiUrl, this.form)
          .then((res) => {
            alert('게시글이 저장되었습니다.')
            this.fnView(res.data.idx)
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        }
      }
    }
  }
  </script>
  <style scoped>
  
  </style>