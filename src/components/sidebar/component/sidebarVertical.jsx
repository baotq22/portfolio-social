import { useEffect, useState } from "react"
import showSidebar from "../../../assets/svg/sidebar-svgrepo-com.svg"
import switchDirection from "../../../assets/svg/switch-horizontal-svgrepo-com.svg"
import useStore from "../../../store/index"
import { NavItems } from "../../index"

export const SidebarVertical = ({ onClickShow, onChangeDirection, clickToClose, sidebarRef, direction, rotate, currentItems, activeIndex, clickAction }) => {
    const { width, setWidth } = useStore()

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    console.log(width)
    return (
        <div className='overlay'>
            <div className='sidebar'>
                <div className="sidebar__hide">
                    <img
                        src={showSidebar}
                        className={rotate}
                        onClick={onClickShow}
                    />
                    {width > 576 &&
                        <img
                            src={switchDirection}
                            className='sidebar__button'
                            onClick={onChangeDirection}
                        />
                    }
                </div>
                <div ref={sidebarRef} className="sidebar__menu">
                    {currentItems?.map((item, index) => {
                        return <NavItems
                            key={index}
                            to={item.to}
                            direction={direction}
                            activeIndex={activeIndex === index ? 'active' : ''}
                            display={item.display}
                            clickAction={clickAction}
                        />
                    }
                    )}
                </div>
            </div>
            <div className="blurry" onClick={clickToClose}></div>
        </div>
    )
}