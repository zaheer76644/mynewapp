import React from 'react';
import './HeroSection.css';
import Select from 'react-select';
function HeroSection({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  
  imgStart
}) {
  return (
    <>
    <div className="drop">
    <Select />
    </div>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
