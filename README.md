# Airbnb Clone in Next.js with Prisma and MongoDB
Airbnb clone developed using Next.js as the React framework, Prisma as the ORM (Object-Relational Mapping), and MongoDB as the database. It provides an intuitive and functional interface for searching and booking accommodations similar to Airbnb.

## Features
- User registration and login with email and password, Google and Facebook.
- Accommodation search by location, dates, and other criteria.
- Detailed view of accommodations, including description, photos, prices, reviews, etc.
- Booking of selected accommodations.
- Review and rating system for accommodations.
- User profiles with personal information and booking history.
- Accommodation management for property owners.

## Demo
You can try out the live demo of Airbnb Clone [here](''). Enjoy!

## Raise the development environment
To raise the development environment, the following steps must be followed:

1. Clone this repository: 
```bash
    git clone https://github.com/CarlosAlbertoR/AirbnbCloneNextJS.git
``` 
2. Run the command:
```bash
    cd AirbnbCloneNextJS
```   
3. Run the following command in the project folder for to install dependencies
```bash
    npm i
```  
4. Create a MongoDB Atlas cluster and configure the necessary settings. You can follow these steps as a guide:
    - Go to the MongoDB Atlas website and sign in or create a new account.
    - Create a new cluster by following the provided instructions.
    - Once your cluster is created, click on the "Connect" button.
    - Select "Connect your application" as the connection method.
    - Copy the connection string provided.

4. Create an `.env` file in the project root directory and configure the required environment variables, such as the MongoDB connection string and any necessary API keys. You can refer to the `.env.example` file for the required values.
    - Paste in `.env` file variable `DATABASE_URL` the connection string provided by Mongo DB and replase the password value.
5. Run the following command to apply the database schema changes using Prisma: `npx prisma db push`
5. Run the following command to start the development server
```bash
   npm run dev
``` 
6. Open the application in the browser at the address http://localhost:3000

That's it! Now you're ready to start working on the app. If you have any suggestions or find any bugs, please feel free to open an issue or submit a pull request.