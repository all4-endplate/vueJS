<template>
    <div>
        <h1>Spring Boot에서 GET 방식 호출 </h1>
        <h2>(GET http://localhost:3030/api/v1/test)</h2>
        <button @click="onClickGet">GET 호출</button>
        
        <h3 v-if="get_result">GET 결과로 넘어온 값은: {{ get_result }}입니다.</h3>
        <br></br>
        <hr style="margin-left: 10%; margin-right: 10%;"></hr>
        
        <br></br>
        
        <h1>Spring Boot에서 POST 방식 호출</h1>
        <h2>(POST http://localhost:3030/api/v1/test)</h2>
        
        <input v-model="post_data" placeholder="POST 전달 데이터"></input>
        <button @click="onClickPost">POST 호출</button>
        <h3 v-if="post_result">POST 결과로 넘어온 값은: {{ post_result }}입니다.</h3>
    </div>
</template>

<script>

export default {
    name: 'Test',
    data: () => ({
        get_result: '',
        post_data: '',
        post_result: ''
    }),
    methods: {
        async onClickGet() {
            const response = await this.$http.get('/api/v1/test')
            const data = response['data']
            this.get_result = JSON.stringify(data)
        },
        async onClickPost() {
            const send_data = JSON.stringify({'data': this.post_data })
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const response = await this.$http.post('/api/v1/test', send_data, config)
            const data = response['data']
            console.dir(data)
            this.post_result = JSON.stringify(data)
        }
    }
}
</script>