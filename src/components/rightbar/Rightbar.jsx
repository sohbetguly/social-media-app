import "./rightbar.css";
import { Users } from "./../../dummyData";
import Online from "./../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> hav a birthday today
          </span>
        </div>
        <img className="rightBarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Gumdag</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Turkmenistan</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Gumdag</span>
          </div>
        </div>

        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>

          <div className="rightBarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>

          <div className="rightBarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>

          <div className="rightBarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
