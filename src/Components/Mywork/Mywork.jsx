import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data.js'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a 
            key={index} 
            href={work.w_url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={work.w_img} alt={work.w_name} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Mywork
