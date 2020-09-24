const kafka = require("./util/kafkaUtil");
(async function () {
  const topic = "test";
  const groupId = "mgroup";
  try {
    for (let i = 0; i < 10000; i++) {
      await new Promise((resolve, reject) => {
        setTimeout(async () => {
          resolve(1);
        }, 1000);
      }).then(async () => {
        console.log("发送的数据为:", i);
        await kafka.producer(topic, groupId, [
          {
              key: 'a',
            value: `${i}`,
          },
        ]);
      });
    }
  } catch (error) {
    console.log(14, error);
    throw error;
  }
})();
