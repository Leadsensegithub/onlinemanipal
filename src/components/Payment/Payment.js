import React from 'react';

const RazorpayIntegration = () => {
    const handlePayment = async () => {
        const res = await fetch('http://localhost:4000/api/v1/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any headers your backend requires, like authorization token, etc.
            },
            body: JSON.stringify({
                // Add any payload required by your backend for creating the order
            }),
        });

        const order = await res.json();

        const options = {
            key: 'rzp_live_03ijsdCrvMvOp9', // Replace with your actual Razorpay API key
            amount: order.amount,
            currency: order.currency,
            name: '123admissions',
            description: 'Purchase Description',
            order_id: order.id,
            handler: function (response) {
                alert(response.razorpay_payment_id);
                // Handle payment success
            },
            prefill: {
                name: 'Customer Name',
                email: 'customer@example.com',
                contact: '9999999999',
            },
            notes: {
                address: 'Customer Address',
            },
            theme: {
                color: '#F37254',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div>
            <button onClick={handlePayment}>Pay with Razorpay</button>
        </div>
    );
};

export default RazorpayIntegration;
