

// kafka+ssl://52.45.232.63:9096,kafka+ssl://52.45.215.143:9096,kafka+ssl://52.45.232.44:9096

var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client('kafka+ssl://52.45.232.63:9096,kafka+ssl://52.45.215.143:9096,kafka+ssl://52.45.232.44:9096'),
    consumer = new Consumer(
        client,
        [
            { topic: 't', partition: 0 }, { topic: 't1', partition: 1 }
        ],
        {
            autoCommit: false
        }
    );