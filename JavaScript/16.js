const createProject = (name) => {
    return {
    name,
    createdAt : Date.now(),   // Current Timestamp in Milli-Seconds
    files : {},
    // ===> We are gonna use objects instead of array of objects because a project with 50000 files would be much more difficult to find in array as in objects we can directly access object properties.

    addFile (filePath, content) {
        if(this.files[filePath] !== undefined){
            return "File Already Exists!";
        }
        this.files[filePath] = {
            content,
            createdAt: Date.now()
        }
    }
    }
};

const path = require("path");
const projectName = path.basename(__dirname); 

/*

__dirname → C:\Users\PC\Desktop\Practices\JavaScript  
path.basename(__dirname) → "JavaScript"

*/



// Outouts for testing

const project = createProject(projectName);
project.addFile("index.html","<h1> Amaan </h1>")
console.log(project)
console.log(project.files)


