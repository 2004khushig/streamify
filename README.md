# Streamify

Streamify is a full-stack web application for language learners to connect, chat, and practice together. Users can sign up, onboard with their language preferences, find friends, send friend requests, chat in real-time, and start video calls.

## Features

- **User Authentication:** Sign up, login, logout, onboarding.
- **Profile Onboarding:** Set bio, native/learning languages, location, and avatar.
- **Friend System:** Send/accept friend requests, view friends, notifications.
- **Chat:** Real-time messaging using [Stream Chat](https://getstream.io/chat/).
- **Video Calls:** Start and join video calls using [Stream Video](https://getstream.io/video/).
- **Theme Selector:** Choose from multiple UI themes (DaisyUI + TailwindCSS).
- **Responsive UI:** Built with React, DaisyUI, and TailwindCSS.

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS, DaisyUI, Zustand, React Query, Stream Chat/Video SDKs
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Stream Chat API
- **Other:** Lucide Icons, Axios

## Project Structure

```
backend/
  src/
    controller/
    lib/
    middleware/
    models/
    routes/
    server.js
frontend/
  vite-project/
    src/
      components/
      constants/
      hooks/
      lib/
      pages/
      store/
    public/
    index.html
    tailwind.config.js
    vite.config.js
```

## Getting Started

### Backend

1. Install dependencies:
    ```sh
    cd backend
    npm install
    ```
2. Set up `.env` (see example in repo).
3. Start server:
    ```sh
    npm run dev
    ```

### Frontend

1. Install dependencies:
    ```sh
    cd frontend/vite-project
    npm install
    ```
2. Set up `.env` (see example in repo).
3. Start dev server:
    ```sh
    npm run dev
    ```

## Environment Variables

- **Backend:**  
  - `PORT`  
  - `MONGO_URI`  
  - `STREAM_API_KEY`  
  - `STREAM_API_SECRET`  
  - `JWT_SECRET_KEY`  

- **Frontend:**  
  - `VITE_STREAM_API_KEY`

