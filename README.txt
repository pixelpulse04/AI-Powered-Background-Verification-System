<<<<<<< HEAD
# RETROTHON-003
Team name : Ctrl-Alt-Win
Team members, contact number, email
Aditya Gaude  8767757264 ayanokj22@gmail.com
Adharsh Pagui 7219592196 adharshwork9@gmail.com
Velino Leitao 8149387705 leitaovelino19@gmail.com

What is each individual's contribution in the project
Aditya : ai model training
Adharsh : Front-end, Back-end
Velino : Front-end, Back-end

Folder structure

AI-POWERED-BACKGROUND-VERIFICATION
│── backend  
│   ├── __pycache__  
│   ├── main.py  
│   ├── model.py  
│── frontend  
│   ├── node_modules  
│   ├── public  
│   ├── src  
│   │   ├── components  
│   │   ├── pages  
│   │   ├── server  
│   │   ├── App.css  
│   │   ├── App.js  
│   │   ├── App.test.js  
│   │   ├── index.css  
│   │   ├── index.js  
│   │   ├── logo.svg  
│   │   ├── reportWebVitals.js  
│   │   ├── setupTests.js  
│── .gitignore  
│── package-lock.json  
│── package.json  
│── tailwind.config.js  
│── README.md  


What is your approach to solve the problem

To solve the AI-Powered Background Verification System problem, I would build a modular system integrating AI-driven document verification, criminal record checks, and employment history validation through APIs. The frontend will be built using React.js and Tailwind CSS, with Node.js and Django managing backend processes. AI models (using TensorFlow and PyTorch) will automate document validation and assess risk based on background data, while real-time notifications will be sent to both employers and candidates. The system will use Legal-BERT APIs for criminal and employment record checks, ensuring fast, accurate, and transparent background screening.

Tech stack for your project

Frontend: React.js, Tailwind CSS
Backend: Node.js
AI & Document Verification:Tesseract.js , MicrosoftLayoutMv3,Legal-BERT,TensorFlow

API Integrations:Tesseract.js , MicrosoftLayoutMv3, Legal-BERT API


Build and run commands

terminal 1:
cd backend
uvicorn main:app --reload

terminal 2:
 cd frontend
 npm start

VIDEO DEMO: https://drive.google.com/drive/folders/1v5BnO44CFwhZx9RjB7Z5SBAqkGqSFe9n?usp=sharing
