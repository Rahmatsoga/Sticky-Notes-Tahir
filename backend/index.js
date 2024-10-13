import express from "express"
import mongoose from "mongoose"
import User from "./Schema.js"
import cors from 'cors'
import bodyParser from "body-parser"


const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/Stickynotes").then(() => {
    console.log("connected to DB")
}).catch(() => {
    console.log("Not connect to DataBase")
})


app.get("/", async (req, res) => {
    const notes = await User.find(); 
    res.json(notes); 
})

app.get("/edit/:id",async(req,res)=>{
    const {id}=req.params;
    const note=await User.findById(id);
    res.json(note);
})



app.post("/addnotes", async (req, res) => {
    const { title, note } = req.body;
    try {
        await User.create({ title, note });
        res.send("add not to db")
    } catch (e) {
        res.send("not send")
    }
})

app.delete("/:id", async (req, res) => {
    const { id } = req.params;  

    try {
        await User.findByIdAndDelete(id);  
        res.send("Deleted");
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).send("Error deleting note");
    }
});

app.patch("/edit/:id",async(req,res)=>{
    const {id}=req.params;
    const {title,note}=req.body;
    await User.findByIdAndUpdate(id,{title,note})
    res.send("update successfully");
})

app.listen(3001, () => {
    console.log("App is running on 3001")
})
