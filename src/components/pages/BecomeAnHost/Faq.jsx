import Accordion from '@/components/organisms/Accordion'
import React from 'react'
import { AccordianData } from '@/data/BecomeAnHost/BecomeAnHostData'
import Motion from '@/components/organisms/Animate'

const Faq = () => {
    return (
        <>
            <section>
                <div className="BecomeAnHost-secD">
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