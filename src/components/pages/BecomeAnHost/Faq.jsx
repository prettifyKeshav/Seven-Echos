import Accordion from '@/components/organisms/Accordion'
import React from 'react'
import { AccordianData } from '@/data/BecomeAnHost/BecomeAnHostData'

const Faq = () => {
    return (
        <>
            <section>
                <div className="BecomeAnHost-secD">
                    <div className="container">
                        <h2>Frequently Asked Question</h2>

                        <Accordion
                            data={AccordianData}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq