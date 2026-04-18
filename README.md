#  Companies Directory – Frontend

This is the frontend application for the **Companies Directory** project built using **React.js**.
It allows users to browse, search, filter, and sort companies with a clean and responsive UI.

---

##  Live Demo

https://flm-frontend-chi.vercel.app/

---

##  Tech Stack

* React.js (Create React App)
* CSS (Custom Styling)
* JavaScript (ES6+)
* REST API Integration

---

##  Features

* Search companies by name
*  Filter by location
*  Filter by industry
*  Sort by name or number of employees
*  Pagination support
*  Fully responsive design
*  Custom dropdown components (replaces native select)
*  Loading and error handling

---

##  Folder Structure

```
src/
│
├── components/
│   ├── CompanyCard.jsx
│   ├── CustomDropdown.jsx
│   ├── Pagination.jsx
│   ├── Loader.jsx
│   └── Error.jsx
│
├── layout/
│   └── Sidebar.jsx
│
├── pages/
│   └── Home.jsx
│
├── services/
│   └── api.js
│
├── App.js
└── index.js
```

---

##  API Integration

The frontend connects to a backend API built with Node.js and Express.

### Base URL:

```
REACT_APP_API_URL=https://flm-backend.onrender.com/api
```

### Endpoints Used:

* `/companies` → Get companies with filters & pagination
* `/locations` → Get unique locations
* `/industries` → Get unique industries

---

##  Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/KJayaraju/flm_frontend.git
cd your-frontend-repo
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file

```
REACT_APP_API_URL=https://flm-backend.onrender.com/api
```

### 4. Run the app

```
npm start
```

---

##  Key Implementation Details

* **State Management**: Managed using React Hooks (`useState`, `useEffect`)
* **Reusable Components**: Modular components like dropdown, cards, and pagination
* **Custom Dropdown**: Built instead of native `<select>` for better UI control
* **Pagination**: Controlled via backend using `page` and `limit`
* **API Handling**: Centralized API calls using a service layer

---

##  Approach

The application is designed with a focus on:

* Clean UI/UX
* Component reusability
* Scalable structure
* Efficient API integration



## Future Improvements

* Multi-select filters
* Sorting order toggle (ASC/DESC)
* Infinite scroll
* Better animations
* User authentication

---

##Acknowledgements

* Backend powered by Node.js, Express & MongoDB Atlas
* Data generated using Faker.js

---

##  Contact

Jayaraju Kolli
jayarajukolli123@gmail.com
