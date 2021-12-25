import '../css/style.css';

function navbar(){
    return(
        <div className="navbar">
        <div className = "left-side">
            TweetPost
        </div>
        <div className = "right-side">
            <ul>
                <li>Home</li>
                <li>Documentation</li>
                <li>Support Me</li>
                <li>About Me</li>
            </ul>
        </div>
    </div>
    )
    
}

export default navbar;