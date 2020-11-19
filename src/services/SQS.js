import AWS from 'aws-sdk';
import { computeStat } from './../store'

class SQSInstance {

  SQS;
  QUEUE_URL = "http://localhost:4566/000000000000/service-queue"

  constructor() {
    AWS.config = new AWS.Config({
      accessKeyId: "local",
      secretAccessKey: "local",
      region: 'REGION'
    })
    this.SQS = new AWS.SQS({ 
      apiVersion: '2012-11-05',
      endpoint: "http://localhost:4566"
    });

    this.SQS.createQueue(
      { QueueName: 'service-queue' },
      err => {
        if (err){
          console.log(err)
        }
      }
    )
  }

  handleResponse(err) {
    if (err) {
      console.log("Error", err);
      return
    } 
  }

  consumeStats() {
    this.SQS.receiveMessage(
      { QueueUrl: this.QUEUE_URL },
      (err, data) => {
        if (err) {
          console.log(err)
        }

        data.Messages.map(msg => {
          computeStat(msg)
          
          const deleteParams = {
            QueueUrl: this.QUEUE_URL,
            ReceiptHandle: msg.ReceiptHandle
          };

          this.SQS.deleteMessage(deleteParams, this.handleResponse);
        })
      }
    )
  }

  publishMessage(message) {
    var params = {
      // Remove DelaySeconds parameter and value for FIFO queues
      DelaySeconds: 10,
      MessageAttributes: {
        "Title": {
          DataType: "String",
          StringValue: "The Whistler"
        },
        "Author": {
          DataType: "String",
          StringValue: "John Grisham"
        },
        "WeeksOn": {
          DataType: "Number",
          StringValue: "6"
        }
      },
      MessageBody: JSON.stringify(message),
      // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
      // MessageGroupId: "Group1",  // Required for FIFO queues
      QueueUrl: this.QUEUE_URL
    };

    this.SQS.sendMessage(params, this.handleResponse);
  } 
}

export const SQSClient = new SQSInstance()
