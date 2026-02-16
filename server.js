const express = require("express");
const app = express();


app.use(express.json());

const bookRoutes = require("./routes/book");
app.use("/books", bookRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});