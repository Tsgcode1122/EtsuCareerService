import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { Link } from "react-router-dom";
import {
  UserOutlined,
  TeamOutlined,
  BankOutlined,
  SolutionOutlined,
  IdcardOutlined,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  GiftOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  RightOutlined,
} from "@ant-design/icons";
import logo from "../Images/Etsulogo.png";
import Ham from "../IconImages/menu.png";
import { Colors } from "../Colors/ColorComponent";
import { Menu } from "antd";
const skeletonLoading = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0.1;
  }
  50% {
    transform: translateX(100%);
    opacity: 0.2;
  }
  100% {
    transform: translateX(700%);
    opacity: 0.1;
  }
`;
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const sidebarRef = useRef(null);
  const [openKeys, setOpenKeys] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);
  const StyledMenu = styled(Menu)``;
  return (
    <>
      <StyledNavbar style={{ top: visible ? 0 : "-5rem" }}>
        <HeadSpace>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>

          <MenuToggle onClick={toggleSidebar}>
            <img src={Ham} alt="Menu Icon" />
          </MenuToggle>
        </HeadSpace>
      </StyledNavbar>
      <NavHeight></NavHeight>
      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef}>
        <Space>
          <CloseIcon onClick={toggleSidebar}>X</CloseIcon>
        </Space>
        {/* <WorkInProgress /> */}
        <SidebarContent>
          <LinkContainer>
            <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={handleOpenChange}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "none",

                border: "none",
                margin: "0",
              }}
            >
              <CustomMenuSubmenu key="home" icon={<HomeOutlined />}>
                <Link to="/" onClick={closeSidebar}>
                  Home{" "}
                  <RightOutlined
                    style={{ fontSize: "12px", fontWeight: "900" }}
                  />
                </Link>
              </CustomMenuSubmenu>

              {/* Students Dropdown */}
              <MenuSubmenu
                key="students"
                icon={<UserOutlined />}
                title={<span>Students</span>}
                style={{ padding: "0" }}
              >
                <Menu.Item
                  key="student-resources"
                  style={{ paddingLeft: "35px" }}
                >
                  <Link to="/student-resources" onClick={closeSidebar}>
                    Resumes | Employment Services
                  </Link>
                </Menu.Item>
                <Menu.Item key="job-search" style={{ paddingLeft: "35px" }}>
                  <Link to="/job-search" onClick={closeSidebar}>
                    Sample Resumes
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="career-advising"
                  style={{ paddingLeft: "35px" }}
                >
                  <Link to="/career-advising" onClick={closeSidebar}>
                    Bucky's Career Closet
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="development-programs"
                  style={{ paddingLeft: "35px" }}
                >
                  <Link to="/development-programs" onClick={closeSidebar}>
                    Online Resources
                  </Link>
                </Menu.Item>
              </MenuSubmenu>

              {/* Alumni Dropdown */}
              <MenuSubmenu
                key="alumni"
                icon={<TeamOutlined />}
                title={<span>Alumni</span>}
              >
                <Menu.Item
                  key="career-transition"
                  style={{ paddingLeft: "35px" }}
                >
                  <Link to="/alumni-resources" onClick={closeSidebar}>
                    Resumes | Employment Services
                  </Link>
                </Menu.Item>
                <Menu.Item key="networking" style={{ paddingLeft: "35px" }}>
                  <Link to="/networking" onClick={closeSidebar}>
                    Sample Resumes
                  </Link>
                </Menu.Item>
                <Menu.Item key="job-board" style={{ paddingLeft: "35px" }}>
                  <Link to="/job-board" onClick={closeSidebar}>
                    Online Resources
                  </Link>
                </Menu.Item>
              </MenuSubmenu>

              {/* Employers Dropdown */}
              <MenuSubmenu
                key="employers"
                icon={<BankOutlined />}
                title={<span>Employers</span>}
              >
                <Menu.Item key="partner" style={{ paddingLeft: "35px" }}>
                  <Link to="/partner" onClick={closeSidebar}>
                    Employer Services
                  </Link>
                </Menu.Item>
                <Menu.Item key="career-fairs" style={{ paddingLeft: "35px" }}>
                  <Link to="/career-fairs" onClick={closeSidebar}>
                    Post a Job | Handshake
                  </Link>
                </Menu.Item>
                <Menu.Item key="resume-access" style={{ paddingLeft: "35px" }}>
                  <Link to="/resume-access" onClick={closeSidebar}>
                    Experiential Learning
                  </Link>
                </Menu.Item>
                <Menu.Item key="testimonials" style={{ paddingLeft: "35px" }}>
                  <Link to="/testimonials" onClick={closeSidebar}>
                    Career Fairs
                  </Link>
                </Menu.Item>
              </MenuSubmenu>

              {/* Other Links with arrow */}
              <CustomMenuSubmenu key="faculty" icon={<IdcardOutlined />}>
                <Link to="/user-dashboard" onClick={closeSidebar}>
                  <span>Faculty & Staff</span> <RightOutlined />
                </Link>
              </CustomMenuSubmenu>
              <CustomMenuSubmenu key="families" icon={<HeartOutlined />}>
                <Link to="/families" onClick={closeSidebar}>
                  <span>Families</span> <RightOutlined />
                </Link>
              </CustomMenuSubmenu>
              <CustomMenuSubmenu key="contact" icon={<MailOutlined />}>
                <Link to="/contact" onClick={closeSidebar}>
                  <span>Contact</span> <RightOutlined />
                </Link>
              </CustomMenuSubmenu>
            </Menu>
          </LinkContainer>
        </SidebarContent>
      </Sidebar>

      {isSidebarOpen && <Overlay onClick={closeSidebar} />}
      <BigNav>
        <Space2>
          <div>
            <Link to="/">
              <Logo src={logo} alt="Logo" />
            </Link>
          </div>
          <div>
            <BigLinkContainer>
              <LinkWrapper>
                <Link to="/">
                  <span>Home</span>
                </Link>
              </LinkWrapper>

              {/* Student Dropdown */}
              <LinkWrapper
                onMouseEnter={() => handleMouseEnter("student")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="#">
                  <span>Student</span>
                </Link>
                <DropdownMenu show={activeDropdown === "student"}>
                  <DropdownLink to="/student-resources">
                    Resumes | Employment Services
                  </DropdownLink>
                  <DropdownLink to="/job-search">Sample Resumes</DropdownLink>
                  <DropdownLink to="/career-advising">
                    Experiential Learning
                  </DropdownLink>
                  <DropdownLink to="/development-programs">
                    Bucky's Career Closet
                  </DropdownLink>
                  <DropdownLink to="/development-programs">
                    Online Resources
                  </DropdownLink>
                </DropdownMenu>
              </LinkWrapper>

              {/* Alumni Dropdown */}
              <LinkWrapper
                onMouseEnter={() => handleMouseEnter("alumni")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="#">
                  <span>Alumni</span>
                </Link>
                <DropdownMenu show={activeDropdown === "alumni"}>
                  <DropdownLink to="/career-transition">
                    Resumes | Employment Services
                  </DropdownLink>
                  <DropdownLink to="/networking">Sample Resumes</DropdownLink>
                  <DropdownLink to="/job-board">Online Resources</DropdownLink>
                  <DropdownLink to="/success-stories">
                    Success Stories
                  </DropdownLink>
                </DropdownMenu>
              </LinkWrapper>

              {/* Employers Dropdown */}
              <LinkWrapper
                onMouseEnter={() => handleMouseEnter("employers")}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="#">
                  <span>Employers</span>
                </Link>
                <DropdownMenu show={activeDropdown === "employers"}>
                  <DropdownLink to="/partner">Employer Services</DropdownLink>
                  <DropdownLink to="/career-fairs">
                    Post a Job | Handshake
                  </DropdownLink>
                  <DropdownLink to="/resume-access">
                    Experiential Learning
                  </DropdownLink>
                  <DropdownLink to="/testimonials">Career Fairs</DropdownLink>
                  <DropdownLink to="/testimonials">Maps & Parking</DropdownLink>
                </DropdownMenu>
              </LinkWrapper>

              {/* Other Links */}
              <LinkWrapper>
                <Link to="/user-dashboard">
                  <span>Faculty & Staff</span>
                </Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link to="/families">
                  <span>Families</span>
                </Link>
              </LinkWrapper>
              <LinkWrapper>
                <Link to="/contact">
                  <span>Contact Us</span>
                </Link>
              </LinkWrapper>
            </BigLinkContainer>
          </div>
        </Space2>
      </BigNav>
    </>
  );
};

const LinkWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%; /* Places it directly below the link */
  left: 0;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 200px;
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 10;
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 8px 12px;
  color: #333;
  text-decoration: none;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const MenuSubmenu = styled(Menu.SubMenu)`
  a {
  }
  .ant-menu-submenu-title {
    width: 100% !important;
    color: ${Colors.darkBlue} !important;
    padding: 0 10px !important;
    border: none !important;
    margin: 0 !important;
  }
  .ant-menu-item:hover,
  .ant-menu-submenu-title:hover,
  .ant-menu-item-selected,
  .ant-menu-submenu-title-selected {
    background: ${Colors.darkBlue}!important;
    color: white !important;
    box-shadow: none !important;
  }
  .ant-menu-submenu {
    background-color: #f8f8f8; /* Replace with your color */
  }
  .ant-menu-item-icon {
    margin-right: 8px !important;
  }

  background: #f6f6f6;
  color: ${Colors.darkBlue} !important;
  font-size: 12px !important;
  width: 100% !important;
  padding: 0px !important;
  border: none !important;
  margin: 0 !important;
