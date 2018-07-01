import React from "react";
import MainContainer from '../common/MainContainer';

const EmailList = () => (
	<MainContainer title="EMAIL LIST">
    <br />
    <h4>We'll only send you useful information about the program. No spam! You can unsubscribe anytime.</h4>
    <br />
    {/*Begin MailChimp Signup Form*/}
    <div id="mc_embed_signup">
      <form action="https://google.us13.list-manage.com/subscribe/post?u=b8e251478e0c2eae326884c84&amp;id=5aa2bd8cbf" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe to our mailing list</h2>
          <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">First Name  <span className="asterisk">*</span></label>
            <input type="text" name="FNAME" className="required" id="mce-FNAME" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-LNAME">Last Name  <span className="asterisk">*</span></label>
            <input type="text" name="LNAME" className="required" id="mce-LNAME" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-PFNAME">Player First Name </label>
            <input type="text" name="PFNAME" className="" id="mce-PFNAME" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-PLNAME">Player Last Name </label>
            <input type="text" name="PLNAME" className="" id="mce-PLNAME" />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-group[3641]">Grade as of 2018/19 school year <span className="asterisk">*</span></label>
            <select name="group[3641]" className="REQ_CSS required" id="mce-group[3641]">
              <option value=""></option>
              <option value="1">8th</option>
              <option value="2">7th</option>
              <option value="4">6th</option>
              <option value="8">5th</option>
              <option value="16">4th</option>
              <option value="32">3rd</option>
              <option value="128">2nd</option>
              <option value="512">1st</option>
              <option value="1024">K</option>
            </select>
          </div>
          <div className="mc-field-group input-group">
            <strong>Email Format </strong>
            <ul>
              <li><input type="radio" value="html" name="EMAILTYPE" id="mce-EMAILTYPE-0" defaultChecked /><label htmlFor="mce-EMAILTYPE-0">html</label></li>
              <li><input type="radio" value="text" name="EMAILTYPE" id="mce-EMAILTYPE-1" /><label htmlFor="mce-EMAILTYPE-1">text</label></li>
            </ul>
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
          </div>    {/*Real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_b8e251478e0c2eae326884c84_5aa2bd8cbf" tabIndex="-1" value="" />
          </div>
          <div className="clear">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
          </div>
        </div>
      </form>
    </div>
	</MainContainer>
);

export default EmailList;
