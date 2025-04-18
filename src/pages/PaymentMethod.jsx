import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { v4 as uuidv4 } from 'uuid';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import './Guidelines/Guidelines.css';


const PaymentMethod = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleGuideAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
          id: uuidv4(),
          title: 'What is an Installment Payment Method?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Ulinkit.com offers an installment payment option that allows you to split your purchase into easy monthly payments. This is available for orders above 500 AED (or equivalent in your local currency), subject to your bank’s terms and conditions. Additional processing fees or interest rates may apply based on your chosen tenure.
              </p>
              <p className='heading2 headMargin'>
                Supported banks include: ENBD, ADCB, FAB, Dubai First, Mawarid Finance, RAK, Al Hilal, CBD, Emirates Islamic, Dubai Islamic Bank, Deem Finance LLC, Standard Chartered, Ajman Bank, Arab Bank UAE.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'Which banks are supported for installment payments?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Ulinkit currently supports installment plans through the following banks: ENBD, ADCB, FAB, Dubai First, Mawarid Finance, RAK, Al Hilal, CBD, Emirates Islamic, Dubai Islamic Bank, Deem Finance LLC, Standard Chartered, Ajman Bank, and Arab Bank UAE.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'Do I need to contact my bank for installment setup?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                No, there's no need to contact your bank. Once you opt for the installment plan on Ulinkit.com, your bank will follow up directly based on its internal processes.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'Can I use bank transfers, prepaid cards, or COD for installment payments?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                No, installment plans are exclusively available for payments made via credit cards from supported banks.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'Will I get a full refund if I return an item paid via installment?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Yes, refunds are processed in accordance with our return policy. <a href="/return-policy" className='hoverr'>Click here</a> to learn more.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'What happens if I cancel an installment order?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                If your cancellation qualifies for a refund under our return policy, Ulinkit will refund the amount. However, for any interest reversal or bank-specific queries, please contact your bank directly.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'How long does the bank take to process the installment request?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Typically, banks take 7–9 business days to process installment requests. The full amount will be charged initially and your next statement will reflect the monthly breakdown once approved.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'Can I use discount coupons with installment plans?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Yes, you can apply discount coupons along with your installment payment.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'Are installment plans applicable on promotional items?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Yes, as long as the total cart value is 500 AED or more (or equivalent), installment payments can be used.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'Are there penalties for missed payments?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Penalties depend on your bank’s policies. We recommend contacting your bank directly for full details.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'What are the interest and processing charges?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Charges vary by bank. Please refer to your issuing bank’s terms for the applicable fees and interest rates.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'Is the processing fee one-time or recurring?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Typically, the processing fee is a one-time charge. Confirm details with your bank.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'Are there any additional charges beyond processing and interest fees?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                No additional charges are imposed by Ulinkit.com. However, check with your bank for any extra fees.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'What if I cancel my credit card after activating an installment plan?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                This may impact your installment plan. Please contact your bank for further guidance.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'What are the available tenure options?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Tenure and applicable charges depend on your bank. Common options include 3, 6, or 12 months. Check with your issuing bank for available options.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'How do I know my installment is confirmed?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                You will typically receive a confirmation notification from your bank once the installment is activated.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'Can I have multiple installment plans at the same time?',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Yes, multiple installment plans can be active simultaneously for different purchases, based on your bank’s approval.
              </p>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'Terms and Conditions for Installment Plans',
          panel: (
            <div>
              <p className='heading2 headMargin'>
                Ulinkit.com facilitates installment options via partnered banks for eligible purchases. The availability, tenure, interest rate, and processing charges are governed by the issuing bank’s policy.
              </p>
              <p className='heading2 headMargin'>
                Installments are not available via debit cards, bank transfers, or cash-on-delivery. Ulinkit holds no responsibility for approval, modifications, or cancellations of installment plans, as these are managed solely by the banks.
              </p>
              <p className='heading2 headMargin'>
                For specific queries or issues, we encourage users to consult directly with their bank. Ulinkit.com displays installment details shared by banks on a best-effort basis.
              </p>
            </div>
          ),
        },
      ];
      


    return (
        <Fragment>
            <Helmet>
                <title>Ulinkit - Your Global Marketplace for Products and Services</title>
                <meta name="description" content="Discover a world of products and services on Ulinkit. Shop from various categories, explore deals, and enjoy a seamless shopping experience." />
                <link rel="canonical" href="https://www.ulinkit.com/payment-method" />
            </Helmet>
            <section className="sourceBanner" style={{ background: '#003953' }}>
                <article className="sourceText ">
                    <h1 className="heading4">Payment methods</h1>
                    <h2 className="heading" style={{ color: 'white' }}>A variety of options to suit your business needs</h2>
                </article>
                <div className="sourceImg">
                    <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1729157962/Ulinkit/pngwing.com_ivzgbk.png" alt="payment-method" />
                </div>
            </section>

            <div className='valuediv'>
                <h1 className="heading5" style={{ color: '#003953' }}>Payment method options</h1>

                <section className="valuegrid">
                    <article className="valuegriditem">
                        <div className="valueicon"><CreditCardIcon /></div>
                        <div className="vlauetext">
                            <h1 className="heading3">Credit & Debit Cards</h1>
                            <h2 className="heading2">Pay with bank card. Fast and secure.</h2>
                        </div>
                    </article>
                    <article className="valuegriditem">
                        <div className="valueicon"><LocalShippingIcon /></div>
                        <div className="vlauetext">
                            <h1 className="heading3">Cash on Delivery</h1>
                            <h2 className="heading2">Pay on delivery - available on a wide range products</h2>
                        </div>
                    </article>
                    <article className="valuegriditem">
                        <div className="valueicon"><AccountBalanceIcon /></div>
                        <div className="vlauetext">
                            <h1 className="heading3">Bank Transfer</h1>
                            <h2 className="heading2">Pay by bank transfer, direct from your accounts to ours.</h2>
                        </div>
                    </article>
                    <article className="valuegriditem">
                        <div className="valueicon"><PaymentsIcon /></div>
                        <div className="vlauetext">
                            <h1 className="heading3">Razorpay or Paypal</h1>
                            <h2 className="heading2">Both payment options are safe, secure, and private way to pay.</h2>
                        </div>
                    </article>
                </section>

                <div className="valueimages">
                    <img src="https://c8n.tradeling.com/img/plain/cms/rs:auto:1600::0/f:webp/q:90/Tamara_Divider_CLP_1232x180_Desktop_b4fe309d7c.png" alt="" />
                    <img src="https://c8n.tradeling.com/img/plain/cms/rs:auto:1600::0/f:webp/q:90/Credit_line_Divider_CLP_1232x250_Desktop_eb6a2c9b99.png" alt="" />
                    <img src="https://c8n.tradeling.com/img/plain/cms/rs:auto:1600::0/f:webp/q:90/Installments_Divider_CLP_1232x250_Desktop_Divider_CLP_1232x180_Desktop_bf5d529c43.png" alt="" />
                    <img src="https://c8n.tradeling.com/img/plain/cms/rs:auto:1600::0/f:webp/q:90/Credit_and_Debit_Cards_Divider_CLP_1232x180_Desktop_3a14cd716e.png" alt="" />
                    <img src="https://c8n.tradeling.com/img/plain/cms/rs:auto:1600::0/f:webp/q:90/Bank_Transfer_Divider_CLP_1232x180_Desktop_a4c6ab9c41.png" alt="" />
                    <img src="https://c8n.tradeling.com/img/plain/cms/rs:auto:1600::0/f:webp/q:90/Cash_on_delivery_Divider_CLP_1232x180_Desktop_1ae4aa18cf.png" alt="" />
                    <img src="https://c8n.tradeling.com/img/plain/cms/rs:auto:1600::0/f:webp/q:90/Apple_Pay_Divider_CLP_1232x180_Desktop_83a58a4057.png" alt="" />
                </div>
            </div>

            <div className='bankdiv'>
                <h1 className="heading5" style={{ color: '#003953' }}>Supported Banks for installments</h1>

                <section className='bankgrid'>
                    <article className='bankgriditem'>
                        <img src="https://m.economictimes.com/thumb/msid-110010096,width-1200,height-900,resizemode-4,imgsize-14062/esaf-small-finance-bank-q4-results-net-profit-plunges-57-yoy-to-rs-43-crore.jpg" alt="" />
                        <a href="#" target='_blank' className='hoverr'>Read T&Cs</a>
                    </article>
                    <article className='bankgriditem'>
                        <img src="https://m.economictimes.com/thumb/msid-110010096,width-1200,height-900,resizemode-4,imgsize-14062/esaf-small-finance-bank-q4-results-net-profit-plunges-57-yoy-to-rs-43-crore.jpg" alt="" />
                        <a href="#" target='_blank' className='hoverr'>Read T&Cs</a>
                    </article>
                    <article className='bankgriditem'>
                        <img src="https://m.economictimes.com/thumb/msid-110010096,width-1200,height-900,resizemode-4,imgsize-14062/esaf-small-finance-bank-q4-results-net-profit-plunges-57-yoy-to-rs-43-crore.jpg" alt="" />
                        <a href="#" target='_blank' className='hoverr'>Read T&Cs</a>
                    </article>
                    <article className='bankgriditem'>
                        <img src="https://m.economictimes.com/thumb/msid-110010096,width-1200,height-900,resizemode-4,imgsize-14062/esaf-small-finance-bank-q4-results-net-profit-plunges-57-yoy-to-rs-43-crore.jpg" alt="" />
                        <a href="#" target='_blank' className='hoverr'>Read T&Cs</a>
                    </article>
                    <article className='bankgriditem'>
                        <img src="https://m.economictimes.com/thumb/msid-110010096,width-1200,height-900,resizemode-4,imgsize-14062/esaf-small-finance-bank-q4-results-net-profit-plunges-57-yoy-to-rs-43-crore.jpg" alt="" />
                        <a href="#" target='_blank' className='hoverr'>Read T&Cs</a>
                    </article>
                    <article className='bankgriditem'>
                        <img src="https://m.economictimes.com/thumb/msid-110010096,width-1200,height-900,resizemode-4,imgsize-14062/esaf-small-finance-bank-q4-results-net-profit-plunges-57-yoy-to-rs-43-crore.jpg" alt="" />
                        <a href="#" target='_blank' className='hoverr'>Read T&Cs</a>
                    </article>
                    <article className='bankgriditem'>
                        <img src="https://m.economictimes.com/thumb/msid-110010096,width-1200,height-900,resizemode-4,imgsize-14062/esaf-small-finance-bank-q4-results-net-profit-plunges-57-yoy-to-rs-43-crore.jpg" alt="" />
                        <a href="#" target='_blank' className='hoverr'>Read T&Cs</a>
                    </article>
                    <article className='bankgriditem'>
                        <img src="https://m.economictimes.com/thumb/msid-110010096,width-1200,height-900,resizemode-4,imgsize-14062/esaf-small-finance-bank-q4-results-net-profit-plunges-57-yoy-to-rs-43-crore.jpg" alt="" />
                        <a href="#" target='_blank' className='hoverr'>Read T&Cs</a>
                    </article>
                    <article className='bankgriditem'>
                        <img src="https://m.economictimes.com/thumb/msid-110010096,width-1200,height-900,resizemode-4,imgsize-14062/esaf-small-finance-bank-q4-results-net-profit-plunges-57-yoy-to-rs-43-crore.jpg" alt="" />
                        <a href="#" target='_blank' className='hoverr'>Read T&Cs</a>
                    </article>
                    <article className='bankgriditem'>
                        <img src="https://m.economictimes.com/thumb/msid-110010096,width-1200,height-900,resizemode-4,imgsize-14062/esaf-small-finance-bank-q4-results-net-profit-plunges-57-yoy-to-rs-43-crore.jpg" alt="" />
                        <a href="#" target='_blank' className='hoverr'>Read T&Cs</a>
                    </article>
                </section>
            </div>

            <article className="bankdiv">
                <h1 className="heading5" style={{ color: '#003953' }}>Frequently asked questions</h1>
                <div className="flexcol wh">
                    {
                        faqs.map((item, index) => (
                            <Fragment key={uuidv4()}>
                                <div className={`accordion-guide ${activeIndex === (index + 1) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 1)}>
                                    <p className="heading3">{item.title}</p>
                                </div>
                                <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 1) ? '800px' : '0' }}>
                                    {item.panel}
                                </div>
                            </Fragment>
                        ))
                    }
                </div>
            </article>

        </Fragment>
    )
}

export default PaymentMethod