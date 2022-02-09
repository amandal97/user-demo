## Steps for setting up App in Local

1. Clone the repository
2. npm install / yarn
3. npm start / yarn start
4. Server will run on port 3000

## Folder Structure
- Root
  - common
  - utils
  - views
    - screen1
      - components
      - containers
    - screen2
      - components
      - containers

## Details of each folder
1. **Common -** This folder contains all the **Generic Components** that can be re-used throughout the application
2. **Utils -** This folder contains all the **Utility Functions**. Constants file and Config file can also be included here
3. **View -** Contains all the folders specific to each **Screen**
4. **Containers -** This folder contains all the Components with Business Logic. These are **Smart Components**.
5. **Components -** This folder contains all the Components that only represents the view. These are **Dumb Components**.
