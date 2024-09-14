function Info(){

    const handleEmailClick = () => {
        window.location.href = 'mailto:juman.code@gmail.com';
    };

    const handleLinkedinClick = () =>{
        window.open("https://www.linkedin.com/in/juman-kaushik-14b7aa202/", "_blank")
    }

    return(
        <div className="info">
            <img src="../profile.png" alt="profile" className="profile-img"/>
            <h2>Juman Kaushik</h2>
            <p>Full Stack Developer</p>
            <a href="https://juman-kaushik.netlify.app/" target="_main">https://juman-kaushik.netlify.app/</a>
            <div className="buttons">
                <div className="email">
                    <button id="emailBtn" onClick={handleEmailClick}>
                        <img src="../email.png" alt="" id="email-logo" />
                        Email
                        </button>
                </div>
                <div className="linkedin">
                    <button id="linkedinBtn" onClick={handleLinkedinClick}>
                        <img src="../linkedin.png" alt="" id="linkedin-logo"/>
                        LinkedIn
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Info



