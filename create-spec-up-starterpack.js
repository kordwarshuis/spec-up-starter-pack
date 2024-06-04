#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to copy /spec directory and specs.json to the target directory
function setupSpecUpStarterPack(targetDir) {
    const specDir = path.join(__dirname, 'spec');
    const configFile = path.join(__dirname, 'specs.json');
    const package = path.join(__dirname, 'package.json');

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // Copy /spec directory
    execSync(`cp -r ${specDir} ${targetDir}`);

    // Copy specs.json
    fs.copyFileSync(configFile, path.join(targetDir, 'specs.json'));

    // Copy package.json
    fs.copyFileSync(package, path.join(targetDir, 'package.json'));

    console.log('Spec-up starterpack setup complete.');
}

// Get the target directory from command line arguments or use current directory
const targetDir = process.argv[2] || process.cwd();

setupSpecUpStarterPack(targetDir);
