
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
      case 'MIT':
          return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
          return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL 3.0':
          return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      default:
          return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
        return '(https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
        return '(https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
        return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'none':
        return 'No License';
    default:
        return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function generateLicenseSection(license) {
  if (license === 'none') {
      return "## License";
  }
  const licenseSection = `
## License
This project is licensed under the ${license} license.
`;

  return licenseSection;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data,) {
  return `
# ${data.title}

## Badges
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.credits}

${generateLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Features
${data.features}

## How to Contribute
${data.contribute}

## Tests
${data.test}
`;
}

export default generateMarkdown;
