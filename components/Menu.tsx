const Menu = ({ reactFullAPI }: any) => {
    return (
        <div className="fab-container">
            <div className="fab fab-icon-holder">
                <div className="menu-bar">
                    Menu
                </div>
            </div>
            <ul className="fab-options">
                <li onClick={() => reactFullAPI.moveTo(1, 0)}>
                    <span className="fab-label">Welcome</span>
                    <div className="fab-icon-holder" style={{backgroundColor: '#16acea'}}/>
                </li>
                <li onClick={() => reactFullAPI.moveTo(2, 0)}>
                    <span className="fab-label">My Profile</span>
                    <div className="fab-icon-holder" style={{backgroundColor: '#e8d71e'}}/>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
