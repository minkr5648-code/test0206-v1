let header = document.getElementById('header');
let mainMenu = document.getElementById('main-menu');
let mainLogo = document.getElementById('mainLogo');
let clickIcon1 = document.querySelector('.img-box1');
let clickIcon2 = document.querySelector('.img-box2');
let clickIcon3 = document.querySelector('.img-box3');
let clickIcon4 = document.querySelector('.img-box4');

// 메인메뉴
document.addEventListener('DOMContentLoaded', function () {
    mainMenu.addEventListener('mouseenter', function () {
        // 열기
        header.classList.add('on');
        searchBar.classList.remove('on');
        subMenu.classList.remove('on');

        clickIcon1.style.display = 'none'
        clickIcon2.style.display = 'none'
        clickIcon3.style.display = 'none'
    });
    mainMenu.addEventListener('mouseleave', function () {
        header.classList.remove('on');
        header.classList.remove('active');

        clickIcon1.style.display = 'block'
        clickIcon2.style.display = 'block'
        clickIcon3.style.display = 'block'
    });
})

let searchOpenBtn = document.getElementById('searchOpenBtn');
let searchBar = document.querySelector('.search-bar');

// 검색창 열기
searchOpenBtn.addEventListener('click', function () {
    let headerOn = header.classList.contains('active');
    let searchOn = searchBar.classList.contains('on');
    let subMenuOn = subMenu.classList.contains('on');
    let triggerOn = trigger.classList.contains('on');
    if (subMenuOn || triggerOn) {
        trigger.classList.remove('on');
        triggerMainMenu.style.display = 'none'
        subMenu.classList.remove('on');
        searchBar.classList.add('on')

        clickIcon1.style.display = 'none'
        clickIcon2.style.display = 'none'
        clickIcon3.style.display = 'none'
        clickIcon4.style.display = 'none'
    }
    else if (searchOn && headerOn) {
        searchBar.classList.remove('on')
        header.classList.remove('active');

        if (matchMedia("screen and (min-width: 1920px)").matches) {
            clickIcon1.style.display = 'block'
        }
        clickIcon2.style.display = 'block'
        clickIcon3.style.display = 'block'
    }
    else {
        searchBar.classList.add('on')
        header.classList.add('active')

        clickIcon1.style.display = 'none'
        clickIcon2.style.display = 'none'
        clickIcon3.style.display = 'none'
        clickIcon4.style.display = 'none'
    }
})

// 검색창 초기화
function searchBtn() {
    if (searchInput) {
        console.log('감지됨')
        document.getElementById('searchInput').value = ''
    }
}

// 검색창 닫기
function closeBtn() {
    searchBar.classList.remove('on')
    header.classList.remove('active');

    if (matchMedia("screen and (min-width: 1920px)").matches) {
        clickIcon1.style.display = 'block'
    }
    clickIcon2.style.display = 'block'
    clickIcon3.style.display = 'block'
}

// 서브메뉴
let subMenuGobtn = document.getElementById('subMenu-gobtn');
let subMenu = document.getElementById('subMenu');
subMenuGobtn.addEventListener('click', function () {
    let headerOn = header.classList.contains('active');
    let subMenuOn = subMenu.classList.contains('on');
    let searchOn = searchBar.classList.contains('on');
    let triggerOn = trigger.classList.contains('on');
    if (searchOn || triggerOn) {
        trigger.classList.remove('on');
        triggerMainMenu.style.display = 'none'
        searchBar.classList.remove('on');
        subMenu.classList.add('on');

        clickIcon1.style.display = 'none'
        clickIcon2.style.display = 'none'
        clickIcon3.style.display = 'none'
        clickIcon4.style.display = 'none'

    } else if (subMenuOn && headerOn) {
        subMenu.classList.remove('on');
        header.classList.remove('active');

        if (matchMedia("screen and (min-width: 1920px)").matches) {
            clickIcon1.style.display = 'block'
        }
        clickIcon2.style.display = 'block'
        clickIcon3.style.display = 'block'
    } else {
        subMenu.classList.add('on');
        header.classList.add('active');

        clickIcon1.style.display = 'none'
        clickIcon2.style.display = 'none'
        clickIcon3.style.display = 'none'
        clickIcon4.style.display = 'none'
    }
    searchBar.classList.remove('on')
})

// 닫기 버튼
let subMenuCloseBtn = document.getElementById('subMenu-closeBtn');
subMenuCloseBtn.addEventListener('click', function () {
    subMenu.classList.remove('on');
    header.classList.remove('active');

    if (matchMedia("screen and (min-width: 1920px)").matches) {
        clickIcon1.style.display = 'block'
    }
    clickIcon2.style.display = 'block'
    clickIcon3.style.display = 'block'
})

// 트리거
let trigger = document.querySelector('.trigger');
let triggerMainMenu = document.getElementById('trigger-main-menu');



