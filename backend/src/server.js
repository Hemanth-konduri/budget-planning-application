// write a basic expres server code

import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const __dirname = path.resolve();

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.use((req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
    })
}else{
    app.get("/", (req, res)=>{
        res.send("API is running...");
    })
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});