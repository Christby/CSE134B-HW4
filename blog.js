let index = 0;

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
    let item = document.getElementById(idx); // idx to id here
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
    let default_title = document.getElementById('new-title');
    let default_date = document.getElementById('new-date');
    let default_summary = document.getElementById('new-summary');
    default_title.value = prev_title;
    default_date.value = prev_date;
    default_summary.value = prev_summary;
    
    let update = document.getElementById('update');
    update.addEventListener('click', () => {
        let title = document.getElementById('new-title').value;
        let date = document.getElementById('new-date').value;
        let summary = document.getElementById('new-summary').value;
        // console.log(`This is id: edit${idx}`);
        console.log("this is the post object: ");
        console.log(document.getElementById(idx).parentElement); // idx to id here
        let post = document.getElementById(idx).parentElement; // idx to id here and below
        post.innerHTML = `<div>${title}</div> <div>${date}</div> <div>${summary}</div>
                        <b id="edit${idx}" onClick="editItem('edit${idx}')">Edit</b> | 
                        <b id="delete" onClick="deleteItem(this)">Delete</b>`;
        let window = document.getElementById('edit-post');
        window.close();
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
                    <b id="edit${index}" onClick="editItem('edit${index}')">Edit</b> | 
                    <b id="delete" onClick="deleteItem(this)">Delete</b>`;
    index ++;
    blogList.appendChild(post);
})