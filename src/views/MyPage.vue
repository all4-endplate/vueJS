<template>
    <div id="mypage">
      <MyPage></MyPage>
      <MyPage2></MyPage2>
    </div>
  </template>
  
  <script>

  import MyPage from './components/MyPage.vue'
  import MyPage2 from './components/MyPage2.vue'
  
  export default {
    name: 'App',
    components: {
      MyPage,MyPage2
  
    }
  }
  </script>
  
  <style>
  #mypage {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>