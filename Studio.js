import React from 'react';
import './Studio.css'; // Make sure to include your CSS file
import img1 from './home.png';
const Studio = () => {
  return (
    <main>
      <div className="container">
        {/* LEFT */}
        <div className="left">
          <a className="profile">
            <div className="profile-photo"></div>
            <div className="handle">
              <h4>Ayesha Rai</h4>
              <p className="text-muted">@ayeshhhh</p>
            </div>
          </a>

          {/* SIDEBAR */}
          <div className="sidebar">
            <a className="menu-item active">
              <span><img src={img1} alt="Home" /></span>
              <h3>HOME</h3>
            </a>
            <a className="menu-item">
              <span><img src="./images/compass.png" alt="Explore" /></span>
              <h3>EXPLORE</h3>
            </a>
            <a className="menu-item" id="notifications">
              <span><img src="images/compass.png" alt="Notifications" /><small className="notification-count">9+</small></span>
              <h3>NOTIFICATION</h3>
            </a>
            <a className="menu-item" id="messages-notifications">
              <span><img src="images/mail.png" alt="Messages" /><small className="notification-count">6</small></span>
              <h3>MESSAGES</h3>
            </a>
            <a className="menu-item" id="theme">
              <span><img src="images/mail.png" alt="Theme" /></span>
              <h3>THEME</h3>
            </a>
            <a className="menu-item">
              <span><img src="images/settings.png" alt="Settings" /></span>
              <h3>SETTINGS</h3>
            </a>
          </div>
          {/* END OF SIDEBAR */}
          <label className="btn btn-primary" htmlFor="create-post">CREATE POST</label>
        </div>

        {/* MIDDLE */}
        <div className="middle">
          {/* STORIES */}
          <div className="stories">
            <div className="story">
                <img src="./images/OUTFIT 1.jpeg" className="storyImg"/>
                <p class="name">Your Story</p>
            </div>
            <div className="story">
                <img src="./images/OUTFIT 2.png" class="storyImg" />
                <p class="name">Naina Talwar</p>
            </div>
            <div className="story">
                <img src="./images/outfit3.jpeg" class="storyImg" />
                <p class="name">Ahana</p>
            </div>
            <div className="story">
                <img src="./images/outfit4.jpeg" class="storyImg" />
                <p class="name">Dia Singh</p>
            </div>
            <div className="story">
                <img src="./images/outfit5.jpg" class="storyImg" />
                <p class="name">Jyoti Kashyap</p>
            </div>
            <div className="story">
                <img src="./images/outfit6.jpg" class="storyImg" />
                <p class="name">Tanya</p>
            </div>
        </div>
          {/* END OF STORIES */}
          <form action="" className="create-post">
            <input type="text" placeholder="What's on your mind, Ayesha?" id="create-post" />
            <input type="submit" value="Post" className="btn btn-primary" />
          </form>

          <div className="feeds">
            {/* FEED 1 */}
            <div className="feed">
              <div className="head">
                <div className="user">
                  <div className="profile-photo">
                    <img src="./images/profile-1.jpg" alt="Profile" />
                  </div>
                  <div className="info">
                    <h3>Ria Sharma</h3>
                    <small>Dwarka, 47 Minutes Ago</small>
                  </div>
                </div>
                <span className="edit">
                  <img src="images/ellipses.png" alt="Edit" />
                </span>
              </div>

              <div className="photo">
                <img src="./images/post1.jpg" alt="Post" />
              </div>

              <div className="action-buttons">
                <div className="interaction-buttons">
                  <span><img src="./images/heart.png" alt="Heart Icon" /></span>
                  <span><img src="./images/comment.png" alt="Comments Icon" /></span>
                  <span><img src="./images/share.png" alt="Share Icon" /></span>
                </div>
                <div className="bookmark">
                  <span><img src="./images/save-instagram.png" alt="Save Icon" /></span>
                </div>
              </div>

              <div className="liked-by">
                <span><img src="./images/c1.avif" alt="Liker 1" /></span>
                <span><img src="./images/c2.webp" alt="Liker 2" /></span>
                <span><img src="./images/profile-pic.webp" alt="Liker 3" /></span>
                <p>Liked by <b>Anamika Kumari</b> and <b>2,323 others</b></p>
              </div>

              <div className="caption">
                <p><b>Ria Sharma</b> Out and About. <span className="harsh-tag">#lifestyle</span></p>
              </div>

              <div className="comments text-muted">
                View all 27 comments
              </div>
            </div>

            {/* FEED 2 */}
            <div className="feed">
              <div className="head">
                <div className="user">
                  <div className="profile-photo">
                    <img src="./images/c1.avif" alt="Profile" />
                  </div>
                  <div className="info">
                    <h3>Juhi Kapoor</h3>
                    <small>Goa, 15 Minutes Ago</small>
                  </div>
                </div>
                <span className="edit">
                  <img src="images/ellipses.png" alt="Edit" />
                </span>
              </div>

              <div className="photo">
                <img src="./images/post4.jpg" alt="Post" />
              </div>

              <div className="action-buttons">
                <div className="interaction-buttons">
                  <span><img src="./images/heart.png" alt="Heart Icon" /></span>
                  <span><img src="./images/comment.png" alt="Comments Icon" /></span>
                  <span><img src="./images/share.png" alt="Share Icon" /></span>
                </div>
                <div className="bookmark">
                  <span><img src="./images/save-instagram.png" alt="Save Icon" /></span>
                </div>
              </div>

              <div className="liked-by">
                <span><img src="./images/c1.avif" alt="Liker 1" /></span>
                <span><img src="./images/c2.webp" alt="Liker 2" /></span>
                <span><img src="./images/profile-pic.webp" alt="Liker 3" /></span>
                <p>Liked by <b>Maisha Singh</b> and <b>2,121 others</b></p>
              </div>

              <div className="caption">
                <p><b>Katyayani Singh</b> Sandy Toes. <span className="harsh-tag">#beachy</span></p>
              </div>

              <div className="comments text-muted">
                View all 89 comments
              </div>
            </div>

            {/* FEED 3 */}
            {/* Add feed 3 here similarly */}
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          {/* Add content for the right section here */}
        </div>
      </div>
    </main>
  );
}

export default Studio;