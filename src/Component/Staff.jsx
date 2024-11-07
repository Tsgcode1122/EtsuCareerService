import React, { useEffect } from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import staff1 from "../Images/staff1.jpg";
import staff2 from "../Images/staff2.jpg";
import staff3 from "../Images/staff3.jpg";
import staff4 from "../Images/staff4.jpg";
import staff5 from "../Images/staff5.jpg";
import staff6 from "../Images/staff6.jpg";
import staff7 from "../Images/staff7.jpg";
import staff8 from "../Images/staff8.jpg";
import staff9 from "../Images/staff9.jpg";
import staff10 from "../Images/staff10.jpg";
import staff11 from "../Images/staff11.svg";
import { Colors } from "../Colors/ColorComponent";
import bluebg from "../Images/bluebg.jpg";

const staffHeads = [
  {
    image: staff1,
    name: "Jenny Lockmiller",
    title: "Director [M.Ed. - ETSU, BS - Tennessee State University]",
    email: "lockmilj@etsu.edu",
    phone: "423-423-4450",
  },
  {
    image: staff2,
    name: "Calvin Purvis",
    title: "Assistant Director [MA, BBA]",
    Meet: "https://etsu.campus.eab.com/pal/mtlv62sAEl",
    Head: "Career Coach for College of Public Health and College of Health Sciences",
  },
];

const middleStaff = [
  {
    image: staff3,
    name: "Elizabeth Haselsteiner",
    title: "Associate Director of Experiential Learning",
    Meet: "https://etsu.campus.eab.com/pal/6sjDM7wdzF",
    Head: "Career Coach for Internships and Experiential Learning Opportunities",
  },
  {
    image: staff4,
    name: "Laura Ferguson",
    title:
      "Coordinator of Employer Relations and Events, [MA Ed. & BA - Virginia Tech]",
    Meet: "https://etsu.campus.eab.com/pal/dbWzyTHEKq",
    Head: "Career Coach for the College of Arts and Sciences",
  },
  {
    image: staff5,
    name: "Chrislyn Shuford",
    title: "Coordinator, [M.Ed. & BS - ETSU]",
    Meet: "https://etsu.campus.eab.com/pal/OpasjB8d-8",
    Head: "Clemmer College of Education and Human Development",
  },
];

const graduateAssistants = [
  {
    image: staff6,
    name: "Oluseyi Aderimwale",
    Meet: "https://etsu.campus.eab.com/pal/QyqkErBu8q",
  },
  {
    image: staff7,
    name: "Taylor Michelle Lynch",
    Meet: "https://etsu.campus.eab.com/pal/cXXAiaDxbY",
  },
  {
    image: staff8,
    name: "Amber Nicole Riddle",
    Meet: "https://etsu.campus.eab.com/pal/56ZjgY9Nte",
  },
  {
    image: staff9,
    name: "Melissa K. Glaze",
    Meet: "https://etsu.campus.eab.com/pal/XICub_JoIk",
  },
  {
    image: staff10,
    name: "Matt Smith",
    Meet: "https://etsu.campus.eab.com/pal/H8eHCB5Cya",
  },
  {
    image: staff11,
    name: "Career Ambassadors",
    email: "careerambassador@etsu.edu",
    phone: "(423) 439-4450",
  },
];

const Staff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Heading>
        <h1>Meet the Staff</h1>
      </Heading>
      <StaffContainer>
        <Section>
          {/* <SectionHeading>Director and Assistant Director</SectionHeading> */}
          <StaffList data={staffHeads} />
        </Section>

        <Section>
          {/* <SectionHeading>Career Coaches</SectionHeading> */}
          <StaffList data={middleStaff} />
        </Section>

        <Section>
          <SectionHeading>Graduate Assistant</SectionHeading>
          <StaffList data={graduateAssistants} />
        </Section>
      </StaffContainer>
    </>
  );
};

const StaffList = ({ data }) => {
  return (
    <StaffRow>
      {data.map((staff, index) => (
        <StaffCard
          key={index}
          isHighlighted={staff.title?.includes("Director")}
        >
          {staff.Head && <HeadContent>{staff.Head}</HeadContent>}
          <Image src={staff.image} alt={staff.name} />
          <Name>{staff.name}</Name>
          <Title>{staff.title}</Title>
          <Contact>
            {staff.email ? (
              <>
                <Email href={`mailto:${staff.email}`}>
                  <FaEnvelope
                    style={{ marginRight: "8px", color: "#294EB7" }}
                  />
                  {staff.email}
                </Email>
                <Phone href={`tel:${staff.phone}`}>
                  <FaPhone style={{ marginRight: "8px", color: "#294EB7" }} />
                  {staff.phone}
                </Phone>
              </>
            ) : (
              <MeetButton
                href={staff.Meet}
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Meet
              </MeetButton>
            )}
          </Contact>
        </StaffCard>
      ))}
    </StaffRow>
  );
};

// Styled Components

const StaffContainer = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
`;

const SectionHeading = styled.h2`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin: 20px 0;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
`;

const Heading = styled.div`
  h1 {
    margin: 0;
    background: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  background-image: url(${bluebg});
  background-size: cover;
  color: white;
  background-position: center;
  text-align: center;
`;

const StaffRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const StaffCard = styled.div`
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 20px;
  height: 200px;
  width: auto;
  margin-bottom: 10px;
`;

const Name = styled.h3`
  font-size: 1rem;
  color: #333;
  margin: 0;
`;

const Title = styled.p`
  font-size: 0.85rem;
  color: #555;
  margin: 5px 0;
`;

const Contact = styled.div`
  margin-top: 10px;
`;

const Email = styled.a`
  display: flex;
  font-size: 0.85rem;
  color: ${Colors.blue};
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  svg {
    color: ${Colors.blue};
  }
`;

const Phone = styled.a`
  font-size: 0.85rem;
  display: flex;
  color: ${Colors.blue};
  color: ${Colors.blue};
  align-items: center;
  justify-content: center;
  text-decoration: none;
  svg {
    color: ${Colors.blue};
  }
  &:hover {
    text-decoration: underline;
  }
`;

const MeetButton = styled.a`
  display: inline-block;
  font-size: 0.85rem;
  color: #fff;
  background: ${Colors.blue};
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const HeadContent = styled.p`
  font-size: 0.9rem;
  color: ${Colors.darkBlue};
  font-weight: bold;
  margin: 5px 0;
  font-style: italic;
`;

export default Staff;
