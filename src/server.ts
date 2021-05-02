import express from 'express';

const app = express();

//rotas
app.get("/", (request, response) => {
    return response.json({
        version: "1.0.0",
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo",
    });
});

app.listen(3333, () => console.log("Server is running on port 3333"));