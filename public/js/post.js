const commentEl = document.querySelector('#comment');

const newFormHandler = async (event) => {
    event.preventDefault();
  

    const contents = commentEl.value;
    const post_id = commentEl.dataset.postid
  
    if (contents) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ contents, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add comment');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('')
  //   .addEventListener('click', delButtonHandler);
  