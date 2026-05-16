import React from 'react'
import Link from 'next/link'
import "@/uploads/styles/booking-detail/booking-detail.css"
import Image from 'next/image'
import CustomInput from '@/components/atom/CustomInput'
import Motion from '@/components/organisms/Animate'

const BookingDetailPage = () => {

    return (
        <>
            <section>
                <div className="booking-detail-secA">
                    <div className="container">

                        <ul className="breadcrumb">
                            <li><Link href="/">Home</Link></li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                    <path d="M0 0h48v48H0z" fill="none" />
                                    <path fill="none" stroke="#8b94a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" />
                                </svg>
                            </span>
                            <li><Link href="/">Villas</Link></li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                    <path d="M0 0h48v48H0z" fill="none" />
                                    <path fill="none" stroke="#8b94a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" />
                                </svg>
                            </span>
                            <li><Link href="/" >Villa Arts</Link></li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                    <path d="M0 0h48v48H0z" fill="none" />
                                    <path fill="none" stroke="#8b94a4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m19 12l12 12l-12 12" />
                                </svg>
                            </span>
                            <li><Link href="/" className="active">Review booking</Link></li>
                        </ul>

                        <div className="flex-box">
                            <div className="col">
                                <div className="group">
                                    <div className="heading">
                                        <h2>Booking details</h2>
                                    </div>
                                    <h4>Your trip</h4>
                                    <div className="inner-flex">
                                        <div className="lef">
                                            <h5>Dates</h5>
                                            <p>Jul 10-14</p>
                                        </div>
                                        <Link href="/">Edit</Link>
                                    </div>

                                    <div className="inner-flex">
                                        <div className="lef">
                                            <h5>Guests</h5>
                                            <p>2 guest</p>
                                        </div>
                                        <Link href="/">Edit</Link>
                                    </div>
                                </div>

                                <div className="group">
                                    <div className="heading">
                                        <h2>Guest Info</h2>
                                        <p>Guest names must match the valid ID which will be used at check-in.</p>
                                    </div>
                                    <div className="gust-flex">
                                        <h4>Guest 1</h4>

                                        <div className="rig">
                                            <Link href="/">
                                                <span>
                                                    <Image src="/assets/images/booking-detail/plus-ico.svg" width={20} height={20} alt="ico"></Image>
                                                </span>
                                                Edit
                                            </Link>

                                            <Link href="/">
                                                <span>
                                                    <Image src="/assets/images/booking-detail/edit-ico.svg" width={20} height={20} alt="ico"></Image>
                                                </span>
                                                Add New Guest (Optinal)
                                            </Link>
                                        </div>
                                    </div>

                                    <form action="">
                                        <div className="form-wrapper">
                                            <CustomInput formLabel="First Name*" inputType="text" placeholder="John" />
                                            <CustomInput formLabel="Last Name*" inputType="text" placeholder="smith" />
                                            <CustomInput formLabel="Email Id*" inputType="email" placeholder="abc@example.com" />
                                            <CustomInput formLabel="Contact Number*" inputType="tel" placeholder="91+0000000000" />
                                        </div>
                                    </form>
                                </div>

                                <div className="group">
                                    <div className="heading">
                                        <h2>Special Requests (optional)</h2>
                                        <p>The property will do its best, but cannot guarantee to fulfil all requests</p>
                                    </div>
                                    <form action="">
                                        <div className="form-wrapper">
                                            <CustomInput inputType="text" placeholder="Let the property know if there's anything they can assist you with." isFull />
                                        </div>
                                    </form>
                                </div>

                                <div className="bottom-sec-group">
                                    <div className="group">
                                        <h5>Required for your trip</h5>
                                        <form action="">
                                            <div className="form-wrapper">
                                                <CustomInput formLabel="Phone number" inputType="tel" placeholder="Add and confirm our phone number to get trip update" isFull />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="group">
                                        <h5>Cancellation policy</h5>
                                        <p><strong>Free cancellation before Aug 1.</strong> cancel before check-in on Jul 10 for a partial refund. </p>
                                        <Link href="">Learn more</Link>
                                    </div>
                                </div>

                            </div>

                            <div className="col">

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="booking-detail-secB">
                    <div className="container">
                        <Motion variant='fadeUp'>
                            <div className="heading">
                                <h2>Policies</h2>
                                <p>Lazur Hotel Apartments takes special requests - add in the next step!</p>
                            </div>

                            <div className="property-table-card">
                                <table>
                                    <tbody>
                                        {
                                            policiyData.map((item, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td className="icon-cell">
                                                            <Image src={item.icon} width={25} height={25} alt={item.title} />
                                                        </td>
                                                        <td>{item.title}</td>
                                                        <td>{item.description}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </Motion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookingDetailPage


export const policiyData = [
    {
        "icon": "/assets/images/project/detail/policies/Check-in.svg",
        "title": "Check-in",
        "description": "From 14:00 to 15:00. You'll need to let the property know in advance what time you'll arrive."
    },
    {
        "icon": "/assets/images/project/detail/policies/Check-out.svg",
        "title": "Check-out",
        "description": "From 8:00 to 11:00"
    },
    {
        "icon": "/assets/images/project/detail/policies/Cancellationpr-payment.svg",
        "title": "Cancellation/prepayment",
        "description": "Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection."
    },
    {
        "icon": "/assets/images/project/detail/policies/Family-Man-Woman.svg",
        "title": "Children and beds",
        "description": "Child policies: children of any age are welcome. To see correct prices and occupancy information, please add the number of children in your group and their ages to your search. Cot and extra bed policies: Cots and extra beds are not available at this property."
    },
    {
        "icon": "/assets/images/project/detail/policies/No-age-restriction.svg",
        "title": "No age restriction",
        "description": "Guests of all ages are welcome."
    },
    {
        "icon": "/assets/images/project/detail/policies/moon.svg",
        "title": "Quiet hours",
        "description": "Guests must be quiet between 22:00 and 10:00."
    },
    {
        "icon": "/assets/images/project/detail/policies/no-smoking.svg",
        "title": "Smoking",
        "description": "Smoking is not allowed."
    },
    {
        "icon": "/assets/images/project/detail/policies/pet-paw.svg",
        "title": "Pets",
        "description": "Pets are not allowed."
    }
]