export interface EVent {
  type: 'message_inbound';
  sender: string;
  recipient: string;
  text: string;
  sandbox: boolean;
  fullEvent: {
    alert_type: 'message_inbound';
    delivery_type: 'imessage';
    language: {
      code: string;
      name: string;
    };
    message_id: string;
    message_type: 'text';
    recipient: string;
    sandbox: boolean;
    sender_name: string;
    text: string;
    webhook_id: string;
  };
}

export interface ConversationInitedEvent {
  type: 'conversation_inited';
  sender: string;
  recipient: string;
  text: string;
  sandbox: boolean;
  fullEvent: {
    alert_type: 'conversation_inited';
    language: {
      code: string;
      name: string;
    };
    message_id: string;
    recipient: string;
    sandbox: boolean;
    sender_name: string;
    text: string;
    webhook_id: string;
  };
}

// {
//     "type": "message_inbound",
//     "sender": "sandbox.loopmessage.com@imsg.im",
//     "recipient": "+12146427930",
//     "text": "Hey babe ",
//     "sandbox": true,
//     "fullEvent": {
//       "alert_type": "message_inbound",
//       "delivery_type": "imessage",
//       "language": {
//         "code": "en",
//         "name": "English"
//       },
//       "message_id": "D4346FB7-ceA7-475C-9780-8B9Da65Ed14a",
//       "message_type": "text",
//       "recipient": "+12146427930",
//       "sandbox": true,
//       "sender_name": "sandbox.loopmessage.com@imsg.im",
//       "text": "Hey babe ",
//       "webhook_id": "d3010ac5-8c80-43d8-91e7-a6f4754ec3d4"
//     }
//   }


{
    "type": "conversation_inited",
    "sender": "sandbox.loopmessage.com@imsg.im",
    "recipient": "+16316015798",
    "text": "hi",
    "sandbox": true,
    "fullEvent": {
      "alert_type": "conversation_inited",
      "language": {
        "code": "en",
        "name": "English"
      },
      "message_id": "e31aEf9D-B349-4f19-843f-71021d14E669",
      "recipient": "+16316015798",
      "sandbox": true,
      "sender_name": "sandbox.loopmessage.com@imsg.im",
      "text": "hi",
      "webhook_id": "559864cd-4248-4768-b57a-c9c0a40093c4"
    }
  }