// Specify where the comments will be posted
const commentContainer = document.getElementById('comment-container');
document.getElementById('btn-post').addEventListener('click', function() {
    const newComment = document.getElementById('new-comment').value;

    if (newComment === '') {
        alert('You must write something');
    } else {
        const commentElement = document.createElement('p');
        commentElement.innerText = newComment;
        commentContainer.appendChild(commentElement);

        // Clear comment box
        document.getElementById('new-comment').value = '';
        saveData();
    }
});
function saveData() {
    localStorage.setItem('data', commentContainer.innerHTML);
}
function showTask() {
    commentContainer.innerHTML = localStorage.getItem('data');
}

showTask();
