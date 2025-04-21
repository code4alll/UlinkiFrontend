import React, { Fragment, useState, useEffect } from 'react';
import '../Guidelines/Guidelines.css';
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet-async';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const FAQPage = () => {
  const navigate = useNavigate();


  const [activeIndex, setActiveIndex] = useState(null);
  const toggleGuideAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  //search-bar
  const [queryFaq, setQueryFaq] = useState('');

  const itu = [
    {
      id: uuidv4(),
      title: 'Who We Are?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            Ulinkit.com is a global B2B eMarketplace transforming the business-to-business landscape with a sleek, user-friendly digital ecosystem that combines modern design and seamless functionality.
          </p>
          <p className='heading2 headMargin'>
            Through cutting-edge technology, integrated financial solutions, and a strong team, Ulinkit enables cross-border trade, supports SMEs in scaling, reinvents procurement, and empowers entrepreneurs globally.
          </p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'Who is Ulinkit for?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            Ulinkit is designed for businesses of all sizes looking to expand their reach and sell physical products across global markets.
          </p>
          <p className='heading2 headMargin'>
            Title structure for product listings: [Brand], [Model name], [Model number], [Key features], [Item type], [Size], [Color], [Quantity].
          </p>
          <p className='heading2 headMargin'>
            Example: Graco Maxi GTB538 lightweight car seat - 1-12 years, navy blue. <br />
            California Garden Canned, Ready To Eat Chickpeas 400g - Pack of 24.
          </p>
          <p className='heading2 headMargin'>
            Keep the title under 200 characters, use numerical digits, and avoid keyword stuffing.
          </p>
          <p className='heading2 headMargin'>
            Do not use ALL CAPS or include price, availability, or warranty information in the title.
          </p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'How can I contact you?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            You can contact us through the support section on our website or via the contact form provided on the Help Center.
          </p>
          <p className='heading2 headMargin'>
            Use proper grammar, US English spelling, and keep messages within 1000 characters.
          </p>
          <p className='heading2 headMargin'>
            Avoid special characters such as %, $, @, ™, ® and don’t include warranty or promotional claims.
          </p>
          <p className='heading2 headMargin'>
            A+ content can be uploaded if applicable.
          </p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'Where is Ulinkit based?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            Ulinkit is headquartered in India, facilitating global trade with trusted sellers and buyers worldwide.
          </p>
          <p className='heading2 headMargin'>
            For product images: the product should fill 70–85% of the image space, file size between 100KB and 10MB.
          </p>
          <p className='heading2 headMargin'>
            Accepted file types: PNG, JPEG, JPG, BMP.
          </p>
          <p className='heading2 headMargin'>
            Lifestyle images are allowed as main images in specific categories like Furniture, Beddings, Lights, and Curtains—provided the product is clearly visible.
          </p>
        </div>
      ),
    },
  ];
  
  
  const sou = [
    {
      id: uuidv4(),
      title: 'How do I register as a Seller on Ulinkit?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            To register as a Seller on Ulinkit.com, follow these steps:
          </p>
          <p className='heading2 headMargin'>
            1. Visit <strong>www.ulinkit.com</strong> and click on the <strong>“Register”</strong> button on the top right corner.
          </p>
          <p className='heading2 headMargin'>
            2. Choose <strong>“Register as a Seller”</strong> during the sign-up process.
          </p>
          <p className='heading2 headMargin'>
            3. Fill out the seller registration form with accurate business details, including a valid ID, business name, and contact information.
          </p>
          <p className='heading2 headMargin'>
            4. Submit necessary documents like a trade license (if applicable) for verification.
          </p>
          <p className='heading2 headMargin'>
            5. Once verified, you will receive confirmation and access to your Seller Dashboard where you can start listing products.
          </p>
    
          <p className='heading2 headMargin'>
            <strong>Important Product Listing Guidelines:</strong>
          </p>
          <p className='heading2 headMargin'>
            Ulinkit.com is a marketplace for selling <strong>physical products only</strong>. The sale of services or subscriptions is not permitted.
          </p>
          <p className='heading2 headMargin'>
            Ensure your product brand and type are legally allowed to be sold online under UAE law. Prohibited items include alcohol, tobacco products, drugs, medical products, and animals.
          </p>
          <p className='heading2 headMargin'>
            Product details must not contain any graphic, explicit, or inappropriate content. All language must remain professional.
          </p>
          <p className='heading2 headMargin'>
            Product descriptions must be written in <strong>English (mandatory)</strong>. Arabic is optional and can help improve local reach.
          </p>
          <p className='heading2 headMargin'>
            Each listing must include <strong>only one product</strong>. Accessories and variants must be listed separately.
          </p>
          <p className='heading2 headMargin'>
            Ensure all product information is consistent across the listing and free from contradictions.
          </p>
        </div>
      ),
    },
    
    {
      id: uuidv4(),
      title: 'How do I start selling on Ulinkit?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            To start selling on Ulinkit, you must first register as a Seller and set up your Seller Dashboard.
          </p>
          <p className='heading2 headMargin'>
            1. Go to <strong>www.ulinkit.com</strong> and click on <strong>“Register”</strong> at the top right.
          </p>
          <p className='heading2 headMargin'>
            2. Select <strong>“Register as a Seller”</strong> and complete the sign-up process with your business and contact details.
          </p>
          <p className='heading2 headMargin'>
            3. Once your seller profile is approved, log in to your Seller Dashboard.
          </p>
          <p className='heading2 headMargin'>
            4. Start uploading your product listings by adding titles, descriptions, prices, stock details, and images.
          </p>
    
          <p className='heading2 headMargin'>
            <strong>Important Image Guidelines:</strong>
          </p>
          <p className='heading2 headMargin'>
            Product images should be clear and readable so that buyers can understand the product’s features and specifications.
          </p>
          <p className='heading2 headMargin'>
            Each image should show only one product with a clearly defined color and size to avoid confusion. If your product has variants (color or size), list them separately.
          </p>
          <p className='heading2 headMargin'>
            Images must match the product title, key features, and description. There should be no contradictions (e.g., red shirt in image, blue in title).
          </p>
          <p className='heading2 headMargin'>
            Only real photographs are accepted. Illustrations or mockups are not allowed.
          </p>
          <p className='heading2 headMargin'>
            Images must not include watermarks, contact details, text overlays, or graphics.
          </p>
          <p className='heading2 headMargin'>
            Unprofessional, graphic, or inappropriate images are strictly prohibited.
          </p>
          <p className='heading2 headMargin'>
            Images must not contain live models for sensitive categories (e.g., lingerie, underwear, sleepwear).
          </p>
        </div>
      ),
    },
    
    {
      id: uuidv4(),
      title: 'What products can I sell on Ulinkit?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            Ulinkit.com is a global marketplace for selling a wide range of **physical products** that comply with international and local regulations.
          </p>
          <p className='heading2 headMargin'>
            You can sell items such as fashion, electronics, home goods, accessories, beauty products, stationery, and more.
          </p>
          <p className='heading2 headMargin'>
            All products must be **new, genuine, and in sellable condition**. Second-hand or refurbished items are not permitted.
          </p>
          <p className='heading2 headMargin'>
            Products must not infringe on any copyright, trademark, or intellectual property rights.
          </p>
          <p className='heading2 headMargin'>
            **Prohibited items** include (but are not limited to): alcohol, tobacco, drugs, medicines, supplements, weapons, adult content, and live animals.
          </p>
          <p className='heading2 headMargin'>
            All listings must adhere to the **laws of the seller's country**, including but not limited to the regulations of **UAE and India**.
          </p>
          <p className='heading2 headMargin'>
            Sellers are responsible for ensuring that their products meet Ulinkit's quality standards and comply with **e-commerce and consumer protection laws** in their respective countries.
          </p>
        </div>
      ),
    }
