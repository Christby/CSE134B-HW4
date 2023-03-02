let length = 0;

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

function editItem(id) {
    let item = document.getElementById(id);
    let window = document.getElementById('edit-post');
    window.showModal();
    let post = item.parentElement;
    console.log(post);
    let elements = post.querySelectorAll('*');
    console.log(elements);
    let prev_title = post.firstChild.innerText;
    let prev_date = post.firstChild.nextSibling.nextSibling.innerText;
    let prev_summary = post.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.innerText;
    // let elements = window.querySelectorAll('*');
    // console.log(elements[2] === document.getElementById('new-title'))
    // elements[2].value = prev_title;
    // elements[5].value = prev_date;
    // elements[8].value = prev_summary;
    let _title = document.getElementById('new-title');
    let _date = document.getElementById('new-date');
    let _summary = document.getElementById('new-summary');
    _title.value = prev_title;
    _date.value = prev_date;
    _summary.value = prev_summary;
    let update = document.getElementById('update');
    update.addEventListener('click', () => {
        window.close();
        let title = document.getElementById('new-title').value;
        let date = document.getElementById('new-date').value;
        let summary = document.getElementById('new-summary').value;
        console.log("this is id: ");
        console.log(id);
        console.log("this is the post object: ");
        console.log(document.getElementById(id));
        let post = document.getElementById(id).parentElement;
        console.log(post);
        post.innerHTML = `<div>${title}</div> <div>${date}</div> <div>${summary}</div>
                        <b id="edit${length}" onClick="editItem('edit${length}')">Edit</b> | 
                        <b id="delete" onClick="deleteItem(this)">Delete</b>`;
    })
    let cancel = document.getElementById('cancel-update');
    cancel.addEventListener('click', () => {
        let window = document.getElementById('edit-post');
        window.close();
    })
}

function deleteItem(item) {
    if (confirm("Are you sure you want to delete this post?")){
        let post = item.parentElement;
        let postList = item.parentElement.parentElement;
        postList.removeChild(post);
        length -= 1;
    }
}

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    let window = document.getElementById('add-post');
    window.close();
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let summary = document.getElementById('summary').value;
    let blogList = document.getElementById('blogList');
    let post = document.createElement('li');
    post.innerHTML = `<div>${title}</div> <div>${date}</div> <div>${summary}</div> 
                    <b id="edit${length}" onClick="editItem('edit${length}')">Edit</b> | 
                    <b id="delete" onClick="deleteItem(this)">Delete</b>`;
    length += 1;
    blogList.appendChild(post);
})