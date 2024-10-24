document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");

    // Function to toggle the search input
    function toggleSearch() {
        if (searchInput.style.display === "none" || searchInput.style.display === "") {
            searchInput.style.display = "inline-block";
        } else {
            searchInput.style.display = "none";
        }
    }

    // Open the search input when the microscope icon is clicked
    searchButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        toggleSearch();
    });

    // Close the search input when clicking anywhere else on the page
    document.addEventListener("click", function (event) {
        if (event.target !== searchInput && event.target !== searchButton) {
            searchInput.style.display = "none";
        }
    });

    // Prevent the document click event from closing the search form
    searchInput.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
