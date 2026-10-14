export default function OrderBox({item}){

    let { id , name , amount , price , customOrder , image} = item

    let { injera , spiceLevel , sideAccents } = customOrder;

    let toyKey = 1;

    return (
        <div className="cart-card">
            <div className="cart-card-body">
            {/* Left: Image with Spicy Badge */}
                <div className="cart-img-wrapper">
                    <img
                    src={image || "https://via.placeholder.com/100"}
                    alt={name}
                    className="cart-img"
                    />
                    {spiceLevel && <span className="cart-badge">spiceLevel {spiceLevel}</span>}
                </div>

                {/* Right Top: Title, Subtext, Delete Icon */}
                <div className="cart-info">
                    <div className="cart-header">
                    <h3 className="cart-title">{name}</h3>
                    <h3 className="cart-title">{amount}</h3>
                    </div>

                    <p className="cart-subtext"> Injera - {injera}</p>
                    <p className="cart-subtext"> Side Accents</p>
                    {
                        sideAccents?.map(
                            item => <p key={toyKey++} className="cart-subtext">{item}</p>
                        )
                    }
                </div>
            </div>

            {/* Bottom Row: Price & Quantity Pill */}
            <div className="cart-card-footer">
                <div className="cart-price">ETB {price}</div>
                
            </div>
        </div>
    );

}