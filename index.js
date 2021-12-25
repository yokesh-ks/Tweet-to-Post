const express = require('express');
const cors =require('cors');

const port = process.env.PORT || 4000;

const app = express();
app.use[cors()];
app.use(express.json());
//app.use(express.static('client/build'));


let data;
app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.get('/tweet', (req, res) => {
  const request = require('request');
    request({
      url: 'https://api.twitter.com/2/tweets/1439586520499822594?tweet.fields=attachments,author_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld',
      'headers': {
      'Authorization': 'Bearer    AAAAAAAAAAAAAAAAAAAAAKboTgEAAAAAWbvwRMptC2sAKLhg0iOyFWKSoDg%3DjV6bO9joUP9K5H7nH0Pzh7EH6nUmzZEdjp5dvHIdGJVooyk9T4', 
    },
    rejectUnauthorized: false
  }, function(err, res) {
      if(err) {
        console.error(err);
      } else {
        data=res.body;
        console.log(res.body);
      }
    });
  res.send(data);
})

app.listen(port, function(){
  console.log("express is running");
})