async function upvoteClickHandler(event) {
    event.preventDefault();

    // grab the id of the current post
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    // make a request to update the post through the upvote route
    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);