const INTERESTING_PRODUCTS = [
    {
        name: 'Arduino MEGA2560 R3 Atmega16u2',
        src: 'assets/arduino-mega2560-r3.jpg',
        reducedPrice: '210.000₫',
        originalPrice: '250.000₫',
    },
    {
        name: 'Arduino UNO R3 DIP (kèm cáp)',
        src: 'assets/arduino-mega2560-r3.jpg',
        reducedPrice: '110.000₫',
        originalPrice: '145.000₫',
    },
    {
        name: 'Arduino UNO R3 SMD (kèm cáp)',
        src: 'assets/arduino-mega2560-r3.jpg',
        reducedPrice: '80.000₫',
        originalPrice: ' ',
    },
    {
        name: 'Arduino nano V3.0 ATmega328P',
        src: 'assets/arduino-nano.jpg',
        reducedPrice: '59.000₫',
        originalPrice: '65.000₫',
    },
    {
        name: 'Arduino WeMos D1 R2 WiFi UNO',
        src: 'assets/arduino-wemos-d1-r2-wifi-uno.jpg',
        reducedPrice: '98.000₫',
        originalPrice: '125.000₫',
    },
    {
        name: 'Module thu phát wifi ESP8266 12F',
        src: 'assets/esp8266.jpg',
        reducedPrice: '45.000₫',
        originalPrice: '68.000₫',
    },
    {
        name: 'Mạch giảm áp DC LM2596 3A',
        src: 'assets/lm2596.jpg',
        reducedPrice: '15.000₫',
        originalPrice: ' ₫',
    },
    {
        name: 'Mạch nguồn tăng áp DC XL6009',
        src: 'assets/mach-nguon-xl6009.jpg',
        reducedPrice: '25.000₫',
        originalPrice: ' ₫',
    },
]

const printItem = mapitems.map((item) => {
    return (<div class="product">
        <img src={item.src} alt="" />
        <p class="product-name">{item.name}</p>
        <p class="reduced-price">{item.reducedPrice}</p>
        <p class="original-price">{item.originalPrice}</p>
        <div class="buy-button">
            <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
            <p>Mua ngay</p>
        </div>
    </div>
    );
})
let x = document.getElementsByClassName('product-field');
x.innerHTML = printItem