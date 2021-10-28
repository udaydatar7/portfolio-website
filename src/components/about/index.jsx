import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pfp.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle></SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Uday </Title>
              <Text> I'm a developer hailing from <b className="text-primary lined-link">India</b> living in Gurgaon. I'm currently studying at the Manipal Institute of Technonlogy (class of '25). </Text>
              {/* <Text> I love working with modern technologies, building and designing awesome projects. I prefer minimalistic and clean designs with strong user experience.</Text> */}
              <Text> I used to work mainly in data science but recently started learning Web Development too.</Text>
              <ResumeButton href="resume.pdf" target="_blank"> My resume. </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