`;
const CustomMenuSubmenu = styled(Menu.Item)`
  background: #f6f6f6;
  .ant-menu-item:hover {
    background: ${Colors.darkBlue}!important;
    color: white !important;
    box-shadow: none !important;
  }
  .ant-menu-item-icon {
    /* margin-right: 5px !important; */
  }
  width: 100% !important;
  padding: 0 10px !important;
  margin: 0 !important;
  color: ${Colors.darkBlue} !important;
  font-size: 12px !important;
  &:hover {
    background: ${Colors.darkBlue}!important;
    color: white !important;
    box-shadow: none !important;
  }

  &.ant-menu-item-selected {
    background: ${Colors.darkBlue}!important;
    color: white !important;
    box-shadow: none !important;
  }

  .ant-menu-item:hover,
  .ant-menu-item-active {
    background: ${Colors.darkBlue}!important;
    color: white !important;
    box-shadow: none !important;
  }
`;

// big Nav
const BigNav = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999 !important;
  background: white;
  color: ${Colors.darkBlue};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
  img {
    max-width: 100%;
    height: 40px;
  }
  @media screen and (max-width: 999px) {
    display: none;
  }
  @media screen and (min-width: 800px) {
    position: fixed;
  }
`;
const Space2 = styled.div`
  padding: 4px 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 800px) {
    padding: 4px 2rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 8px 4ch;
  }
  @media screen and (min-width: 1200px) {
    padding: 10px 6rem;
  }
`;
const BigLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  color: ${Colors.darkBlue};
  a {
    text-decoration: none;
    &:hover {
      text-decoration-line: underline;
      color: ${Colors.darkBlue};
      transform: scale(1.05);
    }
  }
  span {
    color: ${Colors.darkBlue};
  }
