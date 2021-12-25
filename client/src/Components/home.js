import '../css/style.css';
import axios from 'axios';

function home(){

    var config = {
      method: 'get',
      host: 'localhost',
      origin: 'http://localhost:8000/tweet',
      url: 'http://localhost:8000/tweet',
      headers: {'Access-Control-Allow-Origin':'http://localhost:8000/tweet',},
    
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    

    return(
        <div className="maincontainer">
            <div className="container">
                <h1>TweetPost</h1>
                <p>Generate a beautiful Post from a Tweet</p>
                <form onSubmit="tweetsubmit">
                    <div>
                        <input type="text" placeholder="Past a tweet url e.g. http://twitter.com/yokesh/status/15684840564"/>
                        <input type="submit" value="Generate"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default home;