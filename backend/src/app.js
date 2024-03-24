import exress from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(exress.json({ limit: "32kb" }));
app.use(exress.urlencoded({ limit: "32kb", extended: true }));
app.use(exress.static("public"));
app.use(cookieParser());

export default app;