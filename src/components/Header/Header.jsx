import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">MENTA</h1>
        <ul>
          <li>メンターを探す</li>
          <li>メンターを募集中</li>
          <li>ナレッジ</li>
        </ul>
        <div className="seach">
          <input id="q" placeholder="PHPなどスキル名で検索" type="text" />
        </div>
        <div className="nav_login">
          <div className="button">ログイン</div>
        </div>
        <div className="primaryButton">無料登録</div>
      </header>
      <div className="bandTitle">
        ユーザークーポンで「300円クーポン」プレゼント！まずは無料登録から！
      </div>
    </div>
  );
};
