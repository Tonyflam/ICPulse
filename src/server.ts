import { BotClientFactory } from "@open-ic/openchat-botclient-ts";
import cors from "cors";
import "dotenv/config";
import express from "express";
import { rateLimit } from "express-rate-limit";
import executeCommand from "./handler/executeCommand";
import schema from "./handler/schema";
import { createCommandChatClient } from "./middleware/botclient";

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 3, // 3 per minute
  standardHeaders: "draft-8",
  legacyHeaders: false,
  statusCode: 429,
});

const app = express();
const PORT =3000;

const factory = new BotClientFactory({
  identityPrivateKey: process.env.IDENTITY_PRIVATE!,
  icHost: process.env.IC_HOST!,
  openchatPublicKey: process.env.OC_PUBLIC!,
  openStorageCanisterId: process.env.STORAGE_INDEX_CANISTER!,
});

app.use(cors());
app.get("/bot_definition", schema);
app.get("/", schema);

app.post("/execute_command", createCommandChatClient(factory), executeCommand);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
