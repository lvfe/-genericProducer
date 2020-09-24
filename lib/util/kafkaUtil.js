// const { Kafka,logLevel } = require('kafkajs')
// const kafka = new Kafka({
//     clientId: 'test',
//     brokers: ["localhost:9092"],
//     retry: {retries:8},
//     logLevel:logLevel.ERROR
// })
// exports.producer = async (topic, groupId, msg)=>{
//     try {
//         const producer = kafka.producer({
//             groupId: groupId
//         })
//         await producer.connect()
//         await producer.send({
//             topic: topic,
//             messages: msg,
//             acks: 1
//         })
//     } catch (error) {
//         throw error;
//     }
// }
// exports.consumer = async (topic, groupId, callback) => {
//     const consumer = kafka.consumer({
//         groupId: groupId
//     })
//     await consumer.connect();
//     await consumer.subscribe({topic:topic});
//     await consumer.run({
//         autoCommit: true,
//         eachMessage: async ({
//             topic,
//             partition,
//             message
//         }) => {                
//             await consumer.commitOffsets([{
//                 topic: topic,
//                 partition: partition,
//                 offset: Number(message.offset) + 1
//             }])
//             let msg = message.value.toString()
//             console.log(72, '消费者接收到的数据为:', msg);
//             callback(msg);
//         }
//     })
// }