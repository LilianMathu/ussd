import app from "./server/app";
import config from "./config";

const port = config.PORT;

app.listen(port, () => {
  console.log("Server is up and running");
});
