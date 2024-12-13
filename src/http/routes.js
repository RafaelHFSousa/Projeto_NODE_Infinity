import createUser from "./controllers/create-user.js";

export default function appRoutes(app){
    app.post('/', createUser)  
}