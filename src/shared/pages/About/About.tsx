import MainLayout from '../../layouts/MainLayout';
import myImg from '../../../assets/myPic.jpg';
import './about.scss';

const About = () => {
  return (
    <MainLayout>
      <div className="aboutMeCont">
        <div className="topBorderDiv">aaaa</div>
        <div className="mainDiv">bbbbb</div>
        <div className="bottomBorderDiv">cccccc</div>
        <div className="mainCvBox">
          <div className="photoContainer">
            <img src={myImg} className='myPic'></img>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
