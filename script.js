// Tìm kiếm nội dung theo từ khóa
function searchContent() {
    var input, filter, sections, cards, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toLowerCase();
    sections = document.querySelectorAll('.section');
    
    sections.forEach(function(section) {
      cards = section.querySelectorAll('.card, .experience, .voice-card, .checkin-item');
      cards.forEach(function(card) {
        txtValue = card.textContent || card.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
  
  // Xử lý form đăng bài check-in
  document.getElementById('checkinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var location = event.target.location.value;
    var description = event.target.description.value;
    var image = event.target.image.files[0];
  
    // Thêm bài check-in vào phần cộng đồng (lặp qua thêm bài check-in mới vào checkin-feed)
    var newCheckinItem = document.createElement('div');
    newCheckinItem.classList.add('checkin-item');
    newCheckinItem.innerHTML = `
      <img src="${URL.createObjectURL(image)}" alt="User Check-in" />
      <p>${location}</p>
      <p>${description}</p>
    `;
    
    document.querySelector('.checkin-feed').appendChild(newCheckinItem);
  
    // Reset form
    event.target.reset();
  });
  function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show'); // Thêm/ bỏ class 'show' để hiển thị/ẩn menu
  }
    