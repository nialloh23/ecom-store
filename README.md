# About: 
Joeblob.co is a flexible e-commerce store built with django and react/redux.
I built the application as a forcing function to learn/explore the django and react technologies.
The project is not currently used for selling any products but if someone wants to use it for doing so fire ahead :)
The application code closely follows the tutorials in a Udemy course called 
[Django with React | An Ecommerce Website](https://www.udemy.com/course/django-with-react-an-ecommerce-website/) by @divanov11


# Live Website
💻 Live site: [https://www.joeblob.co/](https://www.joeblob.co/)  
📹 Video walkthrough (play below)  

https://user-images.githubusercontent.com/9644540/119570710-66b18f00-bda8-11eb-8d70-08bebc3d9b44.mp4

# Site Features
- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration

# System Architecture
**Backend:** Django  
**Frontend:** React + Redux  
**Additiaonl** Frameworks: React-boostrap  
**Database:** Postgres  
**Storage:** S3  
**Infra:** Heroku  

# Download & Setup Instructions 
1 - Clone project: git clone https://github.com/divanov11/proshop_django/  
2 - cd proshop_django  
3 - Create virtual environment: virtualenv myenv  
4 - myenv\scripts\activate  
5 - pip install -r requirements.txt  
6 - Add the following ENV vars (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, PROSHOP_DB_PW) to zshenv using (export AWS_ACCESS_KEY_ID=.....')   
7 - source ~/.zshenv (needed to update terminal for some reason)  
8 - python manage.py runserver (runs application locally at: http://127.0.0.1:8000/)  

# Front-end Development Guide  
1. Download Nodejs & npm: https://nodejs.org/en/download/  
3. Create react app: npx create-react-app app-name  
5. cd frontend  
7. npm start (this wil run the front-end in isolation at: http://localhost:3000/  

# Steps to run after making changes locally
10. Make changes to the front end (e.g. add a new component, change styles etc.)  
11. npm run build (in frontend folder) -> this puts all front end files in a build folder within django 
12. python manage.py collectstaticfiles 

# Database migrations
1 - python manage.py makemigrations  
2 - python manage.py migrate


# Managing ENV variables
- ENV pre-requisites: Prod(add as config vars in Heroku)  
- echo 'export AWS_ACCESS_KEY_ID=XXXX' >> ~/.zshenv
- source ~/.zshenv
- echo AWS_ACCESS_KEY_ID

# Heroku Deployment
- Heroku app name: pro-shopper
- Check Heroku Logs: heroku logs --app=pro-shopper 
- Deployment: (1) push changes to github (2) deploy master branch manually via Heroku UI
