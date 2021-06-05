import React from 'react'
import './skills_thumbnail.css'

export default function SkillsThumbnail({name, additionalClasses}) {
  return (
    <div className={`thumbnail_wrapper ${additionalClasses}`}>
      {name}
    </div>
  )
}