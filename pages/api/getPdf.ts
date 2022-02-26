import stream from "stream";
import { promisify } from "util";
import fetch from "node-fetch";

const pipeline = promisify(stream.pipeline);
const url =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/resume%2Fosmani%20abderrahmane.pdf?alt=media&token=314e97da-8b2b-4eba-8255-6a0213488b80";

const handler = async (req: any, res: any) => {
  const response: any = await fetch(url);
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=osmani-abderrahmane.pdf"
  );
  await pipeline(response.body, res);
};

export default handler;