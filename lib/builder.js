const { readFileToArr } = require("./splitFile");
const { parseSchema } = require("./transform");
exports.builder = async function builder(filename, config, schema) {
  let data = await readFileToArr(filename, config)
  return parseSchema(schema, data);
}

