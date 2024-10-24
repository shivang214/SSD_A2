import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect('mongodb+srv://shivang214:qwertyuiop@cluster0.a741bb7.mongodb.net/?retryWrites=true&w=majority');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    userType: String, 
});

const User = new mongoose.model("User", userSchema);

const QnASchema = new mongoose.Schema({
    question: String,
    answer: String,
});

const QnA = new mongoose.model("QnA", QnASchema);

// Routes
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successful", user: user });
            } else {
                res.send({ message: "Password didn't match" });
            }
        } else {
            res.send({ message: "User not registered" });
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, password, userType } = req.body; 

        const user = await User.findOne({ email: email });

        if (user) {
            res.send({ message: "User already registered" });
        } else {
            const newUser = new User({
                name,
                email,
                password,
                userType, 
            });

            await newUser.save();

            res.send({ message: "Successfully Registered, Please login now." });
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});


app.post("/addquestion", async (req, res) => {
    try {
        const { question, answer } = req.body; 

            const newQnA = new QnA({
                question,
                answer 
            });

            await newQnA.save();
            res.send({ message: "Question added Succesfully." });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

app.listen(9002, () => {
    console.log("BE started at port 9002");
});
