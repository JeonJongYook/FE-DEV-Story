<template>
  <div class="board-list">
    <!-- <div class="txt" style="font-size: 30px;">
      <span>자</span>
      <span>유</span>
      <span>게</span>
      <span>시</span>
      <span>판</span>
    </div> -->
    <h2>
      <span>자</span>
      <span>유</span>
      <span>게</span>
      <span>시</span>
      <span>판</span>
    </h2>
    <br/>
    <div class="form-floating">
      <select class="form-select" id="search_key" name="search_key" v-model="search_key">
        <option value="" disabled>선택</option>
        <option value="author">작성자</option>
        <option value="subject">소속 학과</option>
        <option value="title">제목</option>
        <option value="contents">내용</option>
      </select>
      <label for="search_key">검색 할 분류</label>
      <br/>
          <div class="col-auto">
            <label for="inputPassword2" class="visually-hidden">Password</label>
            <input type="text" class="form-control" id="search_value" name="search_value" v-model="search_value" placeholder="검색할 내용 입력" aria-label="검색할 내용 입력">
            <br/>
            <button type="search" @click="fnFormCheck()" class="btn btn-success btn-lg"><i class="bi bi-search"></i>&nbsp;검색</button>
        </div>
        <br/>
    </div>
    <table class="table table-hover">
      <thead>
        <colgroup>
					<col width="6%" />
					<col width="*" />
					<col width="10%" />
					<col width="15%" />
					<col width="15%" />
<!--          <col width="10%" />-->
				</colgroup>
        <tr>
          <th scope="col">No</th>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">소속</th>
          <th scope="col">작성일</th>
<!--          <th scope="col">도구</th>-->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, idx) in list" :key="idx">
          <td scope="row" class="txt_hover_No"><a v-on:click="fnView(`${row.idx}`)">{{ row.idx }}</a></td>
          <td scope="row" class="txt_hover_Title"><a v-on:click="fnView(`${row.idx}`)">{{ row.title }}</a></td>
          <td scope="row" class="txt_hover_Author"><a v-on:click="fnView(`${row.idx}`)">{{ row.author }}</a></td>
          <td scope="row">{{ row.subject }}</td>
          <td scope="row">{{ row.created_at.substring(0, 10) }}</td>
<!--           <td scope="row"><button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;</td>-->
        </tr>
        <tr v-if="list.length == 0">
					<td colspan="4">등록된 게시글이 없습니다.</td>
				</tr>
      </tbody>
    </table>
    
    <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0">
      <span class="pg">
        <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-bar-item w3-border">&lt;&lt;</a>
        <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"
          class="prev w3-button w3-bar-item w3-border">&lt;</a>
        <template v-for=" (n,index) in paginavigation()">
            <template v-if="paging.page==n">
                <strong class="w3-button w3-bar-item w3-border w3-green" :key="index">{{ n }}</strong>
            </template>
            <template v-else>
                <a class="w3-button w3-bar-item w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
            </template>
        </template>
        <span>
          <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
            @click="fnPage(`${paging.end_page+1}`)" class="next w3-button w3-bar-item w3-border">&gt;</a>
          <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last w3-button w3-bar-item w3-border">&gt;&gt;</a>
        </span>
      </span>
    </div>
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite"><i class="bi bi-pencil-square"></i>&nbsp;작성</button>
    </div>
  </div>
  
</template>
  
<script>
export default {
  data() { //변수생성
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
      paging: {
        block: 0,
        end_page: 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index: 0,
        start_page: 0,
        total_block_cnt: 0,
        total_list_cnt: 0,
        total_page_cnt: 0,
      }, //페이징 데이터
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 5,
      search_key: this.$route.query.sk ? this.$route.query.sk : '',
      search_value: this.$route.query.sv ? this.$route.query.sv : '',
      paginavigation: function () { //페이징 처리 for문 커스텀
        let pageNumber = [] //;
        let start_page = this.paging.start_page;
        let end_page = this.paging.end_page;
        for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
        return pageNumber;
      },
      idx: this.$route.query.idx
    }
  },
  mounted() {
    this.fnGetList();
  },
  methods: {
    fnGetList() {
      this.requestBody = { // 데이터 전송        
        sk: this.search_key,
        sv: this.search_value,
        page: this.page,
        size: this.size
      }

      this.$axios.get(this.$serverUrl + "/board/list", {
        params: this.requestBody,
        headers: {}
      }).then((res) => {      

        if (res.data.result_code === "OK") {
          this.list = res.data.data
          this.paging = res.data.pagination
          this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
        }

      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }else {
          alert('관리자에게 문의해주세요.')
        }
      })
    },
    fnView(idx) {
      this.requestBody.idx = idx
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    },
    fnWrite() {
      this.$router.push({
        path: './write'
      })
    },
    fnFormCheck() {
      // 검색 내용 Null Check
      if(document.getElementById("search_value").value == "") {
        alert("검색값을 입력해주세요.");

        return false;
      }else {
        this.fnGetList();
      }
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n       
      }

      this.fnGetList()      
    },
    fnDelete() {
      if (!confirm("삭제하시겠습니까?")) return

      this.$axios.delete(this.$serverUrl + '/board/' + this.idx, {})
          .then(() => {
            alert('삭제되었습니다.')
            this.fnList();
          }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>

td.txt_hover_Title:hover
{
  color: #E8A0BF;
  text-decoration: underline;
}

td.txt_hover_Author:hover
{
  color: #E8A0BF;
  text-decoration: underline;
}
h2 {
  height: 100px;
}

h2 span {
  position: relative;
  top: 20px;
  display: inline-block;
  animation: bounce .3s ease infinite alternate;
  font-family: 'Titan One', cursive;
  font-size: 80px;
  color: rgb(207, 180, 243);
  text-shadow: 0 1px 0 #CCC,
               0 2px 0 #CCC,
               0 3px 0 #CCC,
               0 4px 0 #CCC,
               0 5px 0 #CCC,
               0 6px 0 transparent,
               0 7px 0 transparent,
               0 8px 0 transparent,
               0 9px 0 transparent,
               0 10px 10px rgba(0, 0, 0, .4);
}

h2 span:nth-child(2) { animation-delay: .1s; }
h2 span:nth-child(3) { animation-delay: .2s; }
h2 span:nth-child(4) { animation-delay: .3s; }
h2 span:nth-child(5) { animation-delay: .4s; }
h2 span:nth-child(6) { animation-delay: .5s; }

@keyframes bounce {
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 #CCC,
                 0 7px 0 #CCC,
                 0 8px 0 #CCC,
                 0 9px 0 #CCC,
                 0 50px 25px rgba(0, 0, 0, .2);
  }
}
</style>