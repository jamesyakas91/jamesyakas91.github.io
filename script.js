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
    ]
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
