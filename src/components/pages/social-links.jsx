import fb from "../../assets/social-icon/fb.png"
import ig from "../../assets/social-icon/ig.png"
import li from "../../assets/social-icon/li.png"
import rd from "../../assets/social-icon/rd.png"
import sc from "../../assets/social-icon/sc.png"
import tt from "../../assets/social-icon/tt.svg"
import yb from "../../assets/social-icon/yb.png"

export const SocialLinks = () => {
    const socialLinksJSON = [
        {
            "src": fb,
            "link": "https://www.facebook.com/tuong.quan.22/"
        },
        {
            "src": ig,
            "link": "https://www.instagram.com/dorino__/"
        },
        {
            "src": li,
            "link": "https://www.linkedin.com/in/baoqtran22/"
        },
        {
            "src": rd,
            "link": "https://www.reddit.com/user/Live-Month-2949/"
        },
        {
            "src": sc,
            "link": "https://soundcloud.com/ang-c-p-nh-t-6/"
        },
        {
            "src": tt,
            "link": "https://www.tiktok.com/@kenneth.chan.22/"
        },
        {
            "src": yb,
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