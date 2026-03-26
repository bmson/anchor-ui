import fs              from 'fs';
import path            from 'path';
import { DESIGN_DATA } from '../data/designData.js';
import templateContent from '../OUTPUT.md';

/**
 * Generate a design skill file from the template and token data
 */
export const generateFile = (dataObject, { skillName, saveDir = './' }) => {

  // Merge token data with the matching motion package
  const tokens =
    { ...dataObject
    , ...DESIGN_DATA.motion_packages[dataObject.MOTION_LEVEL]
    };

  // Interpolate all {{TOKEN}} placeholders in the template
  let output = templateContent;

  for (const [key, value] of Object.entries(tokens)) {
    output = output.replaceAll(`{{${key}}}`, value);
  }

  // Write the final file to disk
  const name      = skillName.replace(/[^a-z0-9]/gi, '-').toLowerCase();
  const filename  = `${name}.md`;
  const directory = path.resolve(process.cwd(), saveDir);
  const filePath  = path.join(directory, filename);

  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(filePath, output);

  return saveDir === './' ? filename : path.join(saveDir, filename);

}