,    
{
  id: uuidv4(),
  title: 'What is the benefit of being verified as a Seller?',
  panel: (
    <div>
      <p className='heading2 headMargin'>
        Being a verified seller on Ulinkit builds **trust and credibility** with buyers, increasing your chances of making sales.
      </p>
      <p className='heading2 headMargin'>
        Verified sellers receive a special **badge** on their profile and product listings, helping them stand out in the marketplace.
      </p>
      <p className='heading2 headMargin'>
        Verification can improve **product visibility** and ranking in search results.
      </p>
      <p className='heading2 headMargin'>
        It also helps reduce order cancellations, returns, and buyer disputes by ensuring higher product quality and accurate listings.
      </p>
      <p className='heading2 headMargin'>
        Verified sellers may gain **early access** to platform features, promotional campaigns, and exclusive seller support.
      </p>
      <p className='heading2 headMargin'>
        Overall, verification enhances your **professional image** and helps you grow your business globally on Ulinkit.
      </p>
    </div>
  ),
}
,
  ];
  
  
  const spug = [
    {
      id: uuidv4(),
      title: 'How do I list or upload my products on Ulinkit.com?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            To list your products on Ulinkit, you must first **create a seller account** and complete your profile with valid business and contact details.
          </p>
          <p className='heading2 headMargin'>
            Once your account is verified, go to your **Seller Dashboard** and click on "Add Product" or "Upload Products."
          </p>
          <p className='heading2 headMargin'>
            You can either add products **manually one by one** using the form, or use the **bulk upload template** for larger inventories.
          </p>
          <p className='heading2 headMargin'>
            Provide complete product details, including:
            <br />– Product title (starting with brand name) <br />– Clear and accurate description <br />– Key features (2–6 points) <br />– High-quality real images <br />– Pricing and available stock
          </p>
          <p className='heading2 headMargin'>
            Make sure your listing complies with Ulinkit’s content and quality guidelines, including language, image standards, and product restrictions.
          </p>
          <p className='heading2 headMargin'>
            After submission, your product will go through a **review process**. Once approved, it will be live and visible to global buyers.
          </p>
        </div>
      ),
    }
