/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { cp, rm } = require("fs/promises");
/* eslint-enable @typescript-eslint/no-var-requires */

// Ensure the BRAND environment variable is available
console.log("process.env.BRAND==", process.env.BRAND);

// Define the directories for image and style files
const sourceImagesDir = path.join(__dirname, './src/images', process.env.BRAND || 'mrc');
const destImagesDir = path.join(__dirname, './public/images/');
const sourceStylesDir = path.resolve(__dirname, "./src/styles", process.env.BRAND || "mrc");
const destStylesDir = path.resolve(__dirname, "./src/styles");

(async () => {
  // Ensure the destination directory for images exists
  try {
    await rm(destImagesDir, { recursive: true, force: true }); // Clean up the destination directory if it exists
    await cp(sourceImagesDir, destImagesDir, { recursive: true });
    console.log('Images copied successfully!');
  } catch (err) {
    console.error("Error copying images:", err);
  }

  // Copy style files from the source to the destination
  const filePaths = [
    path.resolve(sourceStylesDir, "_base.scss"),
    path.resolve(sourceStylesDir, "_components.scss"),
  ];

  await Promise.all(
    filePaths.map(async (fp) => {
      try {
        const fileName = path.basename(fp);
        const destPath = path.resolve(destStylesDir, fileName);
        await rm(destPath, { force: true }); // Remove the existing file in the destination
        await cp(fp, destPath); // Copy the new file to the destination
        console.log(`${fileName} copied successfully to ${destStylesDir}`);
      } catch (err) {
        console.error(`Error processing file: ${fp}`, err);
      }
    })
  );
})();
