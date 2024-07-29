import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import hideSidebar from "../../assets/svg/sidebar-svgrepo-com.svg"
import '../../scss/sidebar.scss';
import { SidebarHide, SidebarHorizontal, SidebarVertical } from "../index"
import useStore from "../../store/index";

const sidebarNavItemsForAuthenticated = [
    {
        display: 'Welcome',
        to: '/portfolio-social',
        section: 'portfolio-social'
    },
    {
        display: 'Memory Game',
        to: '/portfolio-social/memory-game',
        section: 'portfolio-social/memory-game'
    }
]

export const SideBar = () => {
    const { setScroll, direction, setDirection } = useStore()
    const [isShowSidebar, setIsShowSidebar] = useState(false)
    const [currentNavbarItems, setCurrentNavbarItems] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1] + (window.location.pathname.split('/')[2] ? '/' + window.location.pathname.split('/')[2] : '');
        const activeItem = currentNavbarItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location, currentNavbarItems]);

    useEffect(() => {
        setCurrentNavbarItems([...sidebarNavItemsForAuthenticated])
    }, [])

    const onSidebarClick = () => {
        setIsShowSidebar(true)
        setScroll(false)
    }

    const onSidebarClickInHorizontal = () => {
        setIsShowSidebar(true)
        setScroll(true)
    }

    const onChangeDirection = () => {
        setDirection("horizontal")
        setScroll(true)
    }

    const handleOnSidebarClickShow = () => {
        setIsShowSidebar(false)
        setScroll(true)
    }

    const onChangeDirectionVertical = () => {
        setDirection("vertical")
        setScroll(false)
    }

    const hideSidebarInHorizontal = () => {
        setIsShowSidebar(false)
    }

    return (
        <>
            {!isShowSidebar &&
                <SidebarHide
                    src={hideSidebar}
                    rotate={direction === 'horizontal' ? 'sidebar__button sidebar__btn__rotate' : 'sidebar__button'}
                    onClick={direction === 'horizontal' ? onSidebarClickInHorizontal : onSidebarClick}
                />}
            <div className={`navbar-wrapper ${isShowSidebar && direction === 'vertical' ? '' : 'hiddenBlurry'}`}>
                {isShowSidebar && direction === 'vertical' &&
                    <SidebarVertical
                        sidebarRef={sidebarRef}
                        rotate='sidebar__button sidebar__btn__right'
                        onClickShow={handleOnSidebarClickShow}
                        onChangeDirection={onChangeDirection}
                        clickToClose={handleOnSidebarClickShow}
                        indicatorRef={indicatorRef}
                        currentItems={currentNavbarItems}
                        direction={direction}
                        activeIndex={activeIndex}
                        clickAction={handleOnSidebarClickShow}
                    />
                }
            </div>
            {isShowSidebar && direction === 'horizontal' &&
                <SidebarHorizontal
                    sidebarRef={sidebarRef}
                    rotate='sidebar__button sidebar__btn__left'
                    onClickShow={hideSidebarInHorizontal}
                    onChangeDirection={onChangeDirectionVertical}
                    indicatorRef={indicatorRef}
                    currentItems={currentNavbarItems}
                    direction={direction}
                    activeIndex={activeIndex}
                    clickAction={handleOnSidebarClickShow}
                />
            }
        </>
    )
};
