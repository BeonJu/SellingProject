import React from 'react';
import "../stylesheets/topbar.css";
// import $ from 'jquery';
import { useState } from 'react';

// yarn add @mui/icons-material  amterial-ui of icon 을 쓰기 위하여 추가 설치
function Topbar() {
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
              <li
                className="depth1"
                onMouseEnter={() => setView(1)}
                onMouseLeave={() => setView(0)}
              >
                <span className="topMenu">MEN</span>
                <ul className={view === 1 ? 'subMenuActive' : 'subMenu'}>
                  <li>
                    <p>MEN</p>
                    <a href="#">패딩</a>
                  </li>
                </ul>
              </li>
              <li
                className="depth1"
                onMouseEnter={() => setView(2)}
                onMouseLeave={() => setView(0)}
              >
                <span className="topMenu">WOMEN</span>

                <ul className={view === 2 ? 'subMenuActive' : 'subMenu'}>
                  <li>우먼</li>
                </ul>
              </li>

              <li
                className="depth1"
                onMouseEnter={() => setView(3)}
                onMouseLeave={() => setView(0)}
              >
                <span className="topMenu">SHOES</span>

                <ul className={view === 3 ? 'subMenuActive' : 'subMenu'}>
                  <li>슈즈</li>
                </ul>
              </li>

              <li
                className="depth1"
                onMouseEnter={() => setView(4)}
                onMouseLeave={() => setView(0)}
              >
                <span className="topMenu">KIDS</span>
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
            <span className="topIconBadge">아이콘</span>
          </div>
          {/* 톱니바퀴 모양 설정(Setting) */}
          <div className="topbarIconContainer">
            <span className="topIconBadge">아이콘</span>
          </div>
          <img
            src="data:image/jpeg;base64,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"
            alt="profile_img"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
export default Topbar;
