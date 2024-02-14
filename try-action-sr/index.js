import { WebClient, LogLevel } from "@slack/web-api";
import { } from 'dotenv/config'
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;      

const client = new WebClient(process.env.B_TOKEN, {
  logLevel: LogLevel.DEBUG
});

const channelId = "C06GFFEDN6M";

try {
  const result = await client.chat.postMessage({
    channel: channelId,
    text: "Hello world"
  });

  console.log(result);
}

catch (error) {
  console.error(error);
}