`;
const Logo = styled.img`
  max-width: 100%;
  height: 30px !important;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 5px;
  margin-bottom: 10px;
`;

const NavHeight = styled.div`
  height: 3rem;
`;
const Space = styled.div`
  align-items: center;
  background: #f6f6f6 !important;
  display: flex;
  height: 3rem;
  padding: 3px 20px;

  color: ${Colors.darkBlue} !important;
  justify-content: end;
`;

const StyledNavbar = styled.div`
  @media screen and (max-width: 999px) {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999 !important;
    background-color: ${Colors.white};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: top 0.3s;
    img {
      max-width: 100%;
      height: 40px;
    }
  }
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const HeadSpace = styled.div`
  align-items: center;
  display: flex;
  margin: 9px 20px;
  justify-content: space-between;
`;

const MenuToggle = styled.div`
  margin: 0;
  cursor: pointer;
  img {
    max-width: 100%;
    height: 30px;

    @media screen and (max-width: 320px) {
      height: 30px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 30px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 30px;
    }
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  border-radius: 20px 0 0 20px;
  border-left: 0.5px solid #313538;
  transition: right 0.5s ease-in-out;
  z-index: 1000;
  overflow-x: hidden;
  @media screen and (max-width: 320px) {
    width: 250px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 280px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;

const SidebarContent = styled.div`
  padding: 10px;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
  a {
    text-decoration: none;

    align-items: center;

    border-radius: 10px;
    justify-content: space-between;
    padding: 8px;
    display: flex;

    gap: 20px;
    img {
      max-width: 100%;
      height: 25px;
    }
  }
`;

const CloseIcon = styled.div`
  /* position: absolute; */
  color: ${Colors.darkBlue} !important;
  font-size: 24px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export default Navbar;
