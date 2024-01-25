// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.includes('MIT')) {
    return `![MIT License](https://img.shields.io/badge/License-MIT-green`;
  } else if (license.includes('Apache')) {
    return `![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue)`;
  } else if (license.includes('Mozilla')) {
    return `![Mozilla Public License 2.0](https://img.shields.io/badge/License-Mozilla%20Public%202.0-greenyellow)`;
  } else if (license.includes('GNU')) {
    return `![GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20General%20Public%20v3.0-blue-greenyellow)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license.includes('No License used.')) {
    return `# License

    Licensed uder the`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const section = renderLicenseSection(data.license);

  if (section === ''){
    licenseShortcut = '';
  }else {
    licenseShortcut = " - [License](#license)"
  }
  return `# ${data.title}`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
