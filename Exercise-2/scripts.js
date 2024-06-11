// Fetch ToDo data and populate form
document.getElementById('fetchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const todoId = document.getElementById('todoId').value;
  
  fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(response => response.json())
      .then(data => {
          document.getElementById('editId').value = data.id;
          document.getElementById('editTitle').value = data.title;
          document.getElementById('editCompleted').checked = data.completed;
          
          document.getElementById('editForm').style.display = 'block';
      })
      .catch(error => {
          document.getElementById('responseMessage').textContent = `Error: ${error}`;
      });
});

// Update ToDo data
document.getElementById('editForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const todoId = document.getElementById('editId').value;
  const title = document.getElementById('editTitle').value;
  const completed = document.getElementById('editCompleted').checked;
  
  const updatedTodo = {
      id: todoId,
      title: title,
      completed: completed
  };
  
  fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTodo),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
  .then(response => {
      if (response.status === 200) {
          document.getElementById('responseMessage').textContent = `ToDo with ID: ${todoId} was updated successfully.`;
      } else {
          document.getElementById('responseMessage').textContent = `Failed to update ToDo. Status Code: ${response.status}`;
      }
  })
  .catch(error => {
      document.getElementById('responseMessage').textContent = `Error: ${error}`;
  });
});

// Handle Cancel button click
document.getElementById('cancelButton').addEventListener('click', function() {
  window.location.href = 'index.html';
});
