import React from 'react'
import "../assets/scss/app-loader.scss"

const PageLoader: React.FC = () => {
  return (
    <div className="fallback-spinner">
      <div className="loading component-loader">
        <div className="effect-1 effects" />
        <div className="effect-2 effects" />
        <div className="effect-3 effects" />
      </div>
    </div>
  )
}

export default PageLoader
