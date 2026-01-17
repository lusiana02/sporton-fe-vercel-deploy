"use client";
import { useState } from "react";
import CardWithHeader from "../ui/cart-with-header";

const OrderInformation = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerContact: "",
    customerAddress: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5">
        <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input 
            type="text" 
            placeholder="Type your full name" 
            id="customerName" 
            name="customerName"
            value={formData.customerName} 
            onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label htmlFor="customerContact">Whatsapp Number</label>
          <input
            type="number"
            placeholder="Type your whatsapp number"
            id="customerContact"
            name="customerContact"
            value={formData.customerContact} 
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea
            placeholder="Type your shipping address"
            id="customerAddress"
            name="customerAddress"
            rows={7}
            value={formData.customerAddress} 
            onChange={handleInputChange}
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;