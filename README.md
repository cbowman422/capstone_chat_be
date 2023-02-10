# Millie's Messenger
# capstone_chat_be
## Sever


## Link to Client Repo
https://github.com/cbowman422/capstone_chat_fe


## Link to Deployed Backend
https://capstone-chat.herokuapp.com/profile

## Project Description:

This App uses socket.io and a MERN application to allow users to chat with other users and view messages as they are sent. The user can register a user name which will automatically create a profile and a room between that user and every other user on the app. There is a "Live Public Chat Room'' where the user can send messages to every user in the room. Messages will save and can be edited and deleted in private messages but messages sent to the live room do not get saved and can not be changed once sent. If no one is in the live room no one will see the messages sent there. The user can also select their own name and set an "away message" that will be sent to each user's private room and the away message can be edited and deleted. 

Millies Messenger utilizes Greenwich Mean Time (GMT).

The App has the following features:
- Register/ login authorization
- Live Public Chat Room using sockets
- Private messages to other users with full CRUD and sockets
- Personalized away messages sent to all other users in the private message rooms

This App can be used as a template for a chat room that uses Socket.IO, MongoDB Change Streams, Express, React.js, Node.js and JSON Web Tokens/ Bearer Authorization. 

This App demonstrates the ability to learn a new tool such as Socket.IO and being able to incorporate that into other skills. While following agile methodology to structure and deliver the scoped features in an organized and timely manner.

## Technologies Used:

- Sockets.IO
- MongoDB
- Express
- React.js
- Node.js
- Mongoose
- JSON
- JWT
- Passport
- HTML
- CSS
- Flexbox

## Getting Started:

First time users should register a user name. The user will be logged in and a room will be made for them. They will see that they are active and they will be able to select any room and message the users. The user can edit or delete any personal messages.

## Installation Instructions:

-Fork and clone repository
-Fork and clone backend repository
-Change into new directory
-Install dependencies ($ npm install)
-Open VS Code (code .)
-Repeat for backend server
-Create a MongoDB cluster with collections 'user', 'profile', and 'chat' in database 'test'
-Change Server socket connection to localhost 4000 server from index.js
-Change frontend client to connect to localhost 3000 for server in App.js
-Run $ npm start to start your local backend server
-Run $ npm start to start your local front end client

## Screen Shots:

![MilliesMessenger](https://imgur.com/4Aln9aO.jpg)

![MilliesMessenger](https://imgur.com/sJvm2cN.jpg)

![MilliesMessenger](https://imgur.com/JBFwE3t.jpg)

## Mobile Screen Shots:

![MilliesMessenger](https://imgur.com/QDgfXWS.jpg)

![MilliesMessenger](https://imgur.com/FpGoVhA.jpg)

![MilliesMessenger](https://imgur.com/qYJXVrK.jpg)

## Stretch Goals:

- Clean code better after presentations
- Try to write to Server through socket connections
- Incorporate into larger projects

## Planning:

## Scope: 

The scope was to build a live chat room using Socket.io, Express, MongoDB, Mongoose, JS, React, and JWT Bearer Auth. 

## User Stories: 

- The user will be able to register/ sign in.
- They will be navigated to a page where there will be a list of users active on the application.
- The user can click on another active user, and a chat between the two users will be possible in the chat window.
- A message will be created by having selected another user and typing into the chat box and sending the message.
- The message will then be updated via sockets and displayed on both users pages in real time.
- There may be an option for a chat room that everyone can post in.
- The user will be able to log out.

## Wireframes:

![wireframe login](https://imgur.com/d1X8i50.jpg)

![wireframe](https://imgur.com/SRlwaLU.jpg)

## Data Models:

![ERD](https://imgur.com/glg98eH.jpg)

## Milestones:

1. Read Sockets.IO Documentation and solve tutorial in local sandboxes.
2. Set up React client/ Mongo server w/ Mongoose, and JWT Auth. 
3. Incorporate Sockets.IO into React.js.
4. Incorporate Sockets.IO into backend Node server.
5. Incorporate MongoDB Change Streams into backend. 
6. Create Namespaces for Private Chat Rooms.
7.  CSS

## Feasibility Study:

A link to tests containing React, Mongo, Express, Mongoose, JWT Auth, and Sockets.IO. Will incorporate Mongo Change Streams after that local sandbox is completed.
These Repo display everything I learned in my local sandboxes.

https://github.com/cbowman422/mern_socket_be

https://github.com/cbowman422/mern_socket_fe

## Resources:

1. https://socket.io/get-started/chat
2. https://socket.io/docs/v4/
3. https://dev.to/novu/building-a-chat-app-with-socketio-and-react-2edj#:~:text=You'll%20also%20learn%20how,folders%20named%20client%20and%20server.&text=Navigate%20into%20the%20client%20folder,and%20create%20a%20new%20React.
4. https://www.mongodb.com/developer/products/mongodb/mongo-socket-chat-example/
5. https://www.mongodb.com/docs/manual/changeStreams/

### Comments:

```bash
Express allows you to define routes of your application based on HTTP methods and URLs. http event listener for connecting to port. on the server instance we bind to socket 'connection' event and provide socket as argument 
when a user comes onto the server they get connected to a socket and given a socket id and information.

Both Client and server communicate through the Node.js server with sockets. so messages need to be sent to the node server on both sides.
```
