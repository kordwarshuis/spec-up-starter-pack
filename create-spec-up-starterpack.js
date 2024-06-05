#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to copy /spec directory, specs.json, and README.md to the target directory
function setupSpecUpStarterPack(targetDir) {
    const starterFilesDir = path.join(__dirname, 'spec-up-starterpack');

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // Check if source files and directories exist
    if (!fs.existsSync(starterFilesDir)) {
        console.error(`Source directory ${starterFilesDir} does not exist.`);
        process.exit(1);
    }

    // Copy 'spec-up-starterpack' directory
    execSync(`cp -r ${starterFilesDir} ${targetDir}`);

    console.log('Spec-up starterpack setup complete.');
}

// Get the target directory from command line arguments or use current directory
const targetDir = process.argv[2] || process.cwd();

setupSpecUpStarterPack(targetDir);
