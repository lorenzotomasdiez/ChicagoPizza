import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>TRuffle alfredo sauce topped with 24 carat gold dust.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
