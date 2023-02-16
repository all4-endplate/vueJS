<template>
    <div class = "box">
        <div class = "photo_wrap">
            <img alt="Vue test1" src="../../assets/img/test1.jpg" width = "200" />
            <img alt="Vue test1" src="../../assets/img/test1.jpg" width = "200" />
            <img alt="Vue test1" src="../../assets/img/test1.jpg" width = "200" />
            <img alt="Vue test1" src="../../assets/img/test1.jpg" width = "200" />
            <img alt="Vue test1" src="../../assets/img/test1.jpg" width = "200" />
        </div>
        <hr>
        <div class = "textName">
            <div style = "float:left; width:49%;" align = "left">
                <span class = "restName">ㅁㄴㅇㄹ</span> 
            </div>
            <div style = "float:left; width:49%" align = "right">
                <span style = "float:right">
                    <button class = "favorite">as</button>
                </span>
            </div>
        </div>
        
        <hr>
        <div id = "map"/>
        <hr>
        
        <div class = "address">
            <p align = "left" style = "margin-left: 10px;">서울특별시~~~~</p>
            <p align = "left" style = "margin-left: 10px;">서울시~~~</p>
        </div>
        <div class = "phone">
            <p align = "left" style = "margin-left: 10px;">010-1111-2222</p>
        </div>
        <p align = "left" style = "margin-left: 10px;">음식 종류: </p>
        <p align = "left" style = "margin-left: 10px;">가격대: </p>
        <p align = "left" style = "margin-left: 10px;">주차: </p>
        <p align = "left" style = "margin-left: 10px;">영업시간: </p>
        <p align = "left" style = "margin-left: 10px;">휴일: </p>
        <p align = "left" style = "margin-left: 10px;">웹 사이트: <a href  = "#">웹사이트</a></p>
        <p align = "left" style = "margin-left: 10px;">메뉴: </p>

        <div class = "menu">
            <p align = "left"><U>오늘의 차: </U></p>
            <p align = "left"><U>오늘의 차: </U></p>
            <p align = "left"><U>오늘의 차: </U></p>
            <p align = "left"><U>오늘의 차: </U></p>
            <p align = "left"><U>오늘의 차: </U></p>
            <p align = "left"><U>오늘의 차: </U></p>
            <img src="../../assets/img/test1.jpg" width = "150" align = "left" class = "img"/>
            <div class="modal">
                <span class="close">&times;</span>
                <img class="modal_content" id="img01">
            </div>
            <br>
            <br>
        </div>
        <br>


    </div>
</template>

<script>


export default {
	name:"KakaoMap",
    data(){
        return{
            map:null
        };
    },
    setup(){},
    created(){},
    mounted(){
        if(window.kakao && window.kakao.maps){
            this.loadMap();
        }
        else{
            this.loadScript();
        }
    },
    unmounted(){},
    methods:{
        loadScript(){
            const script = document.createElement("script");
            script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=a8896f6a110491fd03acfb07035d691c&autoload=false";
            script.onload = () => window.kakao.maps.load(this.loadMap);

            document.head.appendChild(script);
        },
        loadMap(){
            const container = document.getElementById("map");
            const options = {
                center:new window.kakao.maps.LatLng(37.495026088733574, 127.0297575597796), //지도의 중심 좌표
                level: 3, //지도의 레벨(확대, 축소 정도)
            };
            this.map = new window.kakao.maps.Map(container, options);
            const markerPosition = new window.kakao.maps.LatLng(37.495026088733574, 127.0297575597796)

            const marker = new window.kakao.maps.Marker({
                position:markerPosition
            })
            marker.setMap(this.map)
        },
    },
}

</script>



<style scoped>
    .photo_wrap{
        padding: 10px;
        overflow:scroll;
        overflow:auto;
        white-space:nowrap;
    }
    .photo_wrap img{
        margin: 8px;
    }
    #map{
        width:auto;
        height:400px;
    }
    .box{
        width: 120%;
        max-width: 68em;
        margin: 0 auto;
        padding: 0 2.5em;
    }
    .restName{
        font-size: 1.5em;
        font-weight: bold;
    }
    .textName{
        height: 50px;
        margin: 10px;
    }
    .address{
        border:1px solid rgb(226, 226, 226);
        width:100%;
    }
    .phone{
        border:1px solid rgb(226, 226, 226);
        margin-top: 10px;
        width:100%;
    }
    .menu{
       margin-left: 60px; 
    }


    
    .modal {
    display: none; /* 모달창 숨겨 놓기 */
    position: fixed; 
    z-index: 1; /* 모달창을 제일 앞에 두기 */
    padding-top: 100px;
    left: 0; top: 0;
    width: 100%; height: 100%;
    overflow: auto; /* 스크롤 허용 auto */
    cursor: pointer; /* 마우스 손가락모양 */
    background-color: rgba(0, 0, 0, 0.8);
  }
  /* 모달창 이미지 */
  .modal_content {
    margin: auto;
    display: block;
    width: 50%; height: auto;
    max-width: 1000px;
    border-radius: 10px;
    animation-name: zoom;
    animation-duration: 0.8s;
  }
  /* 모달창 애니메이션 추가 */
  @keyframes zoom {
    from {transform: scale(0)}
    to {transform: scale(1)}
  }
  /* 닫기 버튼 꾸미기 */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }
  .close:hover, .close:focus{
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
</style>