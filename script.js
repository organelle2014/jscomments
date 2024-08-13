// Specify where the comments will be posted
const commentContainer = document.getElementById('comment-container');

// Add event listener to comment button 
document.getElementById('btn-post').addEventListener('click', function() {
    // Collect data through variables
    const newComment = document.getElementById('new-comment').value;

    if (newComment === '') {
        alert('You must write something');
    } else {
        const commentElement = document.createElement('p');
        commentElement.innerText = newComment;
        commentContainer.appendChild(commentElement);

        // Clear comment box
        document.getElementById('new-comment').value = '';

        // Save data
        saveData();
    }
});

// Capture button click event
commentContainer.addEventListener('click', function(e) {
    // Your code for handling clicks on the comment container
});
 
function saveData() {
    localStorage.setItem('data', commentContainer.innerHTML);
}
function showTask() {
    commentContainer.innerHTML = localStorage.getItem('data');
}

showTask();
