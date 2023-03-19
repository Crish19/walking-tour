import React, { useState } from 'react'
import './pricing.css'
import photo from '../../media/gummy-calculator.png'

const Pricing = () => {
    const [numPeople, setNumPeople] = useState(1)
    const [time, setTime] = useState(2)

    const handlePeopleChange = (e) => {
        setNumPeople(e.target.value)
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value)
    }

    return (
        <div className="pricing-section" id='pricing'>
            <h2 className="section-title">Pricing</h2>
            <div className="title-underline-pricing"></div>
            <div className="pricing-container">
                <div className="pricing-card">
                    <div className="card-content">
                        <h3 className="card-title">Number of People</h3>
                        <div className="people-selector">
                            <select value={numPeople} onChange={handlePeopleChange}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="card-content">
                        <h3 className="card-title">Tour Duration (hours)</h3>
                        <div className="time-selector">
                            <input type="range" min="2" max="6" value={time} onChange={handleTimeChange} />
                            <span className="time-value">{time}</span>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="card-content">
                        <h3 className="card-title">Price</h3>
                        <div className="price">$ {numPeople * time * 30}</div>
                    </div>
                    <img className='pricing-section-image' src={photo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Pricing
