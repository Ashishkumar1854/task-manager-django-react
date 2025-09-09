# Task Manager Django + React

Manage your tasks efficiently with this Task Manager app built for the Aarohita Vigyan Internship.  
Built with **Django + Django REST Framework (Backend)** and **React + Vite (Frontend)**.

---

## 🔹 Project Goal

- Create a simple **task management app** (Add, Toggle, Delete tasks).  
- Demonstrate **full-stack skills**: API creation, frontend integration, and environment setup.  
- Showcase **critical thinking & coding skills** for internship evaluation.  

---

## 🛠 Tech Stack

- **Backend:** Django 5.2.6, Django REST Framework, SQLite (development), python-decouple, CORS headers  
- **Frontend:** React 18, Vite, Tailwind CSS (optional), Axios  
- **Database:** SQLite (local development, can migrate to PostgreSQL later)  
- **Version Control:** Git + GitHub  

---

## 📂 Project Structure

task-manager-django-react/
├── backend/
│ ├── manage.py
│ ├── taskapi/
│ ├── tasks/
│ ├── .env # backend environment variables
│ └── venv/ # python virtual environment (ignored in git)
├── frontend/
│ ├── src/
│ ├── public/
│ ├── .env # frontend environment variables
│ └── package.json
└── README.md

yaml
Copy code

---

## ⚙️ Setup & Installation

### **Backend**

1. Navigate to backend:
```bash
cd backend
Create virtual environment & activate:

bash
Copy code
python -m venv venv
source venv/bin/activate       # Mac/Linux
venv\Scripts\activate          # Windows
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Add .env file (example):

ini
Copy code
SECRET_KEY=your_secret_key_here
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost
Run migrations:

bash
Copy code
python manage.py makemigrations
python manage.py migrate
Run backend server:

bash
Copy code
python manage.py runserver
API endpoint: http://127.0.0.1:8000/api/tasks/

Frontend
Navigate to frontend:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Add .env file (example):

ini
Copy code
VITE_API_URL=http://127.0.0.1:8000/api
Run frontend:

bash
Copy code
npm run dev
App URL: http://localhost:5173/


📝 Features

Add Task → Create a new task

Toggle Done/Undone → Mark task as complete/incomplete

Delete Task → Remove a task

DRF Browsable API → http://127.0.0.1:8000/api/tasks/

Fully connected Frontend + Backend

📸 Screenshots
Task Manager UI	Task Added

	

Screenshots optional but recommended for submission

🚀 Deployment Steps
//pending now but asap proper deploy
Backend Deployment

Platforms: Render / Railway / Heroku

Update .env with production variables:

SECRET_KEY=production_secret_key
DEBUG=False
ALLOWED_HOSTS=<your_domain>


Run migrations on server

Expose /api/ endpoints

Frontend Deployment

Platforms: Vercel / Netlify

Update VITE_API_URL in .env to point to deployed backend API

Build & deploy:

npm run build


Connect frontend to backend via VITE_API_URL
