// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  const section = badge + link;

  if (section === '') {
    return '';
  } else {
    return ' - [License](#license)';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const section = renderLicenseSection(data.license);

  if (section === '') {
    licenseShortcut = '';
  } else {
    licenseShortcut = '- [License](#license)';
  }

  return `# ${data.title}

${badge}
${section}${link}

# Description

${data.description} 

# Table of Contents

- [Usage](#usage)
- [Installation](#installation) 
${licenseShortcut}
- [Tests](#tests)
- [Contributing](#contributing)
- [Questions](#questions)

## Usage
  
${data.usage}

## Installation
  
${data.install}

${section}

## Tests
  
${data.test}

## Contributing
  
${data.contribute}

### Questions
  
You can find my GitHub profile at: https://github.com/${data.username}

If you have any questions, you can contact me by email: ${data.email}
`;
}

module.exports = { generateMarkdown };
