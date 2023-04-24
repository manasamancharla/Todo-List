# Todo-List
A simple Todo List Webapp built using Reactjs and Redux Toolkit.<br>
<sub>The app does not persist tasks when it is reloaded.</sub>

## Getting Started with Vite
This project was bootstrapped with [Vite](https://vitejs.dev/).

## Quick Overview
Run the following commands on terminal.
```
git clone <repository-url>
cd <repository-directory>
npm install
npm run dev
```
Then open http://localhost:3000/ to see the app.

## .preview
![image1](https://user-images.githubusercontent.com/96481982/233912230-eec07fc3-1390-425d-a5dd-b09dd4abac03.png)

![image2](https://user-images.githubusercontent.com/96481982/233912248-0ba4e125-3838-42df-8bb9-cd2af2022f50.png)

![image3](https://user-images.githubusercontent.com/96481982/233912261-ff092161-1d37-4d37-8b20-24924f1ab7e6.png)

## Available Scripts
 In the project directory, you can run:
 
 ```$npm run dev```
 
 Runs the app in the development mode.<br>
 Open http://localhost:3000 to view it in your browser.

 The page will reload when you make changes.<br>
 You may also see any lint errors in the console.
 
 ```$npm run preview```
 
 Provides a preview of the website or web application.<br>
 Open http://localhost:3000 to view it in your browser.
 
 ```$npm run build```

 Builds the app for production to the dist folder.<br>
 See the section about [Building for Production](https://vitejs.dev/guide/build.html) for more information.
 
 ## Docker
 Run the following commands to run the application in a docker container.
 
 ```
 cd <project-directory>
 docker build -t <image-name>:latest .
 docker run -p 3001:3000 --name <container-name> <image-name>

 ```
 
 ## Learn more
 
 You can learn more in the [Vite documentation](https://vitejs.dev/).
 
 To learn React, check out the [React documentation](https://react.dev/).
 
 To learn more about Docker, check out the [Docker documentation](https://docs.docker.com/get-started/overview/).
 
 ## License 
 
 Distributed under the MIT License. See LICENSE.txt for more information.
 

 
