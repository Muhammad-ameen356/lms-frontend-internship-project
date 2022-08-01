import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import { BiCircle } from "react-icons/bi";
import ReactPlayer from "react-player";
import "../../App.scss";
import AcheiveGoalCard from "../../Components/AcheiveGoalCard/AcheiveGoalCard";
import BlogCard from "../../Components/BlogCard/BlogCard";
import CarouselComponent from "../../Components/Carousel/Carousel";
import CourseCard from "../../Components/CourseCard/CourseCard";
import CourseCategories from "../../Components/CourseCategories/CourseCategories";
import Footer from "../../Components/Footer/Footer";
import NavbarComponent from "../../Components/Navbar/Navbar";
import { headImg, profile, quoteImg } from "../../Constant/Images";
import {
  acheiveGoalData,
  categories,
  topCourse
} from "../../Constant/mockData";
import style from "./Home.module.scss";

const Home = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <>
      <div>
        <NavbarComponent />
        <div className={style.headerContainer}>
          <Container>
            <Row>
              <Col>
                <div className={style.innerMainContainer}>
                  <h1 className={style.headTitle}>
                    Learn Excilence in Teaching
                  </h1>
                  <h4 className={style.headSubTitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </h4>
                  <button className={style.exploreBtn}>Explore Courses</button>
                  <img src={headImg} alt="" className={style.headManImg} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={style.courseCategoriesContainer}>
          <Container>
            <Row>
              <Col>
                <div className={style.innerMainContainer}>
                  <h2 className={style.headTitle}>Course Categories</h2>
                  {/* <div className={style.bottomBorder}></div> */}
                  <div className={style.courseCategoriesBox}>
                    {categories?.map((item, ind) => {
                      return <CourseCategories title={item?.title} />;
                    })}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={style.topCoursesContainer}>
          <Container>
            <Row>
              <Col>
                <div className={style.innerMainContainer}>
                  <div className={style.topCoursesHead}>
                    <div>
                      <h2 className={style.headTitle}>Top Courses</h2>
                      <p className={`p-14 ${style.subTitle}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi bibendum venenatis mollis.{" "}
                      </p>
                    </div>
                    <div>
                      <button className={style.viewMorebutton}>
                        View More
                      </button>
                    </div>
                  </div>
                  <div>
                    <Row>
                      {topCourse?.map((item, ind) => {
                        return (
                          <Col
                            lg={4}
                            md={6}
                            sm={12}
                            style={{ marginTop: "20px" }}
                          >
                            <CourseCard data={item} />
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={style.discoverContianer}>
          <Container>
            <h3 className={style.title}>Discover Our Popular Course</h3>
            <div className={style.subTitleContainer}>
              <p className={`p-14 ${style.subTitle} `}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                bibendum venenatis mollis.
              </p>
            </div>

            <Row className={style.pointsContainer}>
              <Col lg={4} md={6} sm={12}>
                <div className={`${style.background} ${style.backgroundPink}`}>
                  <h4 className={style.innerText}>Top Rated</h4>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div
                  className={`${style.background} ${style.backgroundPurple}`}
                >
                  <h4 className={style.innerText}>Trending</h4>
                </div>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <div className={`${style.background} ${style.backgroundBlue}`}>
                  <h4 className={style.innerText}>New and Noteworthy</h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={style.bestSellerContainer}>
          <Container>
            <Row>
              <Col>
                <div className={style.innerMainContainer}>
                  <div className={style.topCoursesHead}>
                    <div>
                      <h2 className={style.headTitle}>Best Sellers Courses</h2>
                      <p className={`p-14 ${style.subTitle}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi bibendum venenatis mollis.
                      </p>
                    </div>
                    <div>
                      <button className={style.viewMorebutton}>
                        View More
                      </button>
                    </div>
                  </div>
                  <div>
                    <Row>
                      {topCourse?.map((item, ind) => {
                        return (
                          <Col
                            lg={4}
                            md={6}
                            sm={12}
                            style={{ marginTop: "20px" }}
                          >
                            <CourseCard data={item} />
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={style.acheiveGoalContainer}>
          <Container>
            <h3>Achieve Your Goals</h3>
            <p className={`p-14 ${style.subTitle} `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              bibendum venenatis mollis.
            </p>
            <Row>
              {acheiveGoalData?.map((item, index) => {
                return (
                  <Col lg={4} md={6} sm={12}>
                    <AcheiveGoalCard data={item} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <div className={style.clientAppriciationContainer}>
          <Container>
            <h3>Client's Appriciation</h3>
            <p className={`p-14 ${style.subTitle} `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              bibendum venenatis mollis.
            </p>

            <div className={style.quoteAndVideoContainer}>
              <div className={style.leftContainer}>
                <div className={style.quoteImage}>
                  <img src={quoteImg} alt="" />
                </div>
                <h6 className={style.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer a viverra nisl. Morbi in ornare nibh, sed efficitur
                  neque. Proin efficitur odio eget pulvinar hendrerit.
                </h6>
                <div className={style.profile}>
                  <div className={style.profileImgContainer}>
                    <img src={profile} className={style.profileImg} alt="" />
                  </div>
                  <div className={style.profileText}>
                    <p className={`p-16 ${style.profileName}`}>John Doe</p>
                    <p className={`p-14 ${style.profileDesignation}`}>
                      Graphic Designer
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.rightContainer}>
                <div className={style.videoContainer}>
                  <ReactPlayer
                    url="https://youtu.be/LUKs-GENceE"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
            <div className={style.companiesLogoContainer}>
              <h3>
                LMSedu is trusted by 322,000+ students and companies worldwide
              </h3>
              <div className={style.carouselContainer}>
                <CarouselComponent breakPoints={breakPoints} />
              </div>
            </div>
          </Container>
        </div>
        <div className={style.ourBlogContainer}>
          <Container>
            <h3>Our Blog</h3>
            <p className={`p-14 ${style.subTitle} `}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              bibendum venenatis mollis.
            </p>
            <Row>
              <Carousel
                breakPoints={breakPoints}
                // itemsToShow={3}
                showArrows={false}
                renderPagination={({ pages, activePage, onClick }) => {
                  return (
                    <div direction="row">
                      {pages.map((page) => {
                        const isActivePage = activePage === page;
                        return (
                          <BiCircle
                            key={page}
                            onClick={() => onClick(page)}
                            active={isActivePage}
                          />
                        );
                      })}
                    </div>
                  );
                }}
              >
                {topCourse?.map((item, index) => {
                  return (
                    <Col md={12}>
                      {" "}
                      <BlogCard key={index} data={item} />
                    </Col>
                  );
                })}
              </Carousel>
            </Row>
          </Container>
        </div>
        <div className={style.becomeInstructorContainer}>
          <Container>
            <h2>Become A Instructor</h2>
            <div className={style.inputAndBtnContainer}>
              <div className={style.inputAndBtnInnerContainer}>
                <input
                  type="text"
                  className={style.joinInput}
                  placeholder="Become a Instructor"
                />
                <button className={style.joinBtn}>Join</button>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
