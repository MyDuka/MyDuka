My Duka App
My Duka App is an inventory management system that helps businesses keep track of their stock levels and generate reports on a weekly, monthly, and annual basis. This app is built using ReactJs and Redux Toolkit for the frontend and Ruby on Rails for the backend. PostgreSQL is used as the database, and Jest and Minitests are used as the testing frameworks. The wireframes for the app are created using Figma to ensure the app is mobile-friendly.

Problem Statement
Record keeping and stock taking are essential parts of every business entity. However, manual recording can be tedious and prone to errors, and automated reporting options can be limited. The aim of My Duka App is to make record keeping and stock taking easier and more accurate by creating an automated system that generates reports and provides a visual representation of the data.

Features
Authentication: Only the superuser, who is usually the merchant, can initiate the registration process to add an admin. The superuser sends a tokenized link to the admin's email, and the invitee registers within a reasonable amount of time. The admins are responsible for adding data entry clerks.
Dashboard: The clerks record the details of the received items in the store, including the number of items received, payment status, number of items in stock, number of spoilt items, and buying and selling prices. They can also request more product supply, which goes to the store admin for approval.
Store Admin: The store admin can see a detailed report on the performance of individual entries, approve or decline supply requests from the clerk, see the products that suppliers have been paid for and those not yet paid, change the payment status to paid for the products that were not paid, and add or remove clerks' accounts.
Merchant: The merchant can add, deactivate, or delete admin accounts, view store-by-store reports in well-visualized graphs, see individual store performance, and narrow down to individual product performance. The merchant can also see the paid and non-paid products for each store.
Technical Expectations
Backend: Ruby on Rails
Database: PostgreSQL
Wireframes: Figma (mobile-friendly)
Testing Frameworks: Jest & Minitests
Frontend: ReactJs & Redux Toolkit(state management)
Visualization: Any Js Plotting Library can be used.
Installation
To install and run the app locally, follow these steps:

Clone the repository to your local machine.
Install the required dependencies by running npm install and bundle install in the terminal.
Create a .env file to store the required environment variables.
Run the migrations by running rails db:migrate in the terminal.
Start the server by running rails s in the terminal.
Open another terminal window and navigate to the client directory.
Start the client by running npm start in the terminal.
Conclusion
My Duka App is a comprehensive inventory management system that helps businesses keep track of their stock levels and generate reports. With its intuitive dashboard, the app makes it easy for data entry clerks to record the details of the received items in the store, and for the store admin and merchant to see detailed reports on the performance of individual entries, store-by-store reports, and individual product performance.i
