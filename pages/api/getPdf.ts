import stream from "stream";
import { promisify } from "util";
import fetch from "node-fetch";

const pipeline = promisify(stream.pipeline);
const url =
  "https://firebasestorage.googleapis.com/v0/b/e-commerce-8b99c.appspot.com/o/osmani%20abderrahmane.pdf?alt=media&token=6be52832-1265-4143-96a0-fe8e248cc18d";

const handler = async (req: any, res: any) => {
  const response = await fetch(url);
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
