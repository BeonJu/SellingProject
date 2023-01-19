import React from 'react';
import '../stylesheets/topbar.css';
// import $ from 'jquery';
import { useState } from 'react';

import SignUp_button from './home/SignUpButton';

// yarn add @mui/icons-material  amterial-ui of icon 을 쓰기 위하여 추가 설치
function TopbarLogin() {
  const [view, setView] = useState(0);

  return (
    // topbar에 들어갈 메뉴들 추가
    <div className="topbar">
      {/* topbar에 style을 적용하기 위해서 Wrapper, Left, Right 구분해서 classname 선언 */}
      <div className="topbarWrapper">
        <div className="logoMenuWrapper">
          <div className="topLogo">
            <span className="logo">Discavery expedition</span>
          </div>
          <div className="menuWrapper">
            <ul className="menu">
              <li className="depth1">
                <span
                  className="topMenu"
                  onMouseEnter={() => setView(1)}
                  onMouseLeave={() => setView(0)}
                >
                  MEN
                </span>
                <ul className={view === 1 ? 'subMenuActive' : 'subMenu'}>
                  <li>
                    <p>MEN</p>
                    <a href="#">패딩</a>
                  </li>
                </ul>
              </li>
              <li className="depth1">
                <span
                  className="topMenu"
                  onMouseEnter={() => setView(2)}
                  onMouseLeave={() => setView(0)}
                >
                  WOMEN
                </span>

                <ul className={view === 2 ? 'subMenuActive' : 'subMenu'}>
                  <li>우먼</li>
                </ul>
              </li>

              <li className="depth1">
                <span
                  className="topMenu"
                  onMouseEnter={() => setView(3)}
                  onMouseLeave={() => setView(0)}
                >
                  SHOES
                </span>

                <ul className={view === 3 ? 'subMenuActive' : 'subMenu'}>
                  <li>슈즈</li>
                </ul>
              </li>

              <li className="depth1">
                <span
                  className="topMenu"
                  onMouseEnter={() => setView(4)}
                  onMouseLeave={() => setView(0)}
                >
                  KIDS
                </span>
                <ul className={view === 4 ? 'subMenuActive' : 'subMenu'}>
                  <li>키즈</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* logo & menu end */}

        <div className="topIcon">
          {/* 종 모양 알람 */}

          {/* 지구본 모양 언어설정 */}
          <div className="topbarIconContainer">
            {/* <span className="topIconBadge">Sign in</span> */}
            <SignUp_button></SignUp_button>
          </div>
          {/* 톱니바퀴 모양 설정(Setting) */}
          <div className="topbarIconContainer">
            <span className="topIconBadge">Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopbarLogin;
