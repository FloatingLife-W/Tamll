var oUl = document.getElementsByClassName('ul')[0];
var nav_tab_header = oUl.getElementsByTagName('li');
var nav = document.getElementsByClassName('nav_tab')[0];
var allUl = nav.getElementsByTagName('ul');
for (var i = 0; i < nav_tab_header.length; i++) {
    (function (k) {
        nav_tab_header[k].onmouseover = function () {
            for (var j = 0; j < nav_tab_header.length; j++) {
                nav_tab_header[j].className = 'nav_tab_header left';
                allUl[j].style.display = 'none';
            }
            this.className = 'nav_tab_bg left';
            allUl[k].style.display = 'block';
        }
    })(i)
}

var nav_Item = document.getElementsByClassName('nav_item');
var oTab = document.getElementsByClassName('tab');
var oUl1 = document.getElementsByClassName('ul1')[0];
var oLi = oUl1.getElementsByTagName('li');
oUl1.onmouseover = function (e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.tagName == 'LI') {
        var index = [].slice.call(oLi, 0).indexOf(target);
        for (var j = 0; j < oTab.length; j++) {
            oTab[j].style.display = 'none'
        }
        oTab[index].style.display = 'block'
    }
}
oUl1.onmouseleave = function (e) {
    for (var j = 0; j < oTab.length; j++) {
        oTab[j].style.display = 'none'
    }
}


// 轮播图
var oBox = document.getElementsByClassName('box')[0];
var oImg = oBox.getElementsByTagName('img');
var oLi1 = oBox.getElementsByTagName('li');
var num = 0;
var timer = null;
for (var i = 0; i < oLi1.length; i++) {
    // 小方块切换
    oLi1[i].index = i;
    oLi1[i].onmousemove = function () {
        num = this.index
        changeState()
    }
}
function changeState() {
    for (var j = 0; j < oLi1.length; j++) {
        oLi1[j].className = '';
        oImg[j].className = '';
    }
    oLi1[num].className = 'active';
    oImg[num].className = 'active'

}
// 自动轮播
timer = setInterval(function () {
    num++;
    if (num > oImg.length - 1) {
        num = 0;
    }
    changeState()
}, 5000)
oBox.onmouseover = function () {
    clearInterval(timer)
};
oBox.onmouseout = function () {
    timer = setInterval(function () {
        num++;
        if (num > oImg.length - 1) {
            num = 0;
        }
        changeState()
    }, 5000)

}


// 小轮播图
var tSH = document.getElementsByClassName('two-shuffling-head')[0];
var tSH_Li = tSH.getElementsByTagName('li');
var oPic = document.getElementsByClassName('two-shuffling-content-pic');
for (var i = 0; i < tSH_Li.length; i++) {
    (function (e) {
        tSH_Li[e].onmouseover = function () {
            for (var j = 0; j < tSH_Li.length; j++) {
                tSH_Li[j].className = '';
                oPic[j].style.display = 'none';
            }
            tSH_Li[e].className = 'two-shuffling-head-bg';
            oPic[e].style.display = 'block';
        }
    })(i)

}
// 自动轮播
var num1 = 0;
var twoGrid = document.getElementsByClassName('two-grid')[0];
timer1 = setInterval(function () {
    num1++;
    if (num1 > tSH_Li.length - 1) {
        num1 = 0;
    }
    tSH_Li[num1].onmouseover();
}, 1500)
twoGrid.onmouseover = function () {
    clearInterval(timer1);
}
twoGrid.onmouseout = function () {
    timer1 = setInterval(function () {
        num1++;
        if (num1 > tSH_Li.length - 1) {
            num1 = 0;
        }
        tSH_Li[num1].onmouseover();
    }, 1500)
}


// 左侧导航栏滚动效果
var leftBar = document.getElementsByClassName('left-bar')[0];
var topSearch = document.getElementsByClassName('top-search')[0];
var leftNavBody = document.getElementsByClassName('left-nav-body')[0];
var leftMuiNav = document.getElementsByClassName('left-mui-nav');
var oTmall = document.getElementsByClassName('tmall');
var navBack = document.getElementsByClassName('nav-back')[0];
var timer2 = null;
var timer3 = null;
var i = 0;
// 点击效果
leftNavBody.onclick = function (e) {
    var index = ([].slice.call(leftMuiNav, 1).indexOf(e.target));
    var scrollY = window.pageYOffset;
    if (![].slice.call(e.target.classList, 0).indexOf('nav-back')) {

        var speed = parseFloat((0 - scrollY) / 10);
        timer3 = setInterval(function () {
            window.scrollBy(0, speed);
            i++;
            if (i == 10) {
                clearInterval(timer3);
                i = 0;
            }
        }, 25);
        return false;
    };
    var target = oTmall[index].offsetTop;
    var speed = parseFloat((target - scrollY) / 10);
    timer2 = setInterval(function () {
        window.scrollBy(0, speed);
        i++;
        if (i == 10) {
            clearInterval(timer2);
            i = 0;
        }
    }, 25);

}
// 滚动效果
var leftMuiNavBg = document.getElementsByClassName('left-mui-nav')[0];
var key1 = true,
    key2 = true,
    key3 = true,
    key4 = true,
    key5 = true,
    key6 = true,
    key7 = true;
