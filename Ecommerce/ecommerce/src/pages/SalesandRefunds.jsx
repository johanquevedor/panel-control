import React from 'react'
import salesandrefunds from '../assets/salesandrefunds.png';
import FloatingButton from '../components/FloatingButton';

function SalesandRefunds(){

    return(
        <div className="salesandrefunds">
<div className="img-header-sar">
        <img src={salesandrefunds} alt="salesandrefunds" /></div>

<p>Thank you for shopping at PhoneCave. This Sales and Refund Policy outlines the terms and conditions governing the sale of products on our website, as well as our refund and return policy. By making a purchase from us, you agree to comply with the following policies:</p>

<h2>Order Placement and Confirmation</h2>
<p>a) When you place an order on our website, you are making an offer to purchase the selected products. The order confirmation email we send you serves as acceptance of your offer and concludes the contract of sale.</p>
<p>b) We reserve the right to cancel or refuse any order at our discretion, including but not limited to orders with incorrect pricing, stock availability issues, or suspected fraudulent activity.</p>

<h2>Pricing and Payment</h2>
<p>a) All prices displayed on our website are in [currency] and inclusive of applicable taxes, unless otherwise stated.</p>
<p>b) Payment for your order must be made at the time of purchase. We accept various payment methods, including credit/debit cards and online payment platforms.</p>
<p>c) In the event of a pricing error on our website, we reserve the right to cancel or adjust the order to reflect the correct price. We will notify you of any such changes and offer options to proceed with the order.</p>

<h2>Shipping and Delivery</h2>
<p>a) We strive to process and ship orders in a timely manner. Estimated delivery times are provided for informational purposes and may vary depending on the destination and shipping method selected.</p>
<p>b) You are responsible for providing accurate shipping information. We are not liable for any delays or losses caused by incorrect or incomplete address details.</p>
<p>c) In the event of shipping delays or issues, we will make our best efforts to resolve the situation and keep you informed about the status of your order.</p>

<h2>Returns and Refunds</h2>
<p>a) We want you to be fully satisfied with your purchase. If for any reason you are not happy with your order, you may request a return or refund within [number] days of receiving the product.</p>
<p>b) To be eligible for a return or refund, the item must be unused, in its original condition, and in the original packaging. Proof of purchase is required.</p>
<p>c) Return shipping costs are the responsibility of the customer, unless the return is due to our error or a defective product.</p>
<p>d) Refunds will be processed within [number] business days upon receiving the returned item. The refund will be issued using the original payment method.</p>

<h2>Warranty</h2>
<p>a) Our products are covered by a [number]-year warranty against defects in materials and workmanship. The warranty period may vary depending on the product category.</p>
<p>b) The warranty does not cover damages caused by misuse, accidents, or unauthorized repairs. Proof of purchase and warranty claim may be required.</p>
<p>c) If you encounter any issues covered by the warranty, please contact our customer support for assistance. We may offer repair, replacement, or other suitable solutions based on the specific situation.</p>

<h2>Limitation of Liability</h2>
<p>a) To the extent permitted by law, PhoneCave shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the sale, use, or inability to use our products, even if advised of the possibility of such damages.</p>
<p>b) Our liability for any breach of warranty or other obligations shall be limited to the purchase price of the product in question.</p>

<h2>Modifications</h2>
<p>We reserve the right to modify this Sales and Refund Policy at any time without prior notice. Changes will become effective upon posting on our website. It is your responsibility to review this policy periodically for any updates.</p>

<h2>Governing Law</h2>
<p>This Sales and Refund Policy shall be governed by and construed in accordance with the laws of [your country/state]. Any legal action or proceeding arising out of or relating to this policy shall be exclusively brought in the courts of [your jurisdiction].</p>

<p>If you have any questions or concerns about our Sales and Refund Policy, please contact our customer support. We are here to assist you and ensure a satisfactory shopping experience.</p>

<FloatingButton />
</div>


)
}
export default SalesandRefunds;