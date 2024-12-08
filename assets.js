/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { cp, rm } = require("fs/promises");
/* eslint-enable @typescript-eslint/no-var-requires */

console.log("process.env.BRAND==", process.env.BRAND);

const brandImagesDir = path.join(__dirname, './src/images', process.env.BRAND || 'mrc');
const sharedImagesDir = path.join(__dirname, './src/images', process.env.BRAND || 'mrc');
const destImagesDir = path.join(__dirname, './public/images/');
const brandStylesDir = path.resolve(__dirname, "./src/styles", process.env.BRAND || "mrc");
const destStylesDir = path.resolve(__dirname, "./src/styles");

(async () => {
  try {
    await rm(destImagesDir, { recursive: true, force: true });
    await cp(sharedImagesDir, destImagesDir, { recursive: true });
    await cp(brandImagesDir, destImagesDir, { recursive: true , force: true });
    console.log(`Images copied successfully to ${destImagesDir}`);
  } catch (err) {
    console.error("Error copying images:", err);
  }

  const filePaths = [
    path.resolve(brandStylesDir, "_base.scss"),
    path.resolve(brandStylesDir, "_components.scss"),
  ];

  try {
    await Promise.all(
      filePaths.map(async (fp) => {
        const fileName = path.basename(fp);
        const destPath = path.resolve(destStylesDir, fileName);
        await rm(destPath, { force: true }); // Remove the existing file in the destination
        await cp(fp, destPath); // Copy the new file to the destination
      })
    );

    console.log(`Styles copied successfully to ${destStylesDir}`);
  } catch (err) {
    console.error("Error copying styles:", err);
  }
})();
