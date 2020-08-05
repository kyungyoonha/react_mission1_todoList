import React from "react";

function Header() {
    return (
        <div className="header">
            <h1 className="header__title">React</h1>
            <h2 className="header__subTitle">Todo 리스트 만들기</h2>
        </div>
    );
}

export default React.memo(Header);
