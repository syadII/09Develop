// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}



function renderMainTitle(title) {
  return `# ${title}`
}

function renderMainPurpose(purpose) {
  return `# ${purpose}`
}

function renderMainDescription(description) {
   return `# ${description}`
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${renderMainTitle(data.title)}
  
${renderMainPurpose(data.purpose)}


${renderLicenseSection(data.title)}

${renderLicenseSection(data.purpose)}

${renderLicenseSection(data.description)}
`;
}


module.exports = generateMarkdown;
