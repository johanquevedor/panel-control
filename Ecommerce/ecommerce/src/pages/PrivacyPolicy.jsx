import React from 'react'
import privacypolicyheader from '../assets/privacypolicyheader.png';
import FloatingButton from '../components/FloatingButton';

function PrivacyPolicy(){

    return(


        <div className="privacy-policy">
<div className="img-header">
        <img src={privacypolicyheader} alt="privacypolicyheader" />

        </div>

            <p>At PhoneCave, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect the information you provide to us when using our website or services. We value your trust and want to be transparent about our data practices.</p>
       
        <h2>Collection of Personal Information</h2>
        <p>When you visit our website or make a purchase, we may collect certain personal information, including but not limited to your name, email address, shipping address, billing information, and phone number. We collect this information to process your orders, provide customer support, and improve our services. Rest assured that we will only collect the necessary information required to fulfill your requests and ensure a smooth shopping experience.</p>
        
        <h2>Use of Personal Information</h2>
        <p>We use the personal information we collect for various purposes, including:

            | Processing and fulfilling your orders
            | Communicating with you about your purchases, inquiries, and promotions
            | Personalizing your shopping experience
            | Improving our website, products, and services
            | Preventing fraudulent activities and enhancing security measures
            | Complying with legal obligations and regulations</p>
        
        <h2>Protection of Personal Information</h2>
        <p>We implement strict security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our website utilizes encryption technology to safeguard your sensitive data during transmission. We also restrict access to personal information within our organization and only share it with trusted third parties who assist us in providing services to you (e.g., shipping companies). We never sell or rent your personal information to third parties for marketing purposes.</p>

        <h2>Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content and advertisements. These technologies may collect information such as your IP address, browser type, device identifiers, and browsing behavior. You have the option to disable cookies through your browser settings, but please note that this may limit certain features and functionalities of our website.</p>
        
        <h2>Third-Party Links</h2>  
        <p>Our website may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of those third parties before providing any personal information.</p>


        <h2>Children's Privacy</h2>
        <p>Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected personal information from a child, we will take immediate steps to delete it from our systems.</p>

        <h2>Updates to the Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our data practices or legal requirements. We encourage you to review this page periodically for any updates. Your continued use of our website and services after the posting of changes constitutes your acceptance of the revised Privacy Policy.</p>
        
        <p>If you have any questions or concerns about our Privacy Policy or how we handle your personal information, please contact us. We are committed to addressing any inquiries and resolving any issues promptly and responsibly.

            Effective Date: 27/05/2023</p>



            <FloatingButton />
        </div>
    )
}
export default PrivacyPolicy;