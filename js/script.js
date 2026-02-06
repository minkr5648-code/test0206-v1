let header = document.getElementById('header');
let mainMenu = document.getElementById('main-menu');
let mainLogo = document.getElementById('mainLogo');
let clickIcon1 = document.querySelector('.img-box1');
let clickIcon2 = document.querySelector('.img-box2');
let clickIcon3 = document.querySelector('.img-box3');
let clickIcon4 = document.querySelector('.img-box4');
let popupBtn = document.querySelector('.popup-btn');

// 팝업 닫기

popupBtn.addEventListener('click', function(){
    document.querySelector('.popup-bg').style.display = 'none'
});

// 메인메뉴
document.addEventListener('DOMContentLoaded', function () {
    mainMenu.addEventListener('mouseenter', function () {
        // 열기
        header.classList.add('on');
        mainLogo.src = 'images/header-main-logo-hover.png';
        searchBar.classList.remove('on');
        subMenu.classList.remove('on');
        clickIcon1.style.display = 'none'
        clickIcon2.style.display = 'none'
    });
    mainMenu.addEventListener('mouseleave', function () {
        header.classList.remove('on');
        header.classList.remove('active');
        mainLogo.src = 'images/header-main-logo.png';
        clickIcon1.style.display = 'block'
        clickIcon2.style.display = 'block'
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
        clickIcon4.style.display = 'none'
    }
    else if (searchOn && headerOn) {
        searchBar.classList.remove('on')
        header.classList.remove('active');
        mainLogo.src = 'images/header-main-logo.png';

        if (matchMedia("screen and (min-width: 1920px)").matches) {
            clickIcon1.style.display = 'block'
        }
        clickIcon2.style.display = 'block'
    }
    else {
        searchBar.classList.add('on')
        header.classList.add('active')
        mainLogo.src = 'images/header-main-logo-hover.png';

        clickIcon1.style.display = 'none'
        clickIcon2.style.display = 'none'
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
    mainLogo.src = 'images/header-main-logo.png';

    if (matchMedia("screen and (min-width: 1920px)").matches) {
        clickIcon1.style.display = 'block'
    }
    clickIcon2.style.display = 'block'

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
        clickIcon4.style.display = 'none'

    } else if (subMenuOn && headerOn) {
        subMenu.classList.remove('on');
        header.classList.remove('active');
        mainLogo.src = 'images/header-main-logo.png';
        
        if (matchMedia("screen and (min-width: 1920px)").matches) {
            clickIcon1.style.display = 'block'
        }
        clickIcon2.style.display = 'block'

    } else {
        subMenu.classList.add('on');
        header.classList.add('active')
        mainLogo.src = 'images/header-main-logo-hover.png';
        
        clickIcon1.style.display = 'none'
        clickIcon2.style.display = 'none'
        clickIcon4.style.display = 'none'
        
    }
    searchBar.classList.remove('on')
})

// 닫기 버튼
let subMenuCloseBtn = document.getElementById('subMenu-closeBtn');
subMenuCloseBtn.addEventListener('click', function () {
    subMenu.classList.remove('on');
    header.classList.remove('active');
    mainLogo.src = 'images/header-main-logo.png';

    if (matchMedia("screen and (min-width: 1920px)").matches) {
        clickIcon1.style.display = 'block'
    }
    clickIcon2.style.display = 'block'
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
        trigger.classList.add('on')
        triggerMainMenu.style.display = 'block'

        clickIcon1.style.display = 'block'
        clickIcon2.style.display = 'block'
        clickIcon4.style.display = 'block'
    }
    else if (triggerOn && headerOn) {
        trigger.classList.remove('on')
        header.classList.remove('active');
        mainLogo.src = 'images/header-main-logo.png';
        
        if (triggerMainMenu.style.display === 'block') {
            triggerMainMenu.style.display = 'none'
            
            if (matchMedia("screen and (min-width: 760px)").matches) {
                clickIcon1.style.display = 'block'
            }else {
                clickIcon1.style.display = 'none'
            }
            clickIcon4.style.display = 'none'
        }
    }
    else {
        trigger.classList.add('on')
        header.classList.add('active')
        mainLogo.src = 'images/header-main-logo-hover.png';
        
        if (triggerMainMenu.style.display != 'block') {
            triggerMainMenu.style.display = 'block'
            clickIcon1.style.display = 'block'
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
            clickIcon4.style.display = 'block'
        })
            
        if (!itemOn) {
            item.classList.add('on')
            clickIcon1.style.display = 'none'
            clickIcon2.style.display = 'none'
            clickIcon4.style.display = 'none'
        }
    })
})


//  메인비주얼 애니메이션

const spans = document.querySelectorAll('.line-pattern span');

/* ===============================
   기준 해상도 (PC 기준)
   =============================== */
const PC_BASE_WIDTH = 1920;

