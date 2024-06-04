#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to copy /spec directory, specs.json, and README.md to the target directory
function setupSpecUpStarterPack(targetDir) {
    const specDir = path.join(__dirname, 'spec');
    const configFile = path.join(__dirname, 'specs.json');
    const readmeFile = path.join(__dirname, 'README.md');

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // Check if source files and directories exist
    if (!fs.existsSync(specDir)) {
        console.error(`Source directory ${specDir} does not exist.`);
        process.exit(1);
    }

    if (!fs.existsSync(configFile)) {
        console.error(`Source file ${configFile} does not exist.`);
        process.exit(1);
    }

    if (!fs.existsSync(readmeFile)) {
        console.error(`Source file ${readmeFile} does not exist.`);
        process.exit(1);
    }

    // Copy /spec directory
    execSync(`cp -r ${specDir} ${targetDir}/spec`);

    // Copy specs.json
    fs.copyFileSync(configFile, path.join(targetDir, 'specs.json'));

    // Copy README.md
    fs.copyFileSync(readmeFile, path.join(targetDir, 'README.md'));

    console.log('Spec-up starterpack setup complete.');
}

// Get the target directory from command line arguments or use current directory
const targetDir = process.argv[2] || process.cwd();

setupSpecUpStarterPack(targetDir);
