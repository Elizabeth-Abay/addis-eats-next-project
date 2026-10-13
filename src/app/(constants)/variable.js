export const RESTAURANT_NAME =  'addis-eats'

export const RESERVER_FOR_COFFEE = 120
export const RESERVE_FOR_FEAST = 1280


export const PRICE_OF_INJERA = 40

export const PRICE_OF_INSULATED_CLAY_BOX = 40


export let PROMO_CODE_ARRAY = [ '1111' , '2222' , '3333' , '4444']

export const SUB_CITIES = {
    'Addis Ketema' : 120,
    'Akaki Kaliti' : 170,
    'Arada' : 80 ,
    'Bole' : 0,
    'Gulele' : 60,
    'Kirkos' : 0 ,
    'Kolfe Keranio' : 100,
    'Lemi Kura' : 200,
    'Lideta' : 50,
    'Nifas Silk-Lafto' : 30,
    'Yeka' : 50
}

export const paymentMethods = [
    // an array of payment method objects
    // { name , logo , description , requiredElts })
    // let { text , placeholder } = requiredElts;
    {
        id : 1,
        name : "Telebirr",
        logo : "",
        description : "Instant app push & SMS confirmation",
        requiredElts : {
            text : "Telebirr registered Mobile No.",
            placeholder : "+251 9-00-00-00-00"
        }
    } ,
    {
        id : 2,
        name : "CBE Birr",
        logo : "",
        description : "Commercial Bank of Ethiopia Direct Deposit",
        requiredElts : {
            text : "Account that pays",
            placeholder : "1000 -00-00-00-000"
        }
    } ,
    {
        id : 3,
        name : "Cash/Wireless POS",
        logo : "",
        description : "Rider carriers portable card terminal",
        requiredElts : {
            text : "Enter POS number",
            placeholder : "xyz"
        }
    } ,
    {
        id : 4,
        name : "Amole/Awash Birr",
        logo : "",
        description : "Awash Bank digital payment gateway",
        requiredElts : {
            text : "Account that pays",
            placeholder : "1000 -00-00-00-000"
        }
    } 
]


// when people want to change their side dishes they wld update this
export const sideAccentsPrice = {
    ayib : 0,
    gomen : 0,
    awaze : 0,
    extraEgg : 40 ,//  will add price to the cart
    tej : 350, // will add price
    bunna : 70 , // will add price
    timatimFitfit : 180 // will add price
}

export const SIDE_ACCENTS_CONFIG = [
    {
        id: "ayib",
        title: "Fresh Ayib Curd Cheese",
        description: "Cooling hand-churned buttermilk cottage cheese",
    },
    {
        id: "gomen",
        title: "Stewed Gomen Greens",
        description: "Braised young highland collards with shallots",
    },
    {
        id: "awaze",
        title: "House Awaze Paste",
        description: "Zesty berbere dip with aged honey wine infusion",
    },
    {
        id: "extraEgg",
        title: "Extra Braised Egg",
        description: "Whole slow-cooked farm egg steeped in sauce",
    },
    {
        id: "tej",
        title: "Honey Wine (Tej)",
        description: "Authentic Ethiopian fermented honey wine",
    },
    {
        id: "bunna",
        title: "Ethiopian Coffee (Bunna)",
        description: "Freshly roasted traditional ceremonial coffee",
    },
    {
        id: "timatimFitfit",
        title: "Timatim Fitfit",
        description: "Tangy tomato, jalapeno and shredded injera salad",
    },
];