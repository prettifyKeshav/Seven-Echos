import React from 'react'
import { setsUsApartData } from '@/data/BecomeAnHost/BecomeAnHostData'
import Motion from '@/components/organisms/Animate'

const SetsUsApart = () => {
    return (
        <>
            <section>
                <div className="BecomeAnHost-secC">
                    <div className="container">
                        <Motion variant='fadeUp'>
                            <h2>What Sets Us Apart</h2>

                            <div className="grid-box">
                                {setsUsApartData.items.map((item, index) => (
                                    <div className="col" key={index}>
                                        <h4>{item.id}</h4>
                                        <h3>{item.title}</h3>

                                        {item.description && <p>{item.description}</p>}

                                        {item.points && (
                                            <ul>
                                                {item.points.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Motion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SetsUsApart