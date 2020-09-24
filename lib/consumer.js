const {consumer} = require('./util/kafkaUtil');

(async function () {
  const fs = require("fs");
  let count = 1;
  const topic = "test";
  const groupId = "mgroup";
  try {
    await consumer(topic, groupId, async (msg) => {
      let str = `第${count}接收到的数据为:${msg}`;
      console.log(str);
      count++;
    //   fs.writeFileSync(`${process.cwd()}/test01.txt`, str, {
    //     flag: "a",
    //   });
    });
  } catch (error) {
    console.log(14, error);
    throw error;
  }
});
