const fs = require("fs");
const { OutgoingMessage } = require("http");
// fs.readFile('./')
const readFile = ()=>{
    let data = [];
    for(let i=0;i<10;i++){
        let item = {
            name: `connie${i*2}`,
            location:`GSP shanghai${i}`,
            code:`201630`,
            position: 'developer',
            company:`citi${i}`
        };
        data = [item, ...data];
    }
    return data;
}
let data = readFile();
let schema = `[{
    "value": "name",
    "label": "Name"
}, {
    "value": {
        "Location": {
            "value": "location",
            "label": "Location"
        },
        "Code": {
            "value": "code",
            "label": "Code"
        }
    },
    "label": "Location",
    "default": "hidden"
}]`;
const parseSchema = (schemaStr, data) => {
    let schema = JSON.parse(schemaStr);
    return data.map(i=>{
        let tmp = {};
        for(let item of schema){
            const {value, label} = item;
            
            if(typeof value == "object"){
                
                tmp[label] = {};
                for(let key in value){
                    tmp[label][key] = {};
                    let middle = JSON.parse(JSON.stringify(value[key]))
                    tmp[label][middle.label] = i[middle.value];
                }
                
            } else {
                if(i[value] == null && 'default' in item) {
                    i[value] = item.default;
                }
                tmp[label] = i[value];
            }
            
        }
        return tmp;
    })
    
}
let data_final = parseSchema(schema, data);
console.dir(data_final[1]);
// let schemaStr = `[()]`;
// const parseSchema2 = (schemaStr, data)=>{

// }