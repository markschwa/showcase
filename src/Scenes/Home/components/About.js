import React from 'react'
import Pill from '../../../Components/Pills/Pill'

export default function About() {
  const EXPERTISE = [
    'React',
    'React Native',
    'Angular',
    'TypeScript',
    'Vanilla JS',
    'ES6 >',
    'HTML5',
    'CSS3',
    'SCSS',
    'LESS',
    'Atomic Design',
    'Storybook',
    'Jest',
    'Karma'
  ]

  return (
    <section className="s-skew">
      <div className="o-wrapper o-wrapper--medium u-padding-vertical-huge">
        <div className="o-layout">
          <div className="o-col">
            <div className="u-margin-bottom-large">
              <p>Hey I’m Mark.</p>
              <p className="u-text-align--justify">
                Developing websites & apps is my passion. I specialise in
                front-end development, focusing on all responsive viewport sizes
                while using the latest tools & frameworks to improve speed and
                quality of a project.
              </p>
            </div>

            <div className="u-text-align--center">
              {EXPERTISE.map((skill, i) => {
                return <Pill key={i} text={skill} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