,    
{
  id: uuidv4(),
  title: 'How do I update existing products?',
  panel: (
    <div>
      <p className='heading2 headMargin'>
        To update an existing product on Ulinkit.com, go to your **Seller Dashboard** and navigate to the “My Products” or “Manage Listings” section.
      </p>
      <p className='heading2 headMargin'>
        Locate the product you want to update and click the **Edit** icon or button.
      </p>
      <p className='heading2 headMargin'>
        You can update information such as product title, description, key features, pricing, stock levels, and images.
      </p>
      <p className='heading2 headMargin'>
        Make sure the updated information remains consistent across all product fields, including titles, images, and descriptions.
      </p>
      <p className='heading2 headMargin'>
        After making changes, click **Save** or **Submit for Review** depending on the platform settings. Your changes may be subject to review before going live.
      </p>
      <p className='heading2 headMargin'>
        It is recommended to regularly update your listings to keep inventory accurate and maintain buyer trust.
      </p>
    </div>
  ),
}
,
{
  id: uuidv4(),
  title: 'How do I upload images of my products?',
  panel: (
    <div>
      <p className='heading2 headMargin'>
        To upload product images, go to your <strong>Seller Dashboard</strong> and click on the product listing or create a new product.
      </p>
      <p className='heading2 headMargin'>
        In the image upload section, you can add multiple high-quality images that clearly show your product from different angles.
      </p>
      <p className='heading2 headMargin'>
        Only upload real photographs of the product. Avoid using mockups, drawings, or computer-generated images.
      </p>
      <p className='heading2 headMargin'>
        Each image must show only one product with accurate color and size. If your product has multiple variants, upload separate listings for each variant.
      </p>
      <p className='heading2 headMargin'>
        Do not include watermarks, logos, contact information, or text overlays on your images.
      </p>
      <p className='heading2 headMargin'>
        Avoid inappropriate or unprofessional images. For sensitive categories (e.g., lingerie, underwear), live models are not permitted.
      </p>
      <p className='heading2 headMargin'>
        Once uploaded, review your images before saving the listing to ensure they meet Ulinkit’s quality standards.
      </p>
    </div>
  ),
}
,
{
  id: uuidv4(),
  title: 'How do I find the right category for my products?',
  panel: (
    <div>
      <p className='heading2 headMargin'>
        To find the correct category for your product, start by identifying the product type and its primary use.
      </p>
      <p className='heading2 headMargin'>
        Use the Ulinkit category search tool or browse through the main category sections on the Seller Dashboard when listing your product.
      </p>
      <p className='heading2 headMargin'>
        Choose the most specific sub-category available. For example, instead of just "Clothing," choose "Men's T-Shirts" or "Women's Dresses" if applicable.
      </p>
      <p className='heading2 headMargin'>
        Ensure the category reflects what the buyer would expect based on your product title, description, and images.
      </p>
      <p className='heading2 headMargin'>
        Misclassified items may lead to poor visibility or removal of listings from the platform.
      </p>
      <p className='heading2 headMargin'>
        If you're unsure, refer to similar products on Ulinkit or contact seller support for guidance.
      </p>
    </div>
  ),
}
,
  ];
  
  
  const am = [
    {
      id: uuidv4(),
      title: 'What can I sell on Ulinkit.com?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            Ulinkit is a global marketplace dedicated exclusively to the sale of physical products. The sale of services, subscriptions, or digital products is strictly prohibited.
          </p>
          <p className='heading2 headMargin'>
            Ensure your product complies with both local Indian laws and international regulations. Prohibited items include alcohol, tobacco, controlled substances, medical supplies, and live animals.
          </p>
          <p className='heading2 headMargin'>
            Product listings must be presented professionally, without any graphic, inappropriate, or offensive content.
          </p>
          <p className='heading2 headMargin'>
            All product descriptions must be in English (mandatory). You may also include optional translations in Hindi or other regional languages for better local reach.
          </p>
          <p className='heading2 headMargin'>
            Each listing should represent a single product only. Variants, accessories, and additional items must be listed separately.
          </p>
          <p className='heading2 headMargin'>
            Ensure all product details are consistent and free from contradictions or misleading information.
          </p>
        </div>
      ),
    }
