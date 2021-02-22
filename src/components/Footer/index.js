import React from 'react'
import { FooterContainer, FooterWrap, SocialIcons, SocialLogo, SocialMediaWrap, SocialMedia, SocialIconLink } from './FooterElements'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">CHICAGO</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener norreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener norreferrer">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener norreferrer">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener norreferrer">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
