{
    // Retrieve the input elements
const nameInput = document.getElementById('user_name');
const authorInput = document.getElementById('author_name');
const productUrlInput = document.getElementById('product_url');
const videoUrlInput = document.getElementById('video_url');
const categorySelect = document.getElementById('product_category');
const descriptionTextarea = document.getElementById('description');
const button = document.querySelector("[type=submit]");


// Check if there is saved data in session storage
if (window.sessionStorage.getItem('formData')) {
  // Retrieve the saved data
  const savedData = JSON.parse(window.sessionStorage.getItem('formData'));

  // Populate the input elements with saved data
  nameInput.value = savedData.name;
  authorInput.value = savedData.author;
  productUrlInput.value = savedData.productUrl;
  videoUrlInput.value = savedData.videoUrl;
  categorySelect.value = savedData.category;
  descriptionTextarea.value = savedData.description;
    // descriptionTextarea.value = "";
}

// Add event listener to the submit button
button.addEventListener('click', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Save the input data to session storage
  const formData = {
    name: nameInput.value,
    author: authorInput.value,
    productUrl: productUrlInput.value,
    videoUrl: videoUrlInput.value,
    category: categorySelect.value,
    description: descriptionTextarea.value
  };

  // Store the data in session storage
  window.sessionStorage.setItem('formData', JSON.stringify(formData));

  // Perform any other actions or submit the form programmatically
   window.location.href = "../html/kadai07.html"; // Replace "new-page.html" with the desired URL
});
}    