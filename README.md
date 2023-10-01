# VideoSync - Custom Subtitle Management Tool

VideoSync is a web application developed using Vue.js for the frontend and Django REST API for the backend. It allows users to upload videos, add custom subtitles to their preferred locations, and export them to view along with the subtitles in the next page.

## Features

- **Upload Videos:** Users can upload their videos to the platform.
- **Custom Subtitles:** Add custom subtitles to specific timestamps in the video.
- **Subtitle Export:** Export the video with custom subtitles.
- **Search Functionality:** Implemented search functionality with debouncing to enhance user interactions and reduce unnecessary API calls.
- **Data Visualization:** Added data visualizations in the form of bar charts to display video watch counts for improved data presentation.

## Technologies Used

- **Frontend:** Vue.js
- **Backend:** Django REST API
- **Styling:** (Tailwind CSS)

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.
- Python and Django installed for the backend.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vrroshni/videosync-plus.git
   cd videosync-app
   ```
2. **Install frontend dependencies:**

   ```bash
   cd client
   npm install
   ```
3. **Create a virtual environment and activate it:**
 
   Windows
   ```bash
   cd server
   python -m venv venv
   venv\Scripts\activate
   ```
   Linux
   ```bash
   cd server
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install backend dependencies:**

   ```bash
   cd server
   pip install -r requirements.txt
   ```

4. **Run the development server:**

   ```bash
   # Inside the frontend directory
   npm run dev

   # Inside the backend directory
   python manage.py runserver


   
## Usage

- Visit the website at [videosync.roshnivr](http://videosync.roshnivr.com/).
- Upload your video and add custom subtitles to your preferred locations.
- Export the video and subtitles and view it.


## License

This project is licensed under the MIT License

   
