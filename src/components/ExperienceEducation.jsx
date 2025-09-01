import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import Experience from './Experience'
import Education from './Education'

const ExperienceEducation = () => {
  const [active, setActive] = useState('experience')

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Experiência e Formação</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <Button
              variant={active === 'experience' ? 'default' : 'ghost'}
              className={`${active === 'experience' ? 'ring-2 ring-primary shadow-lg' : ''} w-full justify-center`}
              onClick={() => setActive('experience')}
            >
              Experiência
            </Button>
            <Button
              variant={active === 'education' ? 'default' : 'ghost'}
              className={`${active === 'education' ? 'ring-2 ring-primary shadow-lg' : ''} w-full justify-center`}
              onClick={() => setActive('education')}
            >
              Formação
            </Button>
          </div>

          <div className="md:col-span-2">
            {active === 'experience' ? (
              <div id="education" className="rounded-xl">
                <Experience />
              </div>
            ) : (
              <div className="rounded-xl">
                <Education />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceEducation
