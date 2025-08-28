import React from 'react'
import AboutHero from '../components/About/AboutHero'
import StatsSection from '../components/About/StatsSection'
import OurMission from '../components/About/Mission'
import AwardsSection from '../components/About/AwardSection'
import TeamSection from '../components/About/TeamMembars'
import KeyHistorical from '../components/About/Revanue'



const About = () => {
  return (
    <>
    <AboutHero/>
    <StatsSection/>
    <OurMission/>
    <TeamSection/>
    
    <KeyHistorical/>
    <AwardsSection/>
    </>
   
  )
}

export default About