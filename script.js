function sendWhatsApp(productName, price) {
    // നിങ്ങളുടെ വാട്സാപ്പ് നമ്പർ ഇവിടെ മാറ്റുക
    const phoneNumber = "9645141508"; 
    
    const message = "Hello Green Leaf Fashion,%0A%0A" + 
                    "I would like to order the following item:%0A" + 
                    "*Product:* " + productName + "%0A" + 
                    "*Price:* " + price + "%0A%0A" +
                    "Is this item in stock?";

    const url = "https://wa.me/" + 9645141508 + "?text=" + hello;
    window.open(url, '_blank').focus();
}

// ലളിതമായ ഒരു ആനിമേഷൻ (Scroll ചെയ്യുമ്പോൾ വരുന്നത്)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});