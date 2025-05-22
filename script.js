const projects = {
    project1: [
        { src: "images/project1_1.png", caption: "Landing page" },
        { src: "images/project1_2.png", caption: "Establishment search results" },
        { src: "images/project1_3.png", caption: "Establishment page" },
        // Add more images and descriptions as needed
        { src: "images/project1_4.png", caption: "Map of establishments" },
        { src: "images/project1_5.png", caption: "Admin login" },
        { src: "images/project1_6.png", caption: "Establishment management" },
        { src: "images/project1_7.png", caption: "Create" },
        { src: "images/project1_8.png", caption: "Upload image" },
        { src: "images/project1_9.png", caption: "Toggle visibility" },
        { src: "images/project1_10.png", caption: "Error handling" },
        { src: "images/project1_11.png", caption: "Delete" },
        { src: "images/project1_12.png", caption: "Delete restrict" },
        { src: "images/project1_13.png", caption: "Cuisines" },
        { src: "images/project1_14.png", caption: "Export" }
    ],
    project2: [
        { src: "images/WCIM/SearchRecipe.png", caption: "Search Recipe" },
        { src: "images/WCIM/FilterRecipe.png", caption: "Filter Recipe" },
        { src: "images/WCIM/MobileFilters.png", caption: "Mobile Filters" },
        { src: "images/WCIM/ViewRecipe.png", caption: "View Recipe" },
        { src: "images/WCIM/SendSMS.png", caption: "Send SMS" },
        { src: "images/WCIM/SendEmail.png", caption: "Send Email" },
        { src: "images/WCIM/Binder.png", caption: "Recipe Binder" },
        { src: "images/WCIM/ShareTwitter.png", caption: "Share Twitter" },
        { src: "images/WCIM/Login.png", caption: "Login" },
        { src: "images/WCIM/TwoFactor.png", caption: "Two-factor Authentication" },
        { src: "images/WCIM/Register.png", caption: "Register" },
        { src: "images/WCIM/ConfirmEmail.png", caption: "Confirm Email" },
        { src: "images/WCIM/AdminTags.png", caption: "Admin - Tag management" },
        { src: "images/WCIM/AddTagToRecipe.png", caption: "Admin - Add Tag to Recipe" },
        { src: "images/WCIM/AdminRoles.png", caption: "Admin - Roles" },

        // Add more images and descriptions as needed
    ],
    project3: [
        { src: "images/ChatClass/Landingpage.png", caption: "Home / Popular Categories" },
        { src: "images/ChatClass/SearchChat.png", caption: "Search Chat" },
        { src: "images/ChatClass/SearchCategory.png", caption: "Search Category" },
        { src: "images/ChatClass/CreateRoom.png", caption: "Create Room" },
        { src: "images/ChatClass/Chat.png", caption: "Chat" },
        // Add more images and descriptions as needed
    ],
    project4: [
        { src: "images/StockAnalyser/FormAndResults1080.png", caption: "Form and results" },
        { src: "images/StockAnalyser/DaysPassed1080.png", caption: "Stock analysis" },
        // Add more images and descriptions as needed
    ],
    project5: [
        { src: "images/GistDownloader/Downloading1080.png", caption: "Downloading Gists" },
        { src: "images/GistDownloader/DownloadComplete1080.png", caption: "Download Complete" },
        { src: "images/GistDownloader/DownloadsFolder1080.png", caption: "Downloads Folder" },
        { src: "images/GistDownloader/DownloadedGists1080.png", caption: "Downloaded Gists" },
        // { src: "images/GistDownloader/25601440res.png", caption: "2560 x 1440 res" },
        // { src: "images/GistDownloader/19201080res.png", caption: "1920 x 1080 res" },
        // Add more images and descriptions as needed
    ],
    project6: [ // Uses 2560x1440 resolution with 1920x1440 browser responsive design
        { src: "images/InsuranceCalculator/Form.png", caption: "Form" },
        { src: "images/InsuranceCalculator/Calculate.png", caption: "Calculate" },
        // Add more images and descriptions as needed
    ],
    project7: [
        { src: "images/CashFlowCalculator/CashFlowCalculatorForm.png", caption: "Form" },
        { src: "images/CashFlowCalculator/CashFlowCalculatorFormFilled.png", caption: "Form inputs" },
        { src: "images/CashFlowCalculator/CashFlowCalculatorResults.png", caption: "Years" },
        { src: "images/CashFlowCalculator/CashFlowCalculatorResults2.png", caption: "Results" },
        // Add more images and descriptions as needed
    ],
    project8: [
        { src: "images/LaptopExtractor/ExtractSpecifications.png", caption: "URL input" },
        { src: "images/LaptopExtractor/ExtractSpecificationsExtracting.png", caption: "Extracting" },
        { src: "images/LaptopExtractor/ExtractSpecificationsError.png", caption: "Error" },
        { src: "images/LaptopExtractor/ExtractSpecificationsSuccess.png", caption: "Success" },
        { src: "images/LaptopExtractor/ExtractedLaptops1.png", caption: "Excel output 1" },
        { src: "images/LaptopExtractor/ExtractedLaptops2.png", caption: "Excel output 2" },
        // Add more images and descriptions as needed
    ],
    
};

function openModal(projectId) {
    const modal = document.getElementById(projectId);
    const modalContent = document.getElementById(`${projectId}-images`);
    modalContent.innerHTML = '';

    projects[projectId].forEach(image => {
        const modalItem = document.createElement('div');
        modalItem.classList.add('modal-item');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.caption;

        const caption = document.createElement('p');
        caption.classList.add('caption');
        caption.textContent = image.caption;

        modalItem.appendChild(img);
        modalItem.appendChild(caption);

        modalContent.appendChild(modalItem);
    });

    modal.style.display = "flex";

    // Add event listener to close modal when clicking outside of the images
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(projectId);
        }
    });
}

function closeModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = "none";

    // Remove the event listener to prevent multiple bindings
    modal.removeEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(projectId);
        }
    });
}
