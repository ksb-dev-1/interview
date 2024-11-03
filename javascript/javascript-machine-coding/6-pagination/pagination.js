// Sample dataset (100 items)
const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

let currentPage = 1;
const itemsPerPage = 5;
const totalPages = Math.ceil(data.length / itemsPerPage);

// Function to render the items for the current page
function renderPage() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = data.slice(start, end);

  // Update the content
  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = pageItems
    .map((item) => `<div>${item}</div>`)
    .join("");

  // Update the pagination info
  const pageInfo = document.getElementById("page-info");
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  // Enable/disable buttons
  document.getElementById("prev-btn").disabled = currentPage === 1;
  document.getElementById("next-btn").disabled = currentPage === totalPages;

  // Update the "Jump to Page" input
  const jumpToInput = document.getElementById("jump-to-page");
  jumpToInput.value = currentPage; // Sync input with the current page
  jumpToInput.max = totalPages; // Set the max limit
}

// Go to the next page
function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    renderPage();
  }
}

// Go to the previous page
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderPage();
  }
}

// Jump to a specific page
function jumpToPage() {
  const jumpToInput = document.getElementById("jump-to-page");
  const pageNumber = parseInt(jumpToInput.value, 10);

  if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
    currentPage = pageNumber;
    renderPage();
  } else {
    alert(`Please enter a valid page number between 1 and ${totalPages}`);
  }
}

// Initial render
renderPage();
