
function Footer(){

      const handleInstagramClick = () => {
        window.open('https://www.instagram.com/your-profile', '_blank');
    };

    const handleFacebookClick = () => {
        window.open('https://www.facebook.com/your-profile', '_blank');
    };

    const handleGitHubClick = () => {
        window.open('https://github.com/your-profile', '_blank');
    };


    return(
        <div className="footer">
            <button id="instagram-btn" onClick={handleInstagramClick}>
                <img src="../instagram.png" alt="" className="social-logo"/>
            </button>
            <button id="github-btn" onClick={handleGitHubClick}>
                <img src="../github.png" alt="" className="social-logo"/>
            </button>
            <button id="facebook-btn" onClick={handleFacebookClick}>
                <img src="../facebook.png" alt="" className="social-logo"/>
            </button>
        </div>
    )
}

export default Footer