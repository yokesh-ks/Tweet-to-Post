const API_ENDPOINT = "https://api.twitter.com/2";

const getRequestUrl = (path) => `${API_ENDPOINT}/${path}`;

const Token = 'AAAAAAAAAAAAAAAAAAAAAKboTgEAAAAAWbvwRMptC2sAKLhg0iOyFWKSoDg%3DjV6bO9joUP9K5H7nH0Pzh7EH6nUmzZEdjp5dvHIdGJVooyk9T4'

export const apiCall = (path) => {
  console.log(path)
  fetch(getRequestUrl(path), {
    method: "GET",
    mode: 'no-cors',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${Token}`,
      'Host': 'api.twitter.com'
    },
    rejectUnauthorized: false
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};


export const tweetPost = (tweetId) =>
  apiCall(`tweets/${tweetId}?tweet.fields=author_id,text`);

export const userProfile = (userId) =>
  apiCall(`users/${userId}?user.fields=profile_image_url`);
