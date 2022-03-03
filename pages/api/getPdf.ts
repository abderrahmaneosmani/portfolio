import stream from "stream";
import { promisify } from "util";
import fetch from "node-fetch";

const pipeline = promisify(stream.pipeline);
//firebase url
const url =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/resume%2FOSMANI%20Abderrahmane.pdf?alt=media&token=c3ec7629-9797-47b2-9559-bfdbe5faa67e";

const handler = async (req: any, res: any) => {
  const response: any = await fetch(url);
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=OSMANI-Abderrahmane.pdf"
  );
  await pipeline(response.body, res);
};

export default handler;
