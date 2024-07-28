export const SidebarHide = ({onClick, src, rotate}) => {
    return (
        <div className="sidebar__show">
            <img
                src={src}
                className={rotate}
                onClick={onClick}
            />
        </div>
    )
}