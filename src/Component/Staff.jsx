import React from "react";
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

const staffHeads = [
  {
    image: staff1,
    name: "Jenny Lockmiller",
    title: "Director [M.Ed. - ETSU, BS - Tennessee State University]",
    email: "lockmilj@etsu.edu",
    phone: "423-423-4450",
  },
];

const careerCoachPublicHealth = [
  {
    image: staff2,
    name: "Calvin Purvis",
    title: "Assistant Director [MA, BBA]",
    Meet: "https://etsu.campus.eab.com/pal/mtlv62sAEl",
  },
];

const careerCoachInternships = [
  {
    image: staff3,
    name: "Elizabeth Haselsteiner",
    title: "Associate Director of Experiential Learning",
    Meet: "https://etsu.campus.eab.com/pal/6sjDM7wdzF",
  },
];

const careerCoachArtsSciences = [
  {
    image: staff4,
    name: "Laura Ferguson",
    title:
      "Coordinator of Employer Relations and Events, [MA Ed. & BA - Virginia Tech]",
    Meet: "https://etsu.campus.eab.com/pal/dbWzyTHEKq",
  },
];

const careerCoachEducation = [
  {
    image: staff5,
    name: "Chrislyn Shuford",
    title: "Coordinator, [M.Ed. & BS - ETSU]",
    Meet: "https://etsu.campus.eab.com/pal/OpasjB8d-8",
  },
];

const Others = [
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
  return (
    <StaffContainer>
      <SectionHeading>Meet the Staff</SectionHeading>
      <StaffList data={staffHeads} />

      <SectionHeading>
        Career Coach for College of Public Health and College of Health Sciences
      </SectionHeading>
      <StaffList data={careerCoachPublicHealth} />

      <SectionHeading>
        Career Coach for Internships and Experiential Learning Opportunities
      </SectionHeading>
      <StaffList data={careerCoachInternships} />

      <SectionHeading>
        Career Coach for the College of Arts and Sciences
      </SectionHeading>
      <StaffList data={careerCoachArtsSciences} />

      <SectionHeading>
        Clemmer College of Education and Human Development
      </SectionHeading>
      <StaffList data={careerCoachEducation} />

      <SectionHeading>Graduate Assistant</SectionHeading>
      <StaffList data={Others} />
    </StaffContainer>
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

const SectionHeading = styled.h2`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin: 20px 0;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
`;

const StaffRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const StaffCard = styled.div`
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 200px;
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
  display: block;
  font-size: 0.85rem;
  color: ${Colors.blue};
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
  color: ${Colors.blue};
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

export default Staff;
