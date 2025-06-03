import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { v4 as uuidv4 } from 'uuid';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import './Guidelines/Guidelines.css';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const PaymentMethod = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleGuideAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
      {
        id: uuidv4(),
        title: 'What is the Installment Payment Option?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              Ulinkit provides an installment payment option that allows you to divide your purchase into easy monthly payments. This option is available for orders above  ₹10,000(depends on your local currency) subject to your bank’s terms and conditions. Additional processing fees or interest rates may apply depending on your selected tenure.
            </p>
            <p className='heading2 headMargin'>
              Supported banks include: HDFC, ICICI, Axis Bank, SBI, Kotak Mahindra Bank, Canara Bank, IDFC Bank, IndusInd Bank.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Which banks are eligible for the installment payment method?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              Ulinkit supports installment plans through partner banks India, including: HDFC, ICICI, Axis Bank, SBI, Kotak and more. The list of supported banks may grow over time.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Do I need to contact my bank to activate the installment plan?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              No, there’s no need to contact your bank manually. After choosing the installment plan during checkout, your bank will reach out to you or automatically convert the transaction into EMI based on your card settings.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Are installment payments supported in India?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              Yes, Indian customers can opt for EMI options using major credit cards issued by banks such as HDFC, ICICI, Axis Bank, SBI, Kotak, and others. EMI conversion is subject to eligibility and your bank’s approval.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Can I use UPI, debit cards, or cash on delivery for installment payments?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              No, installment options are only available via credit cards from supported banks. UPI, bank transfers, prepaid cards, and COD are not eligible for EMI.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'What are the EMI tenure options?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              EMI tenure varies based on your bank. Common tenures include 3, 6, 9, 12, or 24 months. Indian banks like HDFC and ICICI usually support multiple tenure options directly during checkout or via post-purchase conversion.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Will I receive a full refund if I return an item paid with installments?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              Yes, returns and refunds will follow our standard policy. Your EMI may be canceled depending on your bank’s terms. <a href="/return-policy" className='hoverr'>Click here</a> to learn more.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Can I use promo codes with EMI payments?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              Yes, promotional codes or discount coupons can be applied even if you select EMI as your payment method.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Are EMI options available on sale items?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              Yes, EMI can be availed on discounted or promotional items as long as your cart meets the minimum EMI threshold (₹10,000 depends on your local currency).
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Are there any processing or interest charges?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              Yes, EMI transactions may involve interest or processing fees. These charges vary by bank and tenure. Please refer to your bank’s terms or credit card agreement.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Are installment options safe and secure?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              Absolutely. All installment transactions are securely processed via payment gateways like Razorpay and PayPal, in accordance with RBI.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Can I cancel or pre-close my EMI?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              Cancellation or pre-closure of EMIs depends on your issuing bank. Some banks may charge a foreclosure fee. Please check directly with your bank.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'What are the penalties for late EMI payments?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              Late payment fees and interest will be applied by your bank as per their policy. Ulinkit is not responsible for any bank-imposed penalties.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Is the EMI plan shown during checkout final?',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              The plan shown is based on our available bank partners and configurations. Final approval and confirmation will be provided by your bank post-checkout.
            </p>
          </div>
        ),
      },
      {
        id: uuidv4(),
        title: 'Terms and Conditions for Installment Payments',
        panel: (
          <div>
            <p className='heading2 headMargin'>
              Ulinkit offers EMI options in partnership with major banks in the India. All EMI offers are subject to bank approval and may involve interest and processing fees.
            </p>
            <p className='heading2 headMargin'>
              EMI options are only available via supported credit cards. Debit cards, UPI, COD, or bank transfers are not eligible.
            </p>
            <p className='heading2 headMargin'>
              For any EMI-related disputes, please connect with your bank. Ulinkit will assist wherever possible, but final decisions rest with your bank’s policies.
            </p>
          </div>
        ),
      },
    ];
    
    
      


    return (
        <Fragment>
            <Helmet>
                <title>Payments - Your Global Marketplace for Products and Services</title>
                <meta name="description" content="Discover a world of products and services on Ulinkit. Shop from various categories, explore deals, and enjoy a seamless shopping experience." />
                <link rel="canonical" href="https://www.ulinkit.com/payment-method" />
            </Helmet>
            <section className="sourceBanner" style={{ background: '#003953' }}>
                <article className="sourceText ">
                    <h1 className="heading4">Payment methods</h1>
                    <h2 className="heading" style={{ color: 'white' }}>Explore tailored solutions for every aspect of your business</h2>

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
        <div className="valuetext">
            <h1 className="heading3">Credit & Debit Cards</h1>
            <h2 className="heading2">Pay quickly and securely with your bank card. Easy, fast, and reliable.</h2>
        </div>
    </article>
    <article className="valuegriditem">
        <div className="valueicon"><LocalShippingIcon /></div>
        <div className="valuetext">
            <h1 className="heading3">Cash on Delivery</h1>
            <h2 className="heading2">Pay upon delivery — available for a wide range of products for your convenience.</h2>
        </div>
    </article>
    <article className="valuegriditem">
        <div className="valueicon"><AccountBalanceIcon /></div>
        <div className="valuetext">
            <h1 className="heading3">Bank Transfer</h1>
            <h2 className="heading2">Pay directly from your bank account to ours — secure and hassle-free.</h2>
        </div>
    </article>
    <article className="valuegriditem">
        <div className="valueicon"><PaymentsIcon /></div>
        <div className="valuetext">
            <h1 className="heading3">Razorpay or Paypal</h1>
            <h2 className="heading2">Choose from Razorpay or PayPal for secure, fast, and private transactions.</h2>
        </div>
    </article>
    <article className="valuegriditem">
        <div className="valueicon"><QrCodeScannerIcon /></div>
        <div className="valuetext">
            <h1 className="heading3">UPI Payments</h1>
            <h2 className="heading2">Pay easily using UPI apps like PhonePe, Google Pay, or BHIM.</h2>
        </div>
    </article>
    <article className="valuegriditem">
        <div className="valueicon"><AccountBalanceWalletIcon /></div>
        <div className="valuetext">
            <h1 className="heading3">Wallet Payments</h1>
            <h2 className="heading2">Use your digital wallets such as Paytm, Amazon Pay, or Mobikwik.</h2>
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
    <img 
      src="/Images/Banks/Sbi.png" 
      alt="State Bank of India" 
    />
    <a href="https://www.onlinesbi.sbi/" target='_blank' className='hoverr'>Read T&Cs</a>
  </article>

  <article className='bankgriditem'>
    <img 
      src="/Images/Banks/Hfdc.png" 
      alt="HDFC Bank" 
    />
    <a href="https://www.hdfcbank.com/personal/useful-links/terms-and-conditions" target='_blank' className='hoverr'>Read T&Cs</a>
  </article>

  <article className='bankgriditem'>
    <img 
      src="/Images/Banks/Icici.png" 
      alt="ICICI Bank" 
    />
    <a href="https://www.icicibank.com/terms-conditions" target='_blank' className='hoverr'>Read T&Cs</a>
  </article>

  <article className='bankgriditem'>
    <img 
      src="/Images/Banks/Axis.png" 
      alt="Axis Bank" 
    />
    <a href="https://www.axisbank.com/terms-conditions" target='_blank' className='hoverr'>Read T&Cs</a>
  </article>

  <article className='bankgriditem'>
    <img 
      src="/Images/Banks/Kotak.png" 
      alt="Kotak Mahindra Bank" 
    />
    <a href="https://www.kotak.com/en/terms-and-conditions.html" target='_blank' className='hoverr'>Read T&Cs</a>
  </article>

  <article className='bankgriditem'>
    <img 
      src="/Images/Banks/Baroda.png" 
      alt="Bank of Baroda" 
    />
    <a href="https://www.bankofbaroda.in/terms-conditions" target='_blank' className='hoverr'>Read T&Cs</a>
  </article>

  <article className='bankgriditem'>
    <img 
      src="/Images/Banks/Union.png" 
      alt="Union Bank of India" 
    />
    <a href="https://www.unionbankofindia.co.in/english/terms-conditions.aspx" target='_blank' className='hoverr'>Read T&Cs</a>
  </article>

  <article className='bankgriditem'>
    <img 
      src="/Images/Banks/Canara.png" 
      alt="Canara Bank" 
    />
    <a href="https://canarabank.com/english/terms-and-conditions/" target='_blank' className='hoverr'>Read T&Cs</a>
  </article>

  <article className='bankgriditem'>
    <img 
      src="/Images/Banks/Idfc.svg" 
      alt="IDFC First Bank" 
    />
    <a href="https://www.idfcfirstbank.com/terms-and-conditions" target='_blank' className='hoverr'>Read T&Cs</a>
  </article>

  <article className='bankgriditem'>
    <img 
      src="/Images/Banks/Indusind.png" 
      alt="IndusInd Bank" 
    />
    <a href="https://www.indusind.com/in/en/personal/terms-and-conditions.html" target='_blank' className='hoverr'>Read T&Cs</a>
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