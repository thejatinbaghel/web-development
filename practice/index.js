const express = require('express')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const user = {
        name: "Jatin",
        lastName: "Baghel",
        nationality: "Indian"
    }

    res.json(user);
})




app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})