import Accordion from '@/components/organisms/Accordion'
import React from 'react'
import { AccordianData } from '@/data/about/AboutData'
import Motion from '@/components/organisms/Animate'

const Faq = () => {
    return (
        <>
            <section>
                <div className="about-secE">
                    <Motion variant='fadeUp'>
                        <div className="container">
                            <h2>Frequently Asked Question</h2>
                            <Accordion
                                data={AccordianData}
                            />
                        </div>
                    </Motion>
                </div>
            </section>
        </>
    )
}

export default Faq