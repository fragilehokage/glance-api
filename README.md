# GlanceAPI | API Testing Tool

GlanceAPI is a lightweight API testing tool built with React and Vite. It allows users to send API requests, inspect JSON responses, analyze response metrics, and manage request history through a simple and clean interface.

## Features

- Send GET requests to REST APIs
- View formatted JSON responses
- Inspect response headers
- View response status, response time, and response size
- Persistent request history using Local Storage
- Replay previous requests
- Copy response to clipboard
- Download response as JSON
- Clear request history
- Responsive UI

## Tech Stack

- React
- Vite
- Axios
- Tailwind CSS
- React Hot Toast
- Lucide React

## Folder Structure

```text
src/
├── components/
├── hooks/
├── pages/
├── services/
├── utils/
├── App.jsx
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/fragilehokage/glance-api.git
```

Go to the project folder:

```bash
cd glance-api
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Future Improvements

- Support POST, PUT, PATCH, and DELETE requests
- Request body editor
- Authentication headers
- Request collections
- Export requests as cURL
- Deploy the application

## Author

**Sameer**

GitHub: https://github.com/fragilehokage