# Task Manager Django + React
# Task Manager – AI Internship Demo

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

