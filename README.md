# googleBuildas
Cypress Automation Testing - README 

This project covers UI testing using: 

Cypress – for browser-based UI and API automation 

 Prerequisites 

Before you begin, ensure the following tools are installed on your system: 


Node.js v18 or above 

VS Code Latest 

 
Getting Started 

1. Open Visual Studio Code 

Launch Visual Studio Code on your system. 

Navigate to the folder you want to download the project in e.g. cd user/documents 

Open a new terminal in VS Code (Ctrl + ~ or go to Terminal > New Terminal). 

2. Clone the Repository 

In the terminal, run the following commands to clone the project and navigate into the folder: 

git clone https://github.com/Darmolyna/googleBuildas    (this clones the project) 
cd googleBuildas  (this navigates to the project folder from terminal) 
 

3. Install All Dependencies 

Run the command below to install all required dependencies (like Cypress) listed in package.json: 

npm install 

 

Running Cypress Tests 

Option 1: Run Cypress in Interactive Mode (UI) 

npx cypress open 

This opens the Cypress Test Runner for manual test execution. 

Option 2: Run Cypress Tests in CLI (Headless) 

npx cypress run 