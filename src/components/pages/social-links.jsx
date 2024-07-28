export const SocialLinks = () => {
    const socialLinksJSON = [
        {
            "src": "src/assets/social-icon/fb.png",
            "link": "https://www.facebook.com/tuong.quan.22/"
        },
        {
            "src": "src/assets/social-icon/ig.png",
            "link": "https://www.instagram.com/dorino__/"
        },
        {
            "src": "src/assets/social-icon/li.png",
            "link": "https://www.linkedin.com/in/baoqtran22/"
        },
        {
            "src": "src/assets/social-icon/rd.png",
            "link": "https://www.reddit.com/user/Live-Month-2949/"
        },
        {
            "src": "src/assets/social-icon/sc.png",
            "link": "https://soundcloud.com/ang-c-p-nh-t-6/"
        },
        {
            "src": "src/assets/social-icon/tt.svg",
            "link": "https://www.tiktok.com/@kenneth.chan.22/"
        },
        {
            "src": "src/assets/social-icon/yb.png",
            "link": "https://www.youtube.com/channel/UCSxQcqfblnoGVgt83DpFH0Q/"
        }
    ]
    
    return (
        <div className="social">
            <div className="title">SOCIAL LINKS</div>
            <div className="icon">
                {socialLinksJSON.map((social, index) => (
                    <div key={index}>
                        <a href={social.link} target="_blank">
                            <img src={social.src} alt=""/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}