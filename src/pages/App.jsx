import { SocialLinks, ModalDonate } from "../components"
import avatar from "../assets/img/HNG_8079.jpg"
import { useEffect } from "react";
import useStore from "../store";

const App = () => {
  const { width, setWidth, isOpen, toggle } = useStore()

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const ModalOpen = () => {
    toggle(true)
  }

  const ModalClose = () => {
    toggle(false)
  }

  return (
    <>
      <div className="containerForPage">
        <div className="intro">
          <div className={`frame ${width > 839 ? 'frame-lg' : (width > 640 ? 'frame-md' : (width > 400 ? 'frame-sm' : 'frame-xsm'))}`}>
            <div className="avatar">
              <img
                src={avatar}
                className={`${width > 400 ? "avatarImg" : "avatarImgMobile"}`}
                alt=""
                width="100"
                height="100"
              />
            </div>
            <div className="nameAndDesc">
              <div className="desc-name">Tran Quoc Bao</div>
              <div className="desc-font">
                &quot;I choose to focus on what I can control and let go of what I cannot
                control.&quot;
              </div>
            </div>
            <div className="quote-source">
              - Favourite quote from I Am Affirmation App -
            </div>
            <div className="basic-info">
              <h2>Basic Info</h2>
              <ul>
                <li className="details">- SW Developer in Hanoi, Vietnam</li>
                <li className="details">- English, Japanese</li>
                <li className="details">- Interesting in Setup Workspace</li>
                <li className="details">- Pizza, Spaghetti</li>
              </ul>
            </div>
            <div className="btn-donate">
              <div className="text-btn" onClick={() => ModalOpen()}>Donate me here</div>
            </div>
            <hr />
            <div className="social-container">
              <SocialLinks />
            </div>
            <ModalDonate isOpen={isOpen} close={() => ModalClose()}/>
            {/* <ModalDonate isOpen={isOpen} handleClose={() => ModalClose()}>
              <Donate>
                <h1> Awesome modal </h1>
              </Donate>
            </ModalDonate> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App