# My Duka API

 My Duka is a basic API built with Ruby rails.

It serves as a backend API link



The application has been built with the MVC design pattern.

## Pre-Requisites
In order to use this repository you will need the following:

Operating System (Windows 10+, Linux 3.8+, or MacOS X 10.7+)

RAM >= 4GB

Free Space >= 2GB

## Technologies-used
   ![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)   ![render](https://img.shields.io/badge/Render-430091?style=for-the-badge&logo=render&logoColor=white)     ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)   ![](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
   ![Ruby](https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white)    ![Sqlite](https://img.shields.io/badge/SQLite3-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
   ![mark-down](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
   ![stack](https://aleen42.github.io/badges/src/stackoverflow.svg)

         * Ruby v2.7.+

         * SQlite3 v1.6

         * ActiveRecord v7.0.4

         * Rake v13.0.6

         * Puma v6.1

         * rerun v0.14

         * Ruby on Rails v3.0.5

         * Serializer v5.3.0

## Setup

You can setup this repository locally by following this manual
https://github.com/MyDuka/MyDuka/tree/main/api/app/models
Clone the repository

Ensure the ruby gems are setup in your machine
bundle install

Perform any pending database migrations

rails db:migrate

Run the application

rails s

Open the application from your browser
http://localhost:3000

Application

This application is a simple web API that allows users to:

View admin.

View clerk.

View merchant.

View product. 

View  a particular: admin, clerk, merchant, product.


# MODELS

Database schema definitions.
## Admin


| Column      | Data Type    | Description   |
| :---        |    :----:   |          ---: |
|id            |Integer     | Unique identifier |
| username      | Text       | The name of the id   |
| email   | Text        |The email of the admin      |
|password_digest| String | The password of the admin|
|status | Text | The status of the admin |
|updated_at | Date | The date the hero was updated |
|created_at | Date | The date hero was created |

## Clerk

| Column      | Data Type | Description     |
| :---        |    :----:   |          ---: |
## Merchant


| Column      | Data Type    | Description   |
| :---        |    :----:   |          ---: |
|id           | Integer      | Unique identifier |
| Title      | String       | todo title  |
|Description |String        | todo description |
|Priority  | Integer  | todo priority |
|Status | Integer | todo status |
|updated_at | Date | The date the power was updated|
|created_at | Date | The date the power was created |
# Product 
ROUTES
/admin
Shows all admin.
/admins/login

log in as an admin.
/admin/login/check

Checks a user login status.
/users/logout
Logout an admin
/todos
Shows all  clerk
/clerk
Updates a clerk
/clerks
Updates a clerk
/clerks
Updates a clerk
## LICENSE
This repository is distributed under the MIT License

Copyright 2023 Cindy Muthoni

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Author
This repository is maintained by:
.Cindy Muthoni
.Kimathi Njoki
.Dennis Taiti
.Faith Moraa
.Kelvin Ngechu

My Duka
