

function ReadMoreBlog(postid, buttonid) {
    let post = document.getElementById(postid);
    post.style.maxHeight = "9000px";

    document.getElementById(buttonid).onclick = function () { ReadLessBlog(postid, buttonid);}
}

function ReadLessBlog(postid, buttonid) {
    let post = document.getElementById(postid);
    post.style.maxHeight = "50px";

    document.getElementById(buttonid).onclick = function () { ReadMoreBlog(postid, buttonid); }
}
//postid