trigger.addEventListener('click', function () {
    let triggerOn = trigger.classList.contains('on')
    let headerOn = header.classList.contains('active');
    let subMenuOn = subMenu.classList.contains('on');
    let searchOn = searchBar.classList.contains('on');
     
    if (searchOn || subMenuOn) {
        searchBar.classList.remove('on');
        subMenu.classList.remove('on');
        trigger.classList.add('on');
        triggerMainMenu.style.display = 'block'
        
        clickIcon1.style.display = 'block'
        clickIcon2.style.display = 'block'
        clickIcon3.style.display = 'block'
        clickIcon4.style.display = 'block'   
    }
    else if (triggerOn && headerOn) {
        trigger.classList.remove('on');
        header.classList.remove('active');
        
        if (triggerMainMenu.style.display === 'block') {
            triggerMainMenu.style.display = 'none'
            
            if (matchMedia("screen and (min-width: 760px)").matches) {
                clickIcon1.style.display = 'block'
            }else {
                clickIcon1.style.display = 'none'
            }
            clickIcon3.style.display = 'block'
            clickIcon4.style.display = 'none'
        }
        
    }
    else {
        trigger.classList.add('on')
        header.classList.add('active')
        if (triggerMainMenu.style.display != 'block') {
            triggerMainMenu.style.display = 'block'
            clickIcon1.style.display = 'block'
            clickIcon3.style.display = 'block'
            clickIcon4.style.display = 'block'
            
        }
    }
    
})


let triggerMenuTitle = document.querySelectorAll('.trigger-menu-title')
let triggerTitle = document.querySelectorAll('.trigger-main-menu-title');

triggerMenuTitle.forEach(function (item) {
    let triggerTitle = item.querySelector('.trigger-main-menu-title');
    triggerTitle.addEventListener('click', function () {
        
        let itemOn = item.classList.contains('on') // 클릭된 것만 선택

        triggerMenuTitle.forEach(function (i) {
            trigger.addEventListener('click', function(){
                i.classList.remove('on')
                clickIcon2.style.display = 'block'
            })

            i.classList.remove('on')
            clickIcon1.style.display = 'block'
            clickIcon2.style.display = 'block'
            clickIcon3.style.display = 'block'
            clickIcon4.style.display = 'block'
            
            
        })
        if (!itemOn) {
            item.classList.add('on')
            clickIcon1.style.display = 'none'
            clickIcon2.style.display = 'none'
            clickIcon3.style.display = 'none'
            clickIcon4.style.display = 'none'
            
        }
    })
    

})

// 푸터 아코디언

let footerNavItem = document.querySelectorAll('.footer-nav-item');

footerNavItem.forEach(function(item){
    item.addEventListener('click', function(){
        let IsItem = this.classList.contains('on');
        footerNavItem.forEach(function(el){
            el.classList.remove('on');
        });
        if(IsItem){
            this.classList.remove('on');
        }else{
            this.classList.add('on');
        }
        
    });
});

// 회원서비스

let memberServiceTabBtn = document.querySelectorAll('.member-service-tab-btn');
let memberServiceTitle = document.querySelectorAll('.member-service-title')
let memberServiceContent = document.querySelectorAll('.member-service-content');

memberServiceTabBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        memberServiceTitle.forEach(function(b){
            b.classList.remove('on');
        })
        this.classList.add('on')
        memberServiceTitle.forEach(function(item){
            item.classList.remove('on');
        })
        let target = btn.getAttribute('data-tab');
        memberServiceTitle.forEach(function(item){
            if(item.id === target){
                item.classList.add('on')
            }else{
                item.classList.remove('on')
            }
        })
    })
})
memberServiceTabBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        memberServiceTabBtn.forEach(function(b){
            b.classList.remove('on');
        })
        this.classList.add('on')
        memberServiceContent.forEach(function(item){
            item.classList.remove('on');
        })
        let target = btn.getAttribute('data-tab');
        memberServiceContent.forEach(function(item){
            if(item.id === target){
                item.classList.add('on')
            }else{
                item.classList.remove('on')
            }
        })
    })
})

// 반응형 아이디/비밀번호 찾기 버튼
let findIdPwBtn = document.querySelectorAll('.find-id-pw-btn');
let findIdPwResponsive = document.querySelectorAll('.find-id-pw-responsive')


findIdPwBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        findIdPwBtn.forEach(function(b){
            b.classList.remove('on');
        })
        this.classList.add('on')
        findIdPwResponsive.forEach(function(item){
            item.classList.remove('on');
        })
        let target = btn.getAttribute('data-tab');
        findIdPwResponsive.forEach(function(item){
            if(item.id === target){
                item.classList.add('on')
            }else{
                item.classList.remove('on')
            }
        })
    })
})