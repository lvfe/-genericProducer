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
exports.parseSchema = function parseSchema(schemaStr, data){
    let schema = JSON.parse(schemaStr);
    return data.map(i=>{
        let tmp = {};
        for(let item of schema){
            parse(item,tmp, i);
        }
        return tmp;
    })
}

