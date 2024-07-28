import socialLinksJSON from "../../assets/json/icons.json"

export const SocialLinks = () => {
    return (
        <div className="social">
            <div className="title">SOCIAL LINKS</div>
            <div className="icon">
                {socialLinksJSON.map((social, index) => (
                    <div key={index}>
                        <a href={social.link} target="_blank"
                        ><img src={social.src} alt=""
                            /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}