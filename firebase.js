function showNotification(message, type = 'success', duration = 4000) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification-toast ${type}`;
  
  // Add icon based on type
  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  notification.innerHTML = `
    <i class="fas ${icon}"></i>
    <span class="notification-message">${message}</span>
    <div class="notification-progress">
      <div class="notification-progress-bar"></div>
    </div>
  `;
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => {
    notification.classList.add('visible');
    
    // Animate progress bar
    const progressBar = notification.querySelector('.notification-progress-bar');
    progressBar.style.width = '0%';
    progressBar.style.transition = `width ${duration}ms linear`;
    setTimeout(() => progressBar.style.width = '0%', 50);
    
  }, 50);
  
  // Remove after duration
  setTimeout(() => {
    notification.classList.remove('visible');
    setTimeout(() => notification.remove(), 300);
  }, duration);
  
  // Allow manual dismissal by tapping
  notification.addEventListener('click', () => {
    notification.classList.remove('visible');
    setTimeout(() => notification.remove(), 300);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Firebase (same config as before)
  const firebaseConfig = {
    apiKey: "AIzaSyCuZXC1J1R15kejNO7_4430qM2qkcdcxQE",
    authDomain: "chix-to-chix.firebaseapp.com",
    databaseURL: "https://chix-to-chix-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chix-to-chix",
    storageBucket: "chix-to-chix.appspot.com",
    messagingSenderId: "913059913710",
    appId: "1:913059913710:web:754b9101988c61de8478ff",
    measurementId: "G-862F051QMV"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const auth = firebase.auth();

  // Notification bell functionality
  const bell = document.querySelector('.notification-bell');
  const dropdown = document.querySelector('.notification-dropdown');
  const modal = document.getElementById('tableModal');
  const closeModal = document.querySelector('.close-modal');
  
  if (bell && dropdown) {
    // Toggle dropdown when bell is clicked
    bell.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function(e) {
      if (!bell.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });

    // Handle notification items
    document.querySelectorAll('.notification-item').forEach(item => {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        const action = this.dataset.action;
        document.getElementById('modalTitle').textContent = `Table Number (${this.textContent})`;
        modal.style.display = 'block';
        dropdown.style.display = 'none';
        
        // Set up submit button
        document.getElementById('submitTable').onclick = function() {
          const tableNumber = document.getElementById('tableNumber').value;
          if (tableNumber) {
            // Sign in anonymously first
            auth.signInAnonymously()
              .then(() => {
                // Send request to Firebase
                const requestsRef = database.ref('requests');
                requestsRef.push({
                  action: action,
                  tableNumber: tableNumber,
                  timestamp: firebase.database.ServerValue.TIMESTAMP,
                  status: 'pending'
                });
                
                // Reset form
                modal.style.display = 'none';
                document.getElementById('tableNumber').value = '';
                showNotification(`Table #${tableNumber} request sent!`, 'success', 4000);
              })
              .catch(error => {
                console.error("Error:", error);
                showNotification("Failed to send request. Please try again.", 'error', 4000);
              });
          }
        };
      });
    });

    // Close modal
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
});
