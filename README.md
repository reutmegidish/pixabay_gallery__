# Pixabay Image Search Application

## Overview

This application is a Single Page Application (SPA) designed for web-based image search, utilizing the [Pixabay API](https://pixabay.com/api/) . It allows users to search for images using keywords, apply filters based on categories, and save their favorite images. The app also includes a modal view for detailed image previews and a dynamic search interface.

## Features

- **Image Search**: Search for images based on keywords.
- **Category Filters**: Choose from predefined categories such as nature, technology, and more.
- **Favorites**: Save and view favorite images.
- **Image Modal**: View detailed information and a larger preview of images in a modal.
- **Dynamic Interface**: Experience a responsive and interactive search interface

## Technologies Used

- **Backend**: Node.js with Express
- **Frontend**: HTML, CSS, JavaScript (ES6+)
- **API**: [Pixabay API](https://pixabay.com/api/)

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/reutmegidish/pixabay_gallery__.git
   ```

2. **Install Dependencies**

   Navigate to the `backend` directory and install the backend dependencies:

   ```bash
   cd backend
   npm install
   ```

3. **Create Environment Variables**

   Create a `.env` file in the `backend` directory and add your API key:

   ```env
   API_KEY=38179415-ae32d6643ecbce8d3a8bcb459
   BASE_URL=https://pixabay.com/api/
   ```

4. **Run the Application**

   Start the backend server:

   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- **Search Images**: Enter a search term in the input field and select a category to find images.
     <img src="/backend/public/assets/images/read.me-images/pixabay.png" alt="Search-img" width="80%" />

- **View Favorites**: Click on the "Favorites" button to view saved favorite images.
     <img src="/backend/public/assets/images/read.me-images/favorite.png" alt="Favorite-img" width="80%" />

- **Load More Images**: Click the "More Images" button to load additional results.
 
- **View Image Details**: Click on an image to open a modal with more details and a larger view.
    <img src="/backend/public/assets/images/read.me-images/pixabay-modal.png" alt="pixabay-modal" width="60%" />


## Code Structure

- **`backend/`**: Contains the Node.js server code.
  - **`server.js`**: Main server file handling API requests and serving static files.
  - **`public/`**: Static files (HTML, CSS, JS) served to the client.
- **`public/js/`**: JavaScript files for frontend functionality.

  - **`index.js`**: Main entry point for frontend JavaScript.
  - **`components/`**: UI components like image cards and modals.
  - **`handlers/`**: Functions for handling user interactions and API calls.
  - **`services/`**: API service functions for fetching images.

- **`public/css/`**: Stylesheets for the application.

## Contributing

Feel free to fork this repository and submit pull requests with improvements or fixes. For any issues, please create an issue on the GitHub repository page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
