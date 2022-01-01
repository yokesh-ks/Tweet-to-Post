const express = require("express");
const cors = require("cors");
const request = require("request");

const port = process.env.PORT || 4000;

const app = express();
app.use[cors()];
app.use(express.json());
//app.use(express.static('client/build'));

let data;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const API_ENDPOINT = "https://api.twitter.com/2";

const getRequestUrl = (id) => `${API_ENDPOINT}/tweets/${id}?tweet.fields=author_id,text`;
const Token =
  "AAAAAAAAAAAAAAAAAAAAAKboTgEAAAAAWbvwRMptC2sAKLhg0iOyFWKSoDg%3DjV6bO9joUP9K5H7nH0Pzh7EH6nUmzZEdjp5dvHIdGJVooyk9T4";

app.get("/tweet/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    request(
      {
        url: getRequestUrl(_id),
        headers: {
          Authorization: `Bearer ${Token}`,
        },
        rejectUnauthorized: false,
      },
      function (err, res) {
        if (err) {
          console.error(err);
        } else {
          data = res.body;
          console.log(res.body);
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.json("failed to fetch");
  }
});

app.listen(port, function () {
  console.log("express is running");
});
