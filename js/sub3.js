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

// 검색 필터 버튼
let filterButton = document.getElementById('filterButton');
let selectedFilter = document.getElementById('selectedFilter');
let filterList = document.getElementById('filterList');
let currentFilter = 'all';

filterButton.addEventListener('click', function(){
    filterList.classList.toggle('on')
})

// 옵션 클릭
filterList.addEventListener('click', (e) => {
  
    let text = e.target.textContent;
    let type = e.target.dataset.type;
  
    selectedFilter.textContent = text; 
    currentFilter = type;              
    
    filterList.classList.remove('on');
  });

// 검색창 초기화
let myTableSearchInput = document.querySelector('.my-table-search-input');
let myTableSearchBtn = document.getElementById('my-table-search-btn');

myTableSearchBtn.addEventListener('click', function () {
    myTableSearchInput.value = ''
})

// 방명록
let rowsPerPage = 10; // 한 페이지에 보여질 행의 개수
let rows = document.querySelectorAll('#my-table tbody tr') // 테이블의 모든 행
let rowsCount = rows.length; // 전체 행 개수 100/8 > 12.5 > 13
let pageCount = Math.ceil(rowsCount / rowsPerPage); // 페이지 수 개산
let numbers = document.querySelector('#numbers') //ol 페이지 번호 표시할 요소
let prevPageBtn = document.querySelector('.business-news-left-btn')  // 이전버튼
let prevPageBtnMax = document.querySelector('.business-news-left-btn-max')  // 맨 앞으로 오기 버튼
let nextPageBtn = document.querySelector('.business-news-right-btn') // 다음버튼
let nextPageBtnMax = document.querySelector('.business-news-right-btn-max') // 맨 뒤로 가기 버튼
let pageActiveIndex = 0; // 현재 보고 있는 페이지 그룹 번호
let currentPageNum = 0; // 현재 보고 있는 페이지 번호
let maxPageNum = 3; // 한번에 보여줄 페이지 그룹 최대개수

for (let i = 1; i <= pageCount; i++) {
    numbers.innerHTML += `<li><a href="">${i}</a></li>`
}

let numbersBtn = numbers.querySelectorAll('a')

numbersBtn.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        displayRow(idx);
    })
})

function displayRow(idx){
    let start = idx * rowsPerPage;
    let end = start + rowsPerPage;
    let rowsArray = [...rows];

    for(ra of rowsArray){
     ra.style.display='none'
    }
    // 현재 페이지에 해당하는 행만 표시
    let newRows = rowsArray.slice(start, end);
    // console.log(newRows)
    for(nr of newRows){
     nr.style.display=''
    }
    // 선택된 페이지 강조 표시
    // 다 지우고
    for(nb of numbersBtn){
       nb.classList.remove('active')
    }
    // 해당 인덱스만 클래스 추가
    numbersBtn[idx].classList.add('active')
    
   }
   displayRow(0)
  

   function displayPage(num){
    
    for(nb of numbersBtn){
        nb.style.display = 'none'
    }
    let totalPageCount = Math.ceil(pageCount/maxPageNum); 
    let pageArr = [...numbersBtn]; 
    let start = num * maxPageNum; 
    let end = start + maxPageNum; 
    let pageListArr = pageArr.slice(start, end);
    
    
    for(let item of pageListArr){
        item.style.display = 'block'
    }
   
    if(pageActiveIndex === 0){
        prevPageBtnMax.style.display = 'none'
        prevPageBtn.style.display = 'none'
    }else{
        prevPageBtnMax.style.display = 'block'
        prevPageBtn.style.display = 'block'
    }
  
    if(pageActiveIndex === totalPageCount - 1){
        nextPageBtnMax.style.display = 'none'
        nextPageBtn.style.display = 'none'
    }else{
        nextPageBtnMax.style.display = 'block'
        nextPageBtn.style.display = 'block'
    }
}
displayPage(0)


nextPageBtn.addEventListener('click', ()=>{

    let nextPageNum = pageActiveIndex * maxPageNum + maxPageNum;
    displayRow(nextPageNum); 
    ++pageActiveIndex; 
    displayPage(pageActiveIndex); 
})

prevPageBtn.addEventListener('click', ()=>{
    let prevPageNum = pageActiveIndex * maxPageNum - maxPageNum;
    displayRow(prevPageNum);
    --pageActiveIndex;
    displayPage(pageActiveIndex);
});

nextPageBtn.addEventListener('click', function(){
    
})
nextPageBtnMax.addEventListener('click', ()=>{

    currentPageNum = pageCount - 1;
    pageActiveIndex = Math.floor(currentPageNum / maxPageNum);
    console.log(pageActiveIndex)

    displayRow(currentPageNum);
    displayPage(pageActiveIndex);
})

prevPageBtnMax.addEventListener('click', ()=>{
    currentPageNum = 0;      
    pageActiveIndex = 0;     

    displayRow(currentPageNum);
    displayPage(pageActiveIndex);
});
