import React from 'react';
import './TopMain.css'

export const TopMain=()=>{
  return(
    <div className='mainview'>
      <div className='catch'>
        <h1>いつでも相談できる<br/>オンラインメンターを見つけよう</h1>
        <p>独学もいいけど、メンターをつけるともっと早い。<br/>やり取りは全てオンラインで完結。自宅でスキルアップしよう。</p>
        <div className='btn top_start'>
          今すぐ始める
        </div>
        <p className='small2 m-t1'>
          メンターとして登録したい方はこちら
        </p>
        <div className='slide_bar'>
          スライド
        </div>
        <div className='mainCatchCopy'>
          <div classNAme='inner'>
            <p className='alignCenter mainCatchCopy.lead'>
            プログラミング、デザイン、起業についての相談など、さまざまなジャンルのメンターがそろっています。</p> 
            <div className="resultBox flexBox">
              <div className='resultBox_item'>
                <p className='resultBox_item_label'>
                  ユーザー数
                </p>
                <p className='resultBox_item_num'>
                  23,000人
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}