,    
{
  id: uuidv4(),
  title: 'What are the product image requirements?',
  panel: (
    <div>
      <p className='heading2 headMargin'>
        Images should be clear, high-quality, and accurately represent the product's appearance and features.
      </p>
      <p className='heading2 headMargin'>
        Each image must display only one product, clearly showing the selected color and size. Different variants, such as colors or sizes, should be listed and imaged separately.
      </p>
      <p className='heading2 headMargin'>
        Product images must match the product title, description, and key features. There should be no discrepancies (e.g., an image of a red shirt when the title mentions blue).
      </p>
      <p className='heading2 headMargin'>
        Only real photographs of the product are accepted—illustrations, computer-generated images, or mockups are not allowed.
      </p>
      <p className='heading2 headMargin'>
        Images must be free of watermarks, logos, contact details, text overlays, or any graphic additions.
      </p>
      <p className='heading2 headMargin'>
        Images must be professional and appropriate. Graphic, explicit, or offensive visuals are strictly prohibited.
      </p>
      <p className='heading2 headMargin'>
        Live models are not permitted for sensitive product categories such as lingerie, underwear, or sleepwear.
      </p>
    </div>
  ),
}
,
    {
      id: uuidv4(),
      title: 'How should I write product titles?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            Product titles should be concise and clearly describe the item being sold.
          </p>
          <p className='heading2 headMargin'>
            Start the title with the brand name, followed by the product type and key identifier (e.g., “Nike Running Shoes - Black”).
          </p>
          <p className='heading2 headMargin'>
            Use “Assorted Colors” only when the packaging displays it or if colors are clearly described in the product details.
          </p>
          <p className='heading2 headMargin'>
            Do not include multiple variants in a single title. Avoid any inconsistency with product images or descriptions.
          </p>
          <p className='heading2 headMargin'>
            Avoid using irrelevant keywords or filler words.
          </p>
          <p className='heading2 headMargin'>
            Titles must be free of spelling errors, typos, or unnecessary special characters.
          </p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'What should I include in the key features section?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            Key features should summarize the most important functions, specifications, and selling points of the product.
          </p>
          <p className='heading2 headMargin'>
            Each listing should have a minimum of 2 and a maximum of 6 key features.
          </p>
          <p className='heading2 headMargin'>
            Include key information such as usage, functionality, and compatibility with other devices (if applicable).
          </p>
          <p className='heading2 headMargin'>
            Avoid promotional language, listing multiple variants, or any inconsistencies with other product details.
          </p>
          <p className='heading2 headMargin'>
            Ensure the key features are grammatically correct and free of typos and symbols.
          </p>
        </div>
      ),
    },
  ];
  
  
  const bou = [
    {
      id: uuidv4(),
      title: 'How do I track my orders?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            To track your orders on Ulinkit.com, log into your account and go to the "My Orders" section. Here, you can see the status of all your orders, including the shipment and delivery updates.
          </p>
          <p className='heading2 headMargin'>
            If you need assistance, you can contact customer support for help with order tracking or any other inquiries.
          </p>
          <p className='heading2 headMargin'>
            You will receive an email notification with tracking details once your order has been shipped. You can use the provided tracking number to monitor the shipment progress.
          </p>
          <p className='heading2 headMargin'>
            Make sure that your shipping address is correct to avoid any delays in delivery.
          </p>
          <p className='heading2 headMargin'>
            Ulinkit.com only supports physical products; services, subscriptions, or digital items cannot be tracked through the platform.
          </p>
        </div>
      ),
    },
  
  
    {
      id: uuidv4(),
      title: 'How do returns and refunds work?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            Ulinkit.com offers a return and refund policy for physical products, subject to certain conditions. To initiate a return, the product must be in its original, unused condition, and the return request must be made within the specified return window.
          </p>
          <p className='heading2 headMargin'>
            If you receive a damaged or defective item, contact customer support within the return window for assistance with returns or exchanges.
          </p>
          <p className='heading2 headMargin'>
            Refunds will be issued to the original payment method once the return is processed and the item is received in acceptable condition.
          </p>
          <p className='heading2 headMargin'>
            Return shipping costs may apply unless the return is due to a seller error or a defective product. Ensure that you follow the provided instructions for a smooth return process.
          </p>
          <p className='heading2 headMargin'>
            Some products, such as perishable items or products marked as non-returnable, may not be eligible for returns or refunds. Always check the product's return policy before purchasing.
          </p>
          <p className='heading2 headMargin'>
            To initiate a return or request a refund, visit your order history, select the item, and follow the instructions. You will be notified once the return or refund is processed.
          </p>
        </div>
      ),
    },

    {
  id: uuidv4(),
  title: 'What is the benefit of verifying my account as a Buyer?',
  panel: (
    <div>
      <p className='heading2 headMargin'>
        Verifying your account as a Buyer on Ulinkit.com offers several benefits, including enhanced security, quicker access to exclusive offers, and improved customer support.
      </p>
      <p className='heading2 headMargin'>
        Verified Buyers gain access to more personalized shopping experiences, such as tailored product recommendations based on your preferences and purchase history.
      </p>
      <p className='heading2 headMargin'>
        By verifying your account, you help ensure that your transactions are secure, and you may be eligible for special promotions, faster order processing, and priority customer service.
      </p>
      <p className='heading2 headMargin'>
        Verifying your account also helps protect against fraud, ensuring that only legitimate buyers can make purchases, contributing to a safer marketplace for everyone.
      </p>
      <p className='heading2 headMargin'>
        To verify your account, simply follow the instructions provided during registration or from your account settings page. This process typically involves verifying your identity and contact details.
      </p>
    </div>
  ),
}
,
{
  id: uuidv4(),
  title: 'How long will it take for my order to be delivered?',
  panel: (
    <div>
      <p className='heading2 headMargin'>
        Delivery times for orders on Ulinkit.com depend on the shipping method, the destination, and the product's availability. Typically, orders are processed within 1-3 business days.
      </p>
      <p className='heading2 headMargin'>
        Standard shipping usually takes between 5-7 business days, while expedited options may shorten the delivery time to 2-3 business days, depending on your location.
      </p>
      <p className='heading2 headMargin'>
        You will receive a tracking number once your order has been dispatched. This allows you to track the progress of your delivery online.
      </p>
      <p className='heading2 headMargin'>
        If your order is delayed or if you have specific questions about the shipping process, you can contact our customer support for assistance.
      </p>
      <p className='heading2 headMargin'>
        Please note that delivery times may vary due to unforeseen circumstances, such as weather conditions, holidays, or delivery carrier issues.
      </p>
    </div>
  ),
}
,
  ];
  
  const us = [
    {
      id: uuidv4(),
      title: 'What is Request For Quotation (RFQ)?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            A Request for Quotation (RFQ) is a process where buyers on Ulinkit.com can request a formal price quote for specific products from sellers.
          </p>
          <p className='heading2 headMargin'>
            Buyers can submit an RFQ for one or more products they are interested in purchasing. Sellers will then provide a quotation based on the buyer’s requirements, including price, delivery time, and any additional terms.
          </p>
          <p className='heading2 headMargin'>
            The RFQ process helps both buyers and sellers negotiate pricing and terms before finalizing a purchase.
          </p>
          <p className='heading2 headMargin'>
            Once a buyer receives a quotation from a seller, they can decide whether to proceed with the purchase or explore other options.
          </p>
          <p className='heading2 headMargin'>
            The RFQ system is designed to facilitate better communication and pricing transparency between buyers and sellers on Ulinkit.com.
          </p>
        </div>
      ),
    }
