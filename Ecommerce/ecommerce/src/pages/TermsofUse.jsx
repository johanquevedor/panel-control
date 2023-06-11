import React from 'react'
import termsofuse from '../assets/termsofuse.png';
import FloatingButton from '../components/FloatingButton';

function TermsofUse(){

    return(
<div className="termsofuse-container">
        <div className="img-header-tou">
        <img src={termsofuse} alt="termsofuse" />

        </div>

<p>Please read these Terms of Use carefully before using the PhoneCave website and our services. By accessing and using our website, you agree to comply with these terms and conditions. If you do not agree with any of the terms set forth below, we recommend that you do not use our website.</p>

<h2>Use of the Website</h2>
<p>a) By using our website, you agree to use it only for lawful purposes and in accordance with applicable law.</p>
<p>b) You must not use our website in any way that may cause harm, disruption, or prejudice to the site or other users.</p>
<p>c) You must not attempt to access unauthorized areas of the website, servers, or third-party systems.</p>

<h2>Content and Intellectual Property</h2>
<p>a) The content of our website, including but not limited to text, graphics, images, logos, and trademarks, is protected by copyright and other intellectual property laws.</p>
<p>b) You may not reproduce, distribute, modify, transmit, display, or otherwise use the content of our website without our prior written permission.</p>
<p>c) Any unauthorized use of our website's content may result in legal action and/or civil liability.</p>

<h2>User Accounts and Security</h2>
<p>a) When creating an account on our website, you are responsible for maintaining the confidentiality of your account information, including your username and password.</p>
<p>b) You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
<p>c) We reserve the right to suspend or terminate your account if we suspect any unauthorized activity or violation of these Terms of Use.</p>

<h2>Limitation of Liability</h2>
<p>a) To the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of our website or the inability to access or use our website.</p>
<p>b) We do not warrant the availability, accuracy, completeness, or suitability of the information and materials contained on our website.</p>
<p>c) We are not responsible for any errors, omissions, or inaccuracies in the content provided on our website.</p>

<h2>Third-Party Links and Services</h2>
<p>a) Our website may contain links to third-party websites or services that are not owned or controlled by PhoneCave.</p>
<p>b) We do not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party websites or services.</p>
<p>c) You acknowledge and agree that PhoneCave shall not be liable for any loss or damage caused by your use of or reliance on any third-party websites or services.</p>

<h2>Modifications</h2>
<p>We reserve the right to modify these Terms of Use at any time without prior notice. We recommend that you periodically review these terms to stay informed of any changes. Your continued use of our website after the modification of these terms will constitute your acceptance of the amended terms.</p>

<h2>Governing Law</h2>
<p>These Terms of Use shall be governed by and construed in accordance with the laws of [your country/state]. Any legal action or proceeding arising out of or relating to these terms shall be exclusively brought in the courts of [your jurisdiction].</p>

<p>If you have any questions or concerns about our Terms of Use, please feel free to contact us.</p>

<FloatingButton />

</div>

)
}
export default TermsofUse;