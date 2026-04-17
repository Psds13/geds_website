const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function processDir(currentDir) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            if (!fullPath.includes('node_modules') && !fullPath.includes('.next')) {
                let currentProcessingDir = fullPath;
                if (file.toLowerCase().includes('geds')) {
                    const newDirName = file.replace(/geds/g, 'nortech').replace(/GEDS/g, 'Nortech');
                    const newPath = path.join(currentDir, newDirName);
                    fs.renameSync(fullPath, newPath);
                    console.log(`Renamed dir ${file} to ${newDirName}`);
                    currentProcessingDir = newPath;
                }
                processDir(currentProcessingDir);
            }
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css') || fullPath.endsWith('.json')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content
                .replace(/GEDS Green Tech\.jpg/gi, 'Nortech Green.png')
                .replace(/GEDS Lab\.jpg/gi, 'Nortech LAB.png')
                .replace(/GEDS Games\.png/gi, 'Nortech Games.png')
                .replace(/GEDS Security\.png/gi, 'Nortech Security.png')
                .replace(/GEDS Network\.png/gi, 'Nortech Network.png')
                .replace(/GEDS Accessibility\.png/gi, 'Nortech Accessibility.png')
                .replace(/GEDS Inova[cç][aã]o\.jpg/gi, 'Nortech Inovação.jpg')
                .replace(/GEDS Inova[cç][aã]o\.png/gi, 'Nortech Inovação.png')
                // A case for any other occurrences
                .replace(/GEDS/g, 'Nortech')
                .replace(/Geds/g, 'Nortech')
                .replace(/geds/g, 'nortech');
            
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Updated file content in ${path.relative(__dirname, fullPath)}`);
            }
            
            if (file.toLowerCase().includes('geds')) {
                const newFileName = file.replace(/geds/g, 'nortech').replace(/GEDS/g, 'Nortech');
                const newPath = path.join(currentDir, newFileName);
                fs.renameSync(fullPath, newPath);
                console.log(`Renamed file ${file} to ${newFileName}`);
            }
        }
    }
}

processDir(srcDir);
console.log("Done");
