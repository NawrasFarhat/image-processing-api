import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  const inputPath = path.resolve(__dirname, '../../images/full', `${filename}.jpg`);
  const outputPath = path.resolve(__dirname, '../../images/thumb', `${filename}-${width}-${height}.jpg`);

  if (!fs.existsSync(outputPath)) {
    await sharp(inputPath)
      .resize(width, height)
      .toFile(outputPath);
  }

  return outputPath;
};

export default resizeImage;