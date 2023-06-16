import React from 'react'


const SectionWrapper = (Component: React.FC ) => (
    function HOC () {
        return <section className='section'><Component /></section>
    }
)

export default SectionWrapper