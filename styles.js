/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { cp, rm } = require("fs/promises");
/* eslint-enable @typescript-eslint/no-var-requires */

console.log("process.env.BRAND==",process.env.BRAND);
(async () => {
  const destBasePath = path.resolve(__dirname, "./src/styles");
  const whitelabelPath = path.resolve(
    __dirname,
    "./src/styles",
    process.env.BRAND || "mrc"
  );
  const filePaths = [
    path.resolve(whitelabelPath, "_base.scss"),
    path.resolve(whitelabelPath, "_components.scss"),
  ];

  await Promise.all(
    filePaths.map(async (fp) => {
      try {
        const fileName = path.basename(fp);
        const destPath = path.resolve(destBasePath, fileName);
        await rm(destPath, { force: true });
        await cp(fp, destPath);
      } catch (err) {
        console.error(`Error processing file: ${fp}`, err);
      }
    })
  );
})();
