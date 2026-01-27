const { execSync } = require('child_process');
const fs = require('fs');

const getLatestGitCommitHash = () => {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch (e) {
    return 'unknown';
  }
};

const getLatestGitCommitDateTime = () => {
  try {
    const timestamp = execSync('git show -s --format=%ci HEAD').toString().trim();
    return new Date(timestamp).toLocaleString('ru-RU', { dateStyle: 'short', timeStyle: 'medium' });
  } catch (e) {
    return 'unknown';
  }
};

const buildInfo = `
const buildInfo = {
  commitHash: "${getLatestGitCommitHash()}",
  commitDateTime: "${getLatestGitCommitDateTime()}"
};

console.log("UI-Kit Showcase build info: [" + buildInfo.commitHash + ", " + buildInfo.commitDateTime + "]");
`;

fs.writeFileSync('./public/build-info.js', buildInfo);
console.log('Build info generated successfully');
