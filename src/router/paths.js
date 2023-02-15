/**
 * 객체 구조
 * {
 * path: url path,
 * view: *.vue 파일 이름
 * auth: true | false
 * }
 */
export default [{
    path: '/',
    view: 'HomeView'
},{
    path: '/about',
    view: 'AboutView'
},{
    path: '/test',
    view: 'Test'
},{
    path: '/mypage',
    view: 'MyPage'
},{
    path: '/myLogin',
    view: 'components/MyLogin'
},{
    path: '/Signup',
    view: 'components/Signup'
},{
    path:'/board/list',
    view:'board/List'
},{
    path:'/board/first',
    view:'board/First'
},{
    path:'/board/detail',
    view:'board/DetailPage' 
}]