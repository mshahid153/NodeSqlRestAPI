# Node & Sql Rest API


## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.


## Setup

1 . Clone this repository to your local machine:

   ```bash
    git clone "https://github.com/mshahid153/NodeSqlRestAPI.git"
   ```

2 . Create a `.env` file in the root directory of the project and provide values for the following variables:

```bash
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>

```

## Installation

1 . Install dependencies:

```bash
    npm install
```

2 . Start the Application:

```bash
    node server.js
```

The server will be running on [http://localhost:3000](http://localhost:3000).

## Setting up XAMPP

1 . Open the [XAMPP](https://www.apachefriends.org/) application and start the Apache and MySQL modules.
2 . Press the "Start" button to initiate the modules.

## Testing the API

1 . Open Postman or any API testing tool of your choice.
2 . Use the provided endpoints to test the API functionality.

## Routes

Basic Api Path : [http://localhost:3000/api/posts/](http://localhost:3000/api/posts)

before routing first structure the data in Postman's form-data format:

```bash
Key: title
Value: Your title text

Key: description
Value: Your description text

Key: tag
Value: Your tag text

Key: image
Value: Select File -> [Choose your image file]
```
Make sure to replace "Your title text", "Your description text", "Your tag text" with the actual content you want to send in the request. Additionally, select the appropriate image file when choosing the file for the "image" key.

## Create a Post

- **Endpoint:** `/addPost`
- **Method:** POST
- **Description:** Creates a new post in the database.

Example:

```bash
http://localhost:3000/api/posts/addPost
```

Sample Data:

```bash
{
  "title":"Exploring Node.js REST APIs",
  "description":"In this post, we delve into creating RESTful APIs using Node.js",
  "tag":"code",
  "image": select an image from your system
}
{
  "title":"Introduction to React Hooks",
  "description":"Learn how to use React Hooks to manage state and side effects in your React applications",
  "tag":"code",
  "image": select an image from your system
}
{
  "title":"Best Pizza Joints in Town",
  "description":"Explore the top pizza places in our city, serving delicious slices and mouthwatering toppings.",
  "tag":"food",
  "image": select an image from your system
}
{
  "title":"Healthy Recipes",
  "description":"Discover delicious and nutritious recipes for a healthy lifestyle.",
  "tag":"food",
  "image": select an image from your system
}
{
  "title":"Top Tourist Destinations",
  "description":"Explore the most stunning tourist destinations around the world.",
  "tag":"nature",
  "image": select an image from your system
}
```
## Retrieve All Posts

- **Endpoint:** `/allPosts`
- **Method:** GET
- **Description:** Retrieves a list of posts from the database and returns it as JSON.

Example:

```bash
http://localhost:3000/api/posts/allPosts
```

- Retrieve by keyword

```bash
    http://localhost:3000/api/posts/allPosts?tag=code
```

- Retrieve by tag name

```bash
    http://localhost:3000/api/posts/allPosts?tag=code
```
- Sorting

```bash
    http://localhost:3000/api/posts/allPosts?sortBy=title&sortOrder=asc
```

- Pagination

```bash
    http://localhost:3000/api/posts/allPosts?page=1&pageRange=3
```
## Retrieve by specific post

- **Endpoint:** `/:postId`
- **Method:** GET
- **Description:** Retrieves the post by id.

```bash
    http://localhost:3000/api/posts/1
```

## Update a Post

- **Endpoint:** `/:postId`
- **Method:** PUT
- **Description:** Updates an existing post in the database

change which data you want to change in body

```bash
    http://localhost:3000/api/posts/1
```

## Delete a Post

- **Endpoint:** `/:postId`
- **Method:** DELETE
- **Description:** Updates an existing post in the database

```bash
    http://localhost:3000/api/posts/1
```

