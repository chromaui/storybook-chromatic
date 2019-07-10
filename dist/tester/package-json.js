import path from 'path';
import { readFileSync, writeFileSync } from 'jsonfile';

export function checkPackageJson({ command, appDir = process.cwd() } = {}) {
  const packageJson = readFileSync(path.resolve(appDir, './package.json'));

  return Object.values(packageJson.scripts || {}).find(script => script.match(command));
}

export function addScriptToPackageJson(scriptName, scriptCommand, { appDir = process.cwd() } = {}) {
  const filename = path.resolve(appDir, './package.json');
  const packageJson = readFileSync(filename);

  if (packageJson[scriptName]) {
    throw new Error(`Script named '${scriptName}' already exists in package.json`);
  }

  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }
  packageJson.scripts[scriptName] = scriptCommand;
  writeFileSync(filename, packageJson, { spaces: 2 });
}
