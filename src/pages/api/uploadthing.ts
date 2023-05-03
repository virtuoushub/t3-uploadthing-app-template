import { createNextPageApiHandler } from "uploadthing/server";
import { ourFileRouter } from "~/utils/uploadthing";
 
const handler = createNextPageApiHandler({
  router: ourFileRouter,
});
 
export default handler;