document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");

    // Sample data (replace this with actual API call)
    const resources = [
        { id: 1, name: "Resource 1", tag: "request" },
        { id: 2, name: "Resource 2", tag: "user" },
        // Add more resources as needed
    ];

    // Function to render resource cards
    function renderResourceCards(resources) {
        const resourceContainer = document.createElement("div");

        resources.forEach(resource => {
            const resourceCard = document.createElement("div");
            resourceCard.className = "resource-card";

            // Render resource card content here

            resourceContainer.appendChild(resourceCard);
        });

        return resourceContainer;
    }

    // Function to render search bar
    function renderSearchBar() {
        const searchBar = document.createElement("div");
        searchBar.className = "search-bar";

        // Render search bar content here

        return searchBar;
    }

    // Function to render tabs
    function renderTabs() {
        const tabsContainer = document.createElement("div");
        tabsContainer.className = "tabs";

        // Render tabs content here

        return tabsContainer;
    }

    // Function to render Add Item button
    function renderAddItemButton() {
        const addItemButton = document.createElement("button");
        addItemButton.textContent = "Add Item";
        addItemButton.addEventListener("click", function () {
            // Navigate to the Add Resource Item Page
            renderAddResourceItemPage();
        });

        return addItemButton;
    }

    // Function to render Home Page
    function renderHomePage() {
        root.innerHTML = "";

        const homePage = document.createElement("div");
        homePage.className = "home-page";

        homePage.appendChild(renderTabs());
        homePage.appendChild(renderSearchBar());
        homePage.appendChild(renderResourceCards(resources));
        homePage.appendChild(renderAddItemButton());

        root.appendChild(homePage);
    }

    // Function to render Add Resource Item Page
    function renderAddResourceItemPage() {
        // Implement rendering for Add Resource Item Page
        // Include form, validations, and Toastify notifications
    }

    // Initial rendering
    renderHomePage();
});