window.onscroll = function () {
    var scrollY = window.pageYOffset;
    for (let i = 0; i < oTmall.length; i++) {
        if (scrollY >= oTmall[i].offsetTop - window.innerHeight + 221) {
            leftMuiNavBg.classList.remove('active-bg');
            leftMuiNav[i + 1].classList.add('active-bg');
            leftMuiNavBg = leftMuiNav[i + 1];
        }
        if (scrollY <= oTmall[0].offsetTop - window.innerHeight + 221) {
            leftMuiNavBg.classList.remove('active-bg');
        }
    }


    // 滚动到某位置显示/隐藏

    // 左侧导航栏
    if (window.pageYOffset > 740) {
        leftBar.style.display = 'block';
    } else {
        leftBar.style.display = 'none';
    }

    // 顶部搜索栏
    if (window.pageYOffset > 900) {
        topSearch.style.display = 'block';
    } else {
        topSearch.style.display = 'none';
    }


    // 懒加载+预加载
    var smallImg = document.getElementsByClassName('small-img');
    var oPicText = document.getElementsByClassName('grid-price-title');
    var array = [
        ['../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre3.jpg',
            '../img/页面图片/active_content/grid-picre4.jpg',
            '../img/页面图片/active_content/grid-picre5.jpg',
            '../img/页面图片/active_content/grid-picre6.jpg'
        ],
        [
            '../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre3.jpg',
            '../img/页面图片/active_content/grid-picre4.jpg',
            '../img/页面图片/active_content/grid-picre5.jpg',
            '../img/页面图片/active_content/grid-picre6.jpg'
        ],
        ['../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre3.jpg',
            '../img/页面图片/active_content/grid-picre4.jpg',
            '../img/页面图片/active_content/grid-picre5.jpg',
            '../img/页面图片/active_content/grid-picre6.jpg'
        ],
        ['../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre3.jpg',
            '../img/页面图片/active_content/grid-picre4.jpg',
            '../img/页面图片/active_content/grid-picre5.jpg',
            '../img/页面图片/active_content/grid-picre6.jpg'
        ],
        ['../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre3.jpg',
            '../img/页面图片/active_content/grid-picre4.jpg',
            '../img/页面图片/active_content/grid-picre5.jpg',
            '../img/页面图片/active_content/grid-picre6.jpg'
        ],
        ['../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre3.jpg',
            '../img/页面图片/active_content/grid-picre4.jpg',
            '../img/页面图片/active_content/grid-picre5.jpg',
            '../img/页面图片/active_content/grid-picre6.jpg'
        ],
        ['../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre1.jpg',
            '../img/页面图片/active_content/grid-picre2.jpg',
            '../img/页面图片/active_content/grid-picre3.jpg',
            '../img/页面图片/active_content/grid-picre4.jpg',
            '../img/页面图片/active_content/grid-picre5.jpg',
            '../img/页面图片/active_content/grid-picre6.jpg'
        ]
    ]
    var target = window.innerHeight + window.pageYOffset
    if (key1) {
        if (oTmall[0].offsetTop < target) {
            render(0);
            // console.log(render);
            key1 = false;
        }
    }
    if (key2) {
        if (oTmall[1].offsetTop < target) {
            render(1);
            // console.log(render(1));
            key2 = false;
        }
    }
    if (key3) {
        if (oTmall[2].offsetTop < target) {
            render(2);
            key3 = false;
        }
    }
    if (key4) {
        if (oTmall[3].offsetTop < target) {
            render(3);
            key4 = false;
        }
    }
    if (key5) {
        if (oTmall[4].offsetTop < target) {
            render(4);
            key5 = false;
        }
    }
    if (key6) {
        if (oTmall[5].offsetTop < target) {
            render(5);
            key6 = false;
        }
    }
    if (key7) {
        if (oTmall[6].offsetTop < target) {
            render(6);
            key7 = false;
        }
    }

    function render(i) {
        array[i].forEach(function (ele, index) {

            setTimeout(function () {
                var oImg = new Image();
                oImg.classList.add('grid-price-img');
                oImg.src = ele;
                oImg.onload = function () {
                    console.log(i)
                    smallImg[i].getElementsByClassName('grid-price-content')[index].insertBefore(oImg,smallImg[i].getElementsByClassName('grid-price-title')[index]);
                }
            }, 500);
        })
    }
}

