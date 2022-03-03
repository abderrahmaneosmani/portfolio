import stream from "stream";
import { promisify } from "util";
import fetch from "node-fetch";

const pipeline = promisify(stream.pipeline);
//update
const url =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/resume%2FOSMANI-Abderrahmane.fr.pdf?alt=media&token=969271d6-ef0b-4329-ba7a-2ad6bedef34d";

const handler = async (req: any, res: any) => {
  const response: any = await fetch(url);
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=OSMANI-Abderrahmane-fr.pdf"
  );
  await pipeline(response.body, res);
};

export default handler;
