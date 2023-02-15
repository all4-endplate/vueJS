<template>
  <header>
    <h1 id="logo"><router-link to="/" class="logo"><img alt="Vue logo" src="../../assets/EndPlate_Logo.png" width="80"></router-link></h1>
    <div class="menuWrap">
      <ul class="menu">
        <li><router-link to="/board/list">게시판</router-link></li>
        <li><a href="javascript:">메뉴2</a></li>
        <li><a href="javascript:;">메뉴3</a></li>
        <li><a href="javascript:;">메뉴4</a></li>
      </ul>
      <a href="javascript:"><img class="login" src="../../assets/login_logo.png" width="40"></a>
    </div>
  </header>
</template>


<script>

export default {


}
</script>

<style scoped>
header{width: 100%; text-align: center; position:relative; height:110px; border-bottom:1px solid #35495e}
header h1{position:absolute; top:15px; left:100px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:15px; right:420px;}
header ul.menu li{float:left; padding:10px 90px;list-style:none;}
header ul.menu li.login{padding-bottom: 15px;}
img.login{padding-top: 30px; padding-left: 1450px;}
a{text-decoration: none; color:#333;}
</style>