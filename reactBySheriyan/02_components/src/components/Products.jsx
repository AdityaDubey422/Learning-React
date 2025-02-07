import React from "react";
import Card from "./Card";

const Products = ({ productCategory }) => {
  const datas = [
    {
      "productName": "Sony WF-1000XM5",
      "productDescription": "Premium noise-canceling wireless earbuds with superior sound quality, adaptive noise control, and long battery life.",
      "productPrice": "$299.99",
      "imageUrl": "https://sony.scene7.com/is/image/sonyglobalsolutions/01_M?$productIntroPlatemobile$&fmt=png-alpha"
    },
    {
      "productName": "Apple AirPods Pro (2nd Gen)",
      "productDescription": "True wireless earbuds with active noise cancellation, spatial audio, and seamless integration with Apple devices.",
      "productPrice": "$249.00",
      "imageUrl": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV2?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1660803972361"
    },
    {
      "productName": "Bose QuietComfort Earbuds II",
      "productDescription": "High-fidelity wireless earbuds with world-class noise cancellation and customizable sound settings.",
      "productPrice": "$279.00",
      "imageUrl": "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds_ii/product_silo_image/COM-3679_QCEBII-LE_Buds_Front_EclipseGrey_hero.png/jcr:content/renditions/cq5dam.web.600.600.png"
    },
    {
      "productName": "Samsung Galaxy Buds 2 Pro",
      "productDescription": "Wireless earbuds with 24-bit high-fidelity audio, active noise cancellation, and seamless integration with Samsung Galaxy devices.",
      "productPrice": "$229.99",
      "imageUrl": "https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-buds3-pro-r630-sm-r630nzaainu-542134810?$684_547_PNG$"
    },
    {
      "productName": "Jabra Elite 7 Pro",
      "productDescription": "True wireless earbuds with advanced call quality, adjustable ANC, and up to 8 hours of battery life.",
      "productPrice": "$199.99",
      "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/u/5/c/-original-imahfcgvzhyswbyh.jpeg?q=70&crop=false"
    }
  ]
  
  

  return (
    <div className="p-10">
      <h2 className="text-5xl pb-10">{productCategory}</h2>
      <div className="flex gap-10 flex-wrap">
        {datas.map((data, index) => (
          <Card
            key={index} // ✅ Added key prop
            productName={data.productName}
            productPrice={data.productPrice}
            productImageUrl={data.imageUrl}
            productDescription={data.productDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
