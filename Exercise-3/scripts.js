// Save user data and redirect
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const role = document.querySelector('input[name="role"]:checked').value;
  
  localStorage.setItem('userName', name);
  localStorage.setItem('userRole', role);
  
  location.href = "information.html";
});

// Load user data on the information page
window.addEventListener('DOMContentLoaded', function() {
  const name = localStorage.getItem('userName');
  const role = localStorage.getItem('userRole');
  
  if (name && role) {
      const welcomeMessage = document.getElementById('welcomeMessage');
      const description = document.getElementById('description');
      
      if (role === 'instructor') {
          welcomeMessage.textContent = `Welcome Instructor ${name}`;
          welcomeMessage.classList.add('instructor');
          description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      } else if (role === 'student') {
          welcomeMessage.textContent = `Welcome Student ${name}`;
          welcomeMessage.classList.add('student');
          description.textContent = "Different Lorem ipsum text for students.";
      }
  }
});
