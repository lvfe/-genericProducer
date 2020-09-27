const fs = require("fs");
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
        "CodeNew": {
            "value": {
                "Company": {
                    "value": "company",
                    "label": "Company"
                },
                "Code": {
                    "value": "code",
                    "label": "Code"
                }
            },
            "label": "CodeNew"
        }
    },
    "label": "Location",
    "default": "hidden"
}]`;
function parse(schema, tmp, data){
    
    if(typeof schema['value']==='string'){
        tmp[schema.label] = data[schema.value];
        return;
    } else {
        tmp[schema.label]=tmp[schema.label]||{};
        if(typeof schema['value']==='object'){
            for(let k of Object.keys(schema.value)){
                parse(schema.value[k], tmp[schema.label], data);
            }
        } 
    }
}
function parseSchema(schemaStr, data){
    let schema = JSON.parse(schemaStr);
    return data.map(i=>{
        let tmp = {};
        for(let item of schema){
            parse(item,tmp, i);
        }
        return tmp;
    })
    
}
let data_final = parseSchema(schema, data);
console.dir(data_final);
