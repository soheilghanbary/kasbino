import { router } from "~/lib/api-router";
import { upload } from "~/lib/upload";

export const config = {
  api: {
    bodyParser: false,
  },
};
// @ts-expect-error
router.use(upload.single("image")).post(async (req, res) => {
  // @ts-expect-error
  return res.status(200).send(`${process.env.BASE_URL}/uploads/${req.file.filename}`);
});

export default router.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
