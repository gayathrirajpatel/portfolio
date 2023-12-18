import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { Img } from '/workspaces/codespaces-react/src/figma.png';


const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary + 20};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Member = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const MemberImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const MemberName = styled.div`
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;


const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;


const index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
        <Image src={require('/workspaces/codespaces-react/src/figma.png')} alt="Next Steps Image"/> 

                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag) => (
                            <Tag>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc> 
                    <section>
                        <h2>Problem Statement</h2>
                        <p>This job portal was designed to address the unique challenges faced by international students in their pursuit of employment opportunities in the United States. In today's globalized world, these students encounter obstacles such as language barriers, unfamiliarity with local job markets, and complex visa regulations, all of which significantly impede their job search process. Recognizing the need for targeted solutions, we propose the development of a Job Portal specifically tailored to meet the distinctive needs of international students.

</p>
        <h2>User Research</h2>
        <ul>
          <li>Insights gathered from extensive user research, including surveys and interviews.</li>
          <li>Understanding the unique needs and challenges of international students in job searches.</li>
          <li><p>The user research aimed to understand the specific needs and challenges of international students in their job search process within the United States. The research involved using Google Forms to gather responses from targeted participants, specifically international students seeking job opportunities. The survey questions covered demographics, job search experiences, preferences for job portal features, and expectations when searching for jobs. The collected data underwent thorough quantitative and qualitative analysis, leading to the creation of personas representing typical international student job seekers.</p></li></ul>
          <div style={{ textAlign: 'center' }}>
<Image src={require('/workspaces/codespaces-react/src/research.png')} alt="User Research Image"  style={{ width: '25%', height: '25%' }} /> 
</div>
</section>
<section>
<li>		

<strong>Task 1: Networking Events</strong>

<li>User Story:

"As Jigar, an experienced CS graduate, I want to easily register for networking events on the portal so that I can expand my professional network and increase my chances of finding career growth opportunities."

</li>
<li>
Design Rationale:
<li>
Visual Appeal: The use of event cards with visuals makes the page engaging and encourages users to explore upcoming events.
</li>
<li>


 Event Details: Each event card provides essential information, such as date, time, location, and a brief description, allowing users to quickly assess the event's relevance.
 </li>
 <li>
 Call to Action: The "Register" button prominently placed on each card encourages user participation and simplifies the registration process.
 </li>
 <li>
 Responsive Design: The layout ensures a seamless experience on both web and mobile platforms, catering to the diverse needs of users.
 </li></li>
 </li>





     
        <div style={{ textAlign: 'center' }}>
<Image src={require('/workspaces/codespaces-react/src/task1.png')} alt="User Research Image"  style={{ width: '75%', height: '75%' }} /> 
</div>
        <div>
  <strong>Task 2: Job Search and Application</strong>
  <ul>
    <li>
      <strong>User Story:</strong>
      <p>
        "As Rahul, an ambitious Computer Science student, I want to seamlessly
        apply for jobs on the portal so that I can explore opportunities aligned
        with my academic pursuits and secure a position with visa sponsorship."
      </p>
    </li>
    <li>
      <strong>Design Rationale:</strong>
      <ul>
        <li>
          <strong>Intuitive Navigation:</strong>
          <p>
            <em>User-Centric Interface:</em> Design a user-centric interface
            that allows Rahul to easily navigate through job listings based on
            his preferences, such as location, job type, and industry.
          </p>
        </li>
        <li>
          <strong>Efficient Job Filtering:</strong>
          <p>
            <em>Smart Filters:</em> Implement smart filters that enable Rahul to
            narrow down job search results efficiently. These filters could
            include options like "Visa Sponsorship Available," ensuring Rahul
            finds opportunities that align with his specific requirements.
          </p>
        </li>
        <li>
          <strong>Detailed Job Listings:</strong>
          <p>
            <em>Comprehensive Information:</em> Each job listing should provide
            comprehensive details about the position, including required
            qualifications, responsibilities, and most importantly, the visa
            sponsorship information. This helps Rahul make informed decisions.
          </p>
        </li>
        {/* Add more design rationale points as needed */}
      </ul>
    </li>
  </ul>
</div>
<div style={{ textAlign: 'center' }}>
<Image src={require('/workspaces/codespaces-react/src/task2.png')} alt="User Research Image"  style={{ width: '75%', height: '75%' }} /> 
</div>

     

     
        {/* <img src="first_iteration_image.jpg" alt="1st Iteration Image" /> */}
      </section>

      {/* Usability Research Section */}
      <section>
        <h2>Usability Research</h2>
        <ul>
          <li>Insights from usability testing sessions, including user feedback and observations.</li>
          <li>Refinement of the user interface and overall usability of the job portal.</li>
        </ul>
        {/* <img src="usability_research_image.jpg" alt="Usability Research Image" /> */}
      </section>

      <section>
        <h2>Updated Solution</h2>
        <ul>
          <li>Enhancements made to the solution based on user feedback and findings from usability research.</li>
          <li>Ensuring a more user-friendly and effective platform for international students.</li>
        </ul>
        {/* <img src="updated_solution_image.jpg" alt="Updated Solution Image" /> */}
      </section>

      <section>
        <h2>Next Steps</h2>
        <ul>
          <li>Plans for the future development of the project, including additional features and improvements.</li>
          <li>Potential expansions to further enhance the job portal for international students.</li>
        </ul>
        <div>
  <h1>Enhanced Notifications:</h1>
  <ul>
    <li>
      <strong>Customizable Notifications:</strong>
      <p>
        Expand notification features by allowing users to customize
        notification preferences.
      </p>
    </li>
    <li>
      <strong>Notification Types:</strong>
      <p>
        Implement different notification types (e.g., in-app, email, or push
        notifications) based on user preferences.
      </p>
    </li>
  </ul>

  <h1>User Profiles:</h1>
  <ul>
    <li>
      <strong>Progress Tracking:</strong>
      <p>
        Develop user profiles where individuals can track their progress,
        preferences, and history within the application.
      </p>
    </li>
    <li>
      <strong>Personalization:</strong>
      <p>Allow users to personalize their profiles with additional information.</p>
    </li>
  </ul>

  <h1>Social Integration:</h1>
  <ul>
    <li>
      <strong>Social Sharing:</strong>
      <p>
        Integrate social media sharing options to allow users to share their
        achievements or activities within the app.
      </p>
    </li>
    <li>
      <strong>Social Login:</strong>
      <p>Implement social login options for a seamless user experience.</p>
    </li>
  </ul>

  <h1>Collaborative Features:</h1>
  <ul>
    <li>
      <strong>Collaborative Tracking:</strong>
      <p>
        Enable collaborative features such as shared progress tracking, group
        notifications, or collaborative event registration.
      </p>
    </li>
    <li>
      <strong>Community Building:</strong>
      <p>
        Foster a sense of community within the application through collaborative
        features.
      </p>
    </li>
  </ul>
</div>

        <Image src={require('/workspaces/codespaces-react/src/figma.png')} alt="Next Steps Image"/> 
      </section>
                    </Desc>
                    {project.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member) => (
                                    <Member>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonGroup>
                        <Button dull href={project?.github} target='new'>View Full Case Study</Button>
                        <Button href={project?.webapp} target='new'>View Live App</Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index