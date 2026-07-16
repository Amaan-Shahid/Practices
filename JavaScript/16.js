const createProject = (name) => {
    return {
    name,
    createdAt : Date.now(),   // Current Timestamp in Milli-Seconds
    files : {}
    }
};

const path = require("path");
const projectName = path.basename(__dirname); 

/*

__dirname → C:\Users\PC\Desktop\Practices\JavaScript  
path.basename(__dirname) → "JavaScript"

*/

const project = createProject(projectName);