,    
{
  id: uuidv4(),
  title: 'What is Pre-owned: Buy & Sell?',
  panel: (
    <div>
      <p className='heading2 headMargin'>
        Pre-owned: Buy & Sell refers to the marketplace feature where users can buy and sell second-hand or used products.
      </p>
      <p className='heading2 headMargin'>
        Buyers can find products that are previously owned but still in good condition, offering an opportunity to get quality items at lower prices.
      </p>
      <p className='heading2 headMargin'>
        Sellers can list their pre-owned products, ensuring that the product condition and details are clearly mentioned to avoid any confusion.
      </p>
      <p className='heading2 headMargin'>
        It’s important to provide accurate descriptions, including the product's condition, age, and any potential wear and tear.
      </p>
      <p className='heading2 headMargin'>
        Buyers and sellers should engage with full transparency, ensuring the buyer is aware of the used status of the product before making a purchase.
      </p>
      <p className='heading2 headMargin'>
        The platform aims to create a trusted environment for both buyers and sellers by ensuring proper vetting and honest product listings.
      </p>
    </div>
  ),
}
,
  ];
  
  
  const ul = [
    {
      id: uuidv4(),
      title: 'How can I get a quote or estimate on shipping rates?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            Ulinkit.com is a marketplace for selling physical products only. Services, subscriptions, and intangible products are not allowed on the platform.
          </p>
          <p className='heading2 headMargin'>
            Ensure that your product’s brand and type comply with Indian online selling regulations. Restricted items include alcohol, tobacco, medical products, drugs, and animals.
          </p>
          <p className='heading2 headMargin'>
            Product descriptions must be professional, accurate, and free from graphic, explicit, or offensive content.
          </p>
          <p className='heading2 headMargin'>
            All product information must be provided in English (mandatory). Optional translations in other languages can be provided, but English should remain the primary language.
          </p>
          <p className='heading2 headMargin'>
            Each listing should represent a single product. Variants and accessories must be listed separately to avoid confusion.
          </p>
          <p className='heading2 headMargin'>
            Ensure consistency across all product details. Do not include conflicting information between the product title, description, and images.
          </p>
        </div>
      ),
    }
