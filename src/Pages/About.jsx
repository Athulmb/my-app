import React from 'react'
import AboutHero from '../components/About/AboutHero'
import StatsSection from '../components/About/StatsSection'
import OurMission from '../components/About/Mission'
import AwardsSection from '../components/About/AwardSection'
import TeamSection from '../components/About/TeamMembars'
import Timeline from '../components/About/Revanue'



const About = () => {
  return (
    <>
    <AboutHero/>
    <StatsSection/>
    <OurMission/>
    <TeamSection/>
    <Timeline/>

    <AwardsSection/>
    </>
   
  )
}

export default About