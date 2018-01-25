let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.sendMessage({
		MessageBody: 'test',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_Test1201',
		DelaySeconds: '0',
		MessageAttributes: {
			"key01": {
				"DataType": "String",
				"StringValue": "test"
			},
			"key02": {
				"DataType": "Number",
				"StringValue": "001"
			}
		}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
	});

	ddb.get({
		TableName: 'ThuvvaTable',
		Key: { 'ID': 'id' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});


	callback(null, 'Successfully executed');
}