,    
{
  id: uuidv4(),
  title: 'How do I get insurance for my cargo and who should pay for it?',
  panel: (
    <div>
      <p className='heading2 headMargin'>
        When shipping products, it’s important to ensure your cargo is covered by insurance in case of damage or loss during transit. 
      </p>
      <p className='heading2 headMargin'>
        You can get cargo insurance from the shipping carrier or through third-party insurers who specialize in freight insurance. 
      </p>
      <p className='heading2 headMargin'>
        The responsibility for paying for the insurance typically depends on the terms of the agreement between the buyer and seller. In most cases, the seller may offer the insurance as part of the shipping cost or as an optional add-on, while in some cases, the buyer may be responsible for purchasing it separately.
      </p>
      <p className='heading2 headMargin'>
        It’s important to clarify the terms of insurance coverage before shipping. Ensure that both parties agree on who will bear the cost and the coverage details to avoid any disputes.
      </p>
      <p className='heading2 headMargin'>
        Make sure to keep records of the insurance agreement and any relevant documentation for claims in case something goes wrong.
      </p>
    </div>
  ),
}
,
    
  ];
  

  const allItems = [...itu, ...sou, ...spug, ...am, ...bou, ...us, ...ul];
  const [filteredFaqs, setFilteredFaqs] = useState(allItems);

  useEffect(() => {
    if (queryFaq.trim()) {
      const regex = new RegExp(queryFaq.trim(), 'i');
      const filtered = allItems.filter(item => regex.test(item.title));
      setFilteredFaqs(filtered);
    } else {
      setFilteredFaqs(allItems);
    }
  }, [queryFaq]);

  const handleKeyPressFaq = (e) => {
    if (e.key === 'Enter') {
      handleSearchFaq();
    }
  };

  const handleSearchFaq = () => {
    if (queryFaq.trim()) {
      const regex = new RegExp(queryFaq.trim(), 'i');
      const filtered = allItems.filter(item => regex.test(item.title));
      setFilteredFaqs(filtered);
    } else {
      setFilteredFaqs(allItems);
    }
  };





  return (
    <Fragment>
      <Helmet>
        <title>Frequently Asked Questions (FAQ) | Ulinkit - Get Your Answers</title>
        <meta name="description" content="Find answers to common questions about Ulinkit. Our FAQ page covers topics on account management, orders, payments, and more to help you navigate our platform with ease." />
        <link rel="canonical" href="https://www.ulinkit.com/faq" />
      </Helmet>
      <article className="guide-banner-cont">
        <img className='faqBanner' src="https://res.cloudinary.com/dey1tujp8/image/upload/v1719055436/pexels-mart-production-7709189_nhkyis.jpg" alt="banner" />
        <div className="responsive-text">
          <div className="flexcol" style={{ gap: '20px' }}>
            <h1 className="heading4">Help and Support</h1>
            <h2 className="heading4">How Can We Help You?</h2>
            <div className="search-faq">
              <input type='text' value={queryFaq} onChange={(e) => setQueryFaq(e.target.value)} onKeyPress={handleKeyPressFaq} placeholder='Search for your question...' />
              <span>
                <SearchIcon onClick={handleSearchFaq} />
              </span>
            </div>
          </div>
        </div>
      </article>


      {queryFaq ?
        (<div className="flexcol-start wh home">
          <div className="flexcol wh">
            {filteredFaqs.map((item, index) => (
              <Fragment key={uuidv4()}>
                <div className={`accordion-guide ${activeIndex === (index + 1) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 1)}>
                  <p className="heading3">{item.title}</p>
                </div>
                <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 1) ? '800px' : '0' }}>
                  {item.panel}
                </div>
              </Fragment>
            ))}
          </div>
        </div>) : (

          <article className="flexcol-start wh home">
            <h1 className="heading5">1. Introduction to Ulinkit</h1>
            <div className="flexcol wh">
              {
                itu.map((item, index) => (
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

            <h2 className="heading5">2. Selling on Ulinkit</h2>
            <div className="flexcol wh">
              {
                sou.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 5) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 5)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 5) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>

            <h3 className="heading5">3. Seller Product Upload Guideline</h3>
            <div className="flexcol wh">
              {
                spug.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 9) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 9)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 9) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>

            <h4 className="heading5">4. Account Management</h4>
            <div className="flexcol wh">
              {
                am.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 13) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 13)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 13) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>

            <p className="heading5">5. Buying on Ulinkit</p>
            <div className="flexcol wh">
              {
                bou.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 17) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 17)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 17) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>

            <p className="heading5">6. Ulinkit Services</p>
            <div className="flexcol wh">
              {
                us.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 21) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 21)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 21) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>

            <p className="heading5">7. Ulinkit Logistics</p>
            <div className="flexcol wh">
              {
                ul.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 25) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 25)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 25) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>


            <h5 className="heading2">Do you have questions about uploading your catalogue on Ulinkit? Or do you simply need a first-hand demonstration showing how to upload products?
              Join our free 1-hour webinar, where our experts will show you how to do it and start selling!
            </h5>
            <button onClick={()=>navigate('/Signup')} className='btn box2 flex' style={{ width: 'fit-content', backgroundColor: 'var(--CodeOne)' }}><div className="heading2">Register Now</div></button>
          </article>
        )
      }

    </Fragment>
  )
}

export default FAQPage