import React from 'react'
import ResumeData from './ResumeData'
import ResummedAta from './ResummedAta'

const Resume = () => {
  return (
    <div className='resume_wrapper'>
      <h2>PROFESSHIONAL SUMMARY</h2>
      <div className='res_des'>
        <div className='res_cont'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Dolore magna aliqua.</p>
        </div>
        <div className='res_lang'>
          <h3>Language Knowledge</h3>
          <ul>
            <li>
              ENGLISH
            </li>
            <li>
              HINDI
            </li>
          </ul>
        </div>
      </div>
      <div className='work_edu_wrapper'>
        <div className='title_wrapper'>
          <div className='work_title'>
            <h3>WORK HISTORY</h3>
          </div>
          <div className='education_tile'>
            <h3>EDUCATION</h3>
          </div>
        </div>
        <div className='grid_item'>
          {
            ResumeData.map((val, ind) => {
              return (
                <ResummedAta
                  key={ind}
                  Name={val.Name}
                  button={val.button}
                  subtitle={val.subtitle}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Resume
