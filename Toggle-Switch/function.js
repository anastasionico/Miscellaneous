function changeColor(){
    if(document.getElementById('labelBlog').style.color === "rgb(255, 0, 0)"){
        document.getElementById("labelBlog").style.color="#aaa";
        document.getElementById("labelVideo").style.color="#f00";
    }else{
        document.getElementById("labelBlog").style.color="#f00";
        document.getElementById("labelVideo").style.color="#aaa";
    }
    return false;
}
