import INTERESTING_PRODUCTS from './InterestingProduct'

const printItem = INTERESTING_PRODUCTS.map( (item) => {
    return(<div class="product">
                <img src={item.src} alt=""/>
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
printItem()