/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
    let container = [];
    let str = path.split("/")

for(let i = 0; i < str.length; i++){
    if(str[i] === "." || !str[i]) continue;
    if(str[i] === "..") {
        if(container.length > 0){
            container.pop();
        }
    }else{
        container.push(str[i]);
    }
}

let myPath = container.join("/");
    return "/"+ myPath; 
};

 
