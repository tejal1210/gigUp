import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51PkW2uKWal1WXBfGxHIpLo0e5OnHBWnjExO84vnantMTRhi5n4gHWJnLrwMYyKW2s4f4E0H1PO5ryeApsaKawGy400Zc6YkhR9"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create-payment-intent/${id}`
        );
        console.log(res.data);
        setClientSecret(res.data.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return <div className="pay items-center justify-center flex flex-co">
    {clientSecret && (
        <Elements options={options} stripe={stripePromise} >
          <CheckoutForm />
        </Elements>
      )}
  </div>;
};

export default Pay;