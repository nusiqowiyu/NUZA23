function gakmau(id){
        var mau=document.getElementBy('btn_gakmau');
        var i = Math. floor(Math.random()*300)+1;
        var j = Math. floor(Math.random()*100)+mau.offsetTop;
        id.style.left = i +'px';
        id.style.top = j + 'px';
    }