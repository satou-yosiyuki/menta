import React from "react";
import "./LoginMain.css";

export const LoginMain = () => {
  return (
    <main id="app">
      <div className="loginpanel_wrap p-t6 p-b6">
        <div className="login_panel">
          <div className="login-title">
            <h1>ログイン</h1>
          </div>
          <div className="form_item">
            <div className="input_head">
              <p>メールアドレス</p>
            </div>
            <div className="input_body">
              <input type="email" name="email" placeholder="info@menta.works" />
            </div>
          </div>
          <div className="form-item">
            <div className="input_head">パスワード(英数字８文字以上)</div>
            <div className="input_body">
              <input type="password" name="password" placeholder="Password" />
            </div>
          </div>
          <div className="submit_buttons">
            <div className="m-t2">
              <button type="submit" className="submit_button">
                ログイン
              </button>
              <div className="m-t2">
                <label>
                  <input type="checkbox" name="remenber" />
                  ログインしたままにする
                </label>
              </div>
            </div>
          </div>
          <div className="m-t2">-Login with-</div>

          <div className="m-t3 btn_small">
            アカウントをお持ちではない方はこちら
          </div>
          <div className="m-t1 color">パスワードをお忘れの方はこちら</div>
        </div>
      </div>
    </main>
  );
};
