let blogLists = localStorage.getItem("blogList");
let blogList = document.getElementById('blogList');
blogList.innerHTML =  blogLists;
let index = blogList.getElementsByTagName("li").length;


let btn = document.getElementById('start-button');
btn.addEventListener('click', () => {
    let window = document.getElementById('add-post');
    window.showModal();
})

let cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => {
    let window = document.getElementById('add-post');
    window.close();
})

function editItem(idx) {
    let item = idx;
    localStorage.setItem("idx",idx.id); 
    let window = document.getElementById('edit-post');
    let post = item;
    window.showModal();
    let prev_title = post.firstChild.innerText;
    let prev_date = post.firstChild.nextSibling.nextSibling.innerText;
    let prev_summary = post.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.innerText;
    let default_title = document.getElementById('new-title');
    let default_date = document.getElementById('new-date');
    let default_summary = document.getElementById('new-summary');
    default_title.value = prev_title;
    default_date.value = prev_date;
    default_summary.value = prev_summary;
}

let update = document.getElementById('update');
update.addEventListener('click', () => {
    let title = document.getElementById('new-title').value;
    let date = document.getElementById('new-date').value;
    let summary = document.getElementById('new-summary').value;
    if(!title){
        alert('please fill in the blank of the title');

    } else if(!date){
        alert('please fill in the blank of the date');

    } else if(!summary){
        alert('please fill in the blank of the summary');

    } else {
        let idx = localStorage.getItem("idx");
        let post = document.getElementById(idx);
        post.innerHTML = '';
        post.innerHTML = `<div class="b_title">${title}</div> 
                        <div  class="b_date">${date}</div> 
                        <div class="b_summary">${summary}</div>
                        <i id="aa_${idx}" class="fas fa-pencil-alt" onClick="editItem(${idx})">Edit</i> | 
                        <i id="delete" class="fas fa-trash" onClick="deleteItem(${idx})">Delete</i>`;
        localStorage.setItem("blogList",document.getElementById('blogList').innerHTML); 
        let window = document.getElementById('edit-post');
        window.close();
    }
})

let cancels = document.getElementById('cancel-update');
    cancels.addEventListener('click', () => {
        let window = document.getElementById('edit-post');
        window.close();
    })

function deleteItem(item) {
    if (confirm("Are you sure you want to delete this post?")){
        let post = item;
        let postList = document.getElementById('blogList');
        postList.removeChild(post);
        localStorage.setItem("blogList",postList.innerHTML); 
    }
}

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let summary = document.getElementById('summary').value;
    if(!title){
        alert('please fill in the blank of the title');

    } else if(!date){
        alert('please fill in the blank of the date');

    } else if(!summary){
        alert('please fill in the blank of the summary');

    } else {
        let window = document.getElementById('add-post');
        window.close();
        
        let blogList = document.getElementById('blogList');
        let post = document.createElement('li');
        post.innerHTML = `<div class="b_title">${title}</div> 
                        <div class="b_date">${date}</div> 
                        <div class="b_summary">${summary}</div> 
                        <i id="${index}" class="fas fa-pencil-alt" onClick="editItem(newli${index})">Edit</i> | 
                        <i id="delete" class="fas fa-trash" onClick="deleteItem(newli${index})">Delete</i>`;
        post.setAttribute("id", `newli${index}`);
        index ++;
        blogList.appendChild(post);
        localStorage.setItem("blogList",blogList.innerHTML); 
    }
})