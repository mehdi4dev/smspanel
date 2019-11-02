import React from 'react';
const Navbar =()=>{
    return (
        <header>
        <nav className="navbar">
            <ul className="main-nav">
            <li className="main-logo" onmouseover="profileShow()" onmouseout="profileHidden()">
                <img className="user-profile" src="./asset/jpg/user.profile.png" alt="" />
            </li>
            <li onclick="location.href='#'" onmouseover="sendingShow() " onmouseout="sendigHidden()"><span>ارسال پیام</span> </li>
            <li onclick="location.href='#'"><span>مدیریت گروه</span></li>
            </ul> 
            <div id="profile-container" onmouseover="profileShow() " onmouseout="profileHidden()">
            <div><i className="fa fa-cog" /><a href="#">تنظیمات</a></div>
            <div><i className="fa fa-sign-out" /><a href="#"> خروج</a></div>
            </div>
            <div id="sending-container" onmouseover="sendingShow() " onmouseout="sendigHidden()">
            <div><i className="fa fa-cog" /><a href="#">ارسال تکی</a></div>
            <div><i className="fa fa-sign-out" /><a href="#"> ارسال گروهی</a></div>
            </div>
        </nav>
        </header>

    );
}
export default Navbar;