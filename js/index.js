window.onscroll = function() {
    var topScroll = document.body.scrollTop || document.documentElement.scrollTop; //滚动的距离,距离顶部的距离
    // console.log(topScroll, 'topScroll');
    // var space = document.getElementsByClassName("header")[0];
    var target = document.getElementsByClassName("fixed-header")[0];
    // var spaceOffsetHeight = space.offsetTop; //以spce的滚动高度为参照
    // console.log(spaceOffsetHeight, 'spaceOffsetHeight');
    if (topScroll > 70) {
        target.style.display = 'block';
    } else {
        target.style.display = 'none';
    }
}