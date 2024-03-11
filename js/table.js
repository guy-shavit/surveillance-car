document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and close button elements
    var modal = document.getElementById('imageModal');
    var closeModal = document.getElementsByClassName('close')[0];
  
    // Get all images inside the table
    var tableImages = document.querySelectorAll('table img');
  
    // Function to handle image click and display the modal
    function openModal(imageSrc) {
      modal.style.display = 'block';
      document.getElementById('enlargedImg').src = imageSrc;
    }
  
    // Function to close the modal
    function closeModalFn() {
      modal.style.display = 'none';
    }
  
    // Add click event listeners to table images
    tableImages.forEach(function (image) {
      image.addEventListener('click', function () {
        openModal(this.src);
      });
    });
  
    // Add click event listener to the close button
    closeModal.addEventListener('click', closeModalFn);
  
    // Close modal if user clicks outside the modal
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        closeModalFn();
      }
    });
  });
  