/* ===============================
   ⭐ 기준 좌표 (절대 수정 X)
   =============================== */
const BASE_STATES = [
    { x: 0, y: 200, rotate: -45 },
    { x: 500, y: -200, rotate: -45 },
    { x: 1300, y: -30, rotate: 0 },
    { x: 2000, y: 250, rotate: -45 }
];

/* ===============================
   순환 순서 (이것만 변경됨)
   =============================== */
let order = [0, 1, 2, 3];

/* ===============================
   크기 설정
   =============================== */
const OVAL_HEIGHT_PC = 945;
const OVAL_HEIGHT_MO = 444;
const CIRCLE_HEIGHT_PC = 240;

/* ===============================
   모바일 미세 조정 값
   =============================== */
const MOBILE_Y_OFFSET = 200; // ↓ 전체 Y 보정
const MOBILE_X_GAP = 60; // → span 간 간격
const MOBILE_X_OFFSET = -130;   // 전체 X 이동 (추가)

/* ===============================
   애니메이션 타이밍
   =============================== */
const INTERVAL = 4500;
const SHRINK_TIME = 900;
const MOVE_TIME = 1600;

/* ===============================
   반응형 설정 계산
   =============================== */
function getResponsiveConfig() {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        return {
            states: order.map(i => BASE_STATES[i]),
            ovalHeight: OVAL_HEIGHT_PC,
            circleHeight: CIRCLE_HEIGHT_PC
        };
    }

    const ratio = window.innerWidth / PC_BASE_WIDTH;

    return {
        states: order.map(i => ({
            x:
                BASE_STATES[i].x * ratio +
                MOBILE_X_OFFSET +
                i * MOBILE_X_GAP,  
            y: BASE_STATES[i].y * ratio + MOBILE_Y_OFFSET,
            rotate: BASE_STATES[i].rotate
        })),
        ovalHeight: OVAL_HEIGHT_MO,
        circleHeight: 87
    };
}

/* ===============================
   위치 적용
   =============================== */
function applyPosition(extraY = 0) {
    const { states } = getResponsiveConfig();

    spans.forEach((span, i) => {
        const s = states[i];
        span.style.transform =
            `translate(${s.x}px, ${s.y + extraY}px) rotate(${s.rotate}deg)`;
    });
}

/* ===============================
   타원 상태
   =============================== */
function setOval() {
    const { ovalHeight } = getResponsiveConfig();

    spans.forEach(span => {
        span.style.height = ovalHeight + 'px';
    });

    applyPosition(0);
}

/* ===============================
   원형 (중앙 기준 압축)
   =============================== */
function setCircleCentered() {
    const { ovalHeight, circleHeight } = getResponsiveConfig();
    const offset = (ovalHeight - circleHeight) / 2;

    spans.forEach(span => {
        span.style.height = circleHeight + 'px';
    });

    applyPosition(offset);
}

/* ===============================
   초기 상태
   =============================== */
setOval();

/* ===============================
   애니메이션 루프
   =============================== */
setInterval(() => {

    // 1️⃣ 중앙 기준 압축
    setCircleCentered();

    setTimeout(() => {

        // 2️⃣ 순서만 순환 (좌표는 고정!)
        order.unshift(order.pop());

        setCircleCentered();

        setTimeout(() => {
            // 3️⃣ 원래 타원 복귀
            setOval();
        }, MOVE_TIME);

    }, SHRINK_TIME);

}, INTERVAL);

/* ===============================
   리사이즈 대응
   =============================== */
window.addEventListener('resize', setOval);

// 입찰 버튼

let tabButtons = document.querySelectorAll('.info-tab-btn');
let contents = document.querySelectorAll('.info-tab-items');
// console.log(contents)

tabButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
        tabButtons.forEach(function(b){
            console.log(b.id)
            b.classList.remove('on');
        })
        this.classList.add('on')

        contents.forEach(function(con){

            con.classList.remove('on')
        })

        let target = btn.getAttribute('data-tab');
        // console.log(target);
        contents.forEach(function(con){
            // console.log(con.id)
            if(con.id === target){
                console.log(con.id)
                con.classList.add('on')
            }else{
                con.classList.remove('on')
            }
        })
    })
})
// 반응형 미디어 탭버튼

let mediaTabBtn = document.querySelectorAll('.media-tab-btn');
let mediaBox = document.querySelectorAll('.media-box');


mediaTabBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        mediaTabBtn.forEach(function(b){
            console.log(b.id)
            b.classList.remove('on');
        })
        this.classList.add('on')

        mediaBox.forEach(function(mb){

            mb.classList.remove('on')
        })

        let target = btn.getAttribute('data-tab');
        
        mediaBox.forEach(function(mb){
            
            if(mb.id === target){
                
                mb.classList.add('on')
            }else{
                mb.classList.remove('on')
            }
        })
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



