import { app } from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`servidor executando na porta ${PORT}`));
