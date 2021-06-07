import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { BsCalendar } from 'react-icons/bs';
import { IoExtensionPuzzleOutline } from 'react-icons/io5';

import './rightpanel.css'
import projects from '../../library/assets/catalogue/projectsData';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SkillsThumbnail from '../../library/components/skills_thumbnail/SkillsThumbnail';


export default function RightPanel({setCurrentProjectId}) {
  let { projectId } = useParams();

  useEffect(() => {
    setCurrentProjectId(projectId)
  }, [])

  let { name, images, timeline, type, descriptions, devTools, playstoreUrl, appstoreUrl, weburl } = projects[projectId]

  let imageStyle = {
    filter: `brightness(95%)`,
  };

  function renderDesc() {
    return descriptions.map(desc => {
      return <p className="font-14 margin-top-7">{desc}</p>
    })
  }

  function renderCarouselImages() {
    return images.map(image => {
      return (
        <div style={{height: "650px", backgroundColor: 'rgb(25, 25, 25)'}}>
          <img class="carousel_image" src={image} style={imageStyle} />
        </div>
      )
    })
  }

  function renderDevTools() {
    return devTools.map(devTool => {
        return <SkillsThumbnail additionalClasses="margin-right-10 margin-top-5" name={devTool}/>
    })
}

  return (
    <div className="right_panel_wrapper">
      {/* Name */}
      <p className="font-28 bold">{name.toUpperCase()}</p>

      {/* Date */}
      <div class="top_detail margin-top-15 font-14">
        <BsCalendar />
        <p className="margin-left-10">{timeline}</p>
      </div>

      {/* Type */}
      <div class="top_detail margin-top-7 font-14">
        <IoExtensionPuzzleOutline />
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <p className="margin-left-10">{type}</p>
          {playstoreUrl === "" ? <></> : <a target="_blank" href={playstoreUrl} className="font-12 font-blue margin-left-10 margin-top-7">Get it on Google Playstore</a> }
          {appstoreUrl === "" ? <></> : <a target="_blank" href={appstoreUrl} className="font-12 font-blue margin-left-10 margin-top-7">Get it on Apple Appstore</a> }
          {weburl === "" ? <></> : <a target="_blank" href={weburl} className="font-12 font-blue margin-left-10 margin-top-7">Visit Website</a> }
        </div>
      </div>

      {/* Description */}
      <div class="font-14">
        <p className="font-14 bold margin-top-35">Description</p>
        {renderDesc()}
      </div>

      {/* Development Tools */}
      <div className="font-14 margin-bottom-40">
        <p className="font-14 bold margin-top-35">Development Tools</p>
        <div className="dev_tools_wrapper margin-top-7">
          {renderDevTools()}
        </div>
      </div>

      <div className="carousel_wrapper">
        <Carousel 
          autoPlay={true} 
          dynamicHeight={false}
          showStatus={false}
          showIndicators={true} 
          interval={2000}
          showThumbs={false}
          emulateTouch={true}
          swipeable={true}
          stopOnHover={true}
        >
            {renderCarouselImages()}
        </Carousel>
      </div>
    </div>
  )
}
