import fs              from 'fs';
import path            from 'path';
import { DESIGN_DATA } from '../data/designData.js';
import templateContent from '../OUTPUT.md';

/**
 * Function to generate a file based on a template and a data object
 */
export const generateFile = (dataObject, { skillName, saveDir = './' }) => {

  // Create a token map by combining the data object with the corresponding motion package
  const tokens =
    { ...dataObject
    , ...DESIGN_DATA.motion_packages[dataObject.MOTION_LEVEL]
    };

  // Replace tokens in the template content with actual values
  let output = templateContent;

  // Replace all tokens in the template with their corresponding values
  for (const [key, value] of Object.entries(tokens)) {
    output = output.replaceAll(`{{${key}}}`, value);
  }

  // Generate a filename based on the skill name
  const name = skillName.replace(/[^a-z0-9]/gi, '-').toLowerCase();

  // Save the generated content to a file
  const filename  = `${name}.md`;
  const directory = path.resolve(process.cwd(), saveDir);
  const filePath  = path.join(directory, filename);

  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(filePath, output);

  // Return the path to the generated file
  return saveDir === './' ? filename : path.join(saveDir, filename);

}
