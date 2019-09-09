document.cookie = "path=;imgScr=images/Port_Harbor1-610x350.jpg";

function redirect(src){
    location.href = src;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

function setImage(imgElement){
    document.cookie = "imgScr=" + imgElement.src + ";";
    redirect("index.html");
    // alert(document.cookie);
    // document.getElementById('image').setAttribute('src', imgSrc);
}

window.onload = function(){
    if(document.location.href.split("/").slice(-1) == "index.html"){
        document.getElementById('image').setAttribute('src', getCookie("imgScr"));
        // document.getElementById('image').setAttribute('src', localStorage.imgScr);
    }
}