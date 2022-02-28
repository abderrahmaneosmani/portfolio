import stream from "stream";
import { promisify } from "util";
import fetch from "node-fetch";

const pipeline = promisify(stream.pipeline);
const url =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-9a3ea.appspot.com/o/resume%2FOSMANI-Abderrahmane-fr.pdf?alt=media&token=666b8256-b588-43c3-b81d-145b29e0e216";

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
