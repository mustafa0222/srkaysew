document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const increaseBtn = document.getElementById('increaseQty');
    const decreaseBtn = document.getElementById('decreaseQty');
    const orderForm = document.getElementById('orderForm');

    // Quantity Logic
    increaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 100) { // Max limit just in case
            quantityInput.value = currentValue + 1;
            animateInput(quantityInput);
        }
    });

    decreaseBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            animateInput(quantityInput);
        }
    });

    function animateInput(element) {
        element.style.transform = 'scale(1.2)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 150);
    }

    // Form Submission
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const quantity = quantityInput.value;

        if (!fullName || !phone || !address) {
            alert('تکایە هەموو خانەکان پڕبکەرەوە'); // Please fill all fields
            return;
        }

        // WhatsApp Number
        const waNumber = '9647515056972';

        // Construct Message
        const message = `سڵاو، دەمەوێت سرکەی سێو داوا بکەم.
    
تکایە وردەکارییەکان ببینە:
👤 *ناوی تەواو:* ${fullName}
📱 *ژمارەی مۆبایل:* ${phone}
📍 *ناونیشان:* ${address}
📦 *بڕ:* ${quantity} بوتڵ`;

        // Encode Message
        const encodedMessage = encodeURIComponent(message);
        
        // Open WhatsApp
        const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;
        
        window.open(waUrl, '_blank');
    });

    // Add float label interactions if needed (keeping it simple for now as per design)
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.parentElement.parentElement.classList.remove('focused');
            }
        });
    });
});
