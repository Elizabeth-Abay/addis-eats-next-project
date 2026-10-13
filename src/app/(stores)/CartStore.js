// u dont need jsx bc this is not part of the component tree
import { create } from "zustand";
// this create function creates the state and all its updater functions 


const normalizeCustomOrder = (obj) => {
    return Object.keys(obj)
        .sort()
        .reduce((acc, key) => {
        const val = obj[key];
        // Strip whitespace and lower-case strings; leave numbers/booleans as-is
        acc[key] = typeof val === "string" ? val.trim().toLowerCase() : val;
        return acc;
        }, {});
};


const safeStringify = (obj) => {
    if (typeof obj !== "object" || obj === null) return obj;

    // sort the object with its keys sorted and values normalized
    return JSON.stringify(normalizeCustomOrder(obj));
}


const useCartStore = create(
    // create takes in a function with set as its arg
    // set is used to set the state
    (set , get) => {
        // the function returns the object containing the states and their updaters
        // set will set up their state and get will get the variables
        return { 
            total : 0 ,
            cart : [
            // { id , name , amount , price , customOrder }
            ] ,
            grandTotal : 0,
            deliveryFee : 0,
            // we will also have the updator functions here
            addItem : (dish) => {
                let added = false
                let { id , name , amount , price , customOrder} = dish
                //console.log('adding items to cart')
                //console.log({ id , name , amount , price , customOrder})
                // the price wld need to include the custom ordered items as well
                let totalPriceAdded = Number(amount) * Number(price);


                let safeCustomOrder  = safeStringify(customOrder)
                
                // we will update the orders part in the cart
                // search for the object in the cart
                // if addded then update that in place

                let { cart , total , grandTotal } = get()

                let final = cart.map(
                    (item) => {
                        if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                                // means add the amount only
                                added = true
                                return { ...item ,amount : Number(item.amount) + amount }
                        }

                        return item;
                    }
                )

                let newTotalPrice = Number(total) + totalPriceAdded
                let newGrandTotal = Number(grandTotal) + totalPriceAdded

                // we use set to set the step
                set(
                    state =>{
                        return {
                            ...state,
                            total : Number(newTotalPrice),
                            cart : added ? final : [...cart , { id , name , amount , price , customOrder }],
                            grandTotal : Number(newGrandTotal) 
                            // the difference between total and grandTotal - is grandTotal will include the delivery fee
                    }}
                )
                

            },
            removeItem : (dish) => {
                let {id , customOrder} = dish;

                let safeCustomOrder  = safeStringify(customOrder);

                // cart will be obtained from the parent scope
                let { cart , total , grandTotal } = get()
        
                let priceReduced = 0;

                cart.forEach(
                    item => {
                        if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                            // when removed we gotta see the total price of the item removed
                            // 
                            priceReduced = Number(item.amount) * Number(item.price);
                        }
                    }
                )

                let newTotalPrice = Number(total) - priceReduced;
                let newGrandTotal = Number(grandTotal) - priceReduced;

                set(
                    state => {
                        return {
                            ...state,
                            total : Number(newTotalPrice),
                            grandTotal : Number(newGrandTotal),
                            cart : cart.filter(
                                // the id wld be different or the custom order wld be different
                                item => !(item.id === id && safeStringify(item.customOrder) === safeCustomOrder)
                            )
                        }
                    }
                )

            },
            updateCart : (dish)=>{
                let  { id , customOrder , amount , price} = dish;
                //console.log('updating the cart state');
                let newPrice = Number(amount) * Number(price);
                let oldPrice = 0

                let { cart , total , grandTotal } = get()

                let safeCustomOrder  =safeStringify(customOrder);

                // update the total price and also the
                // subtract the total amount and then add the new

                
                // * there are 3 prices 
                // * the cart item's price
                // * the total price without the delivery fee
                // * the grand total that the person will get charged with
                // * so the plus will change the total and grandTotal
                
                cart.forEach(
                    item => {
                        if (item.id === id && safeStringify(item.customOrder) == safeCustomOrder){
                            // we will find the difference between the price
                            oldPrice = Number(item.amount) * Number(item.price);
                            //console.log('Old price is updated');
                            //console.log(oldPrice)
                        }
                    }
                )

                let newFinalPrice = Number(total) - oldPrice + newPrice
                //console.log('Calculating the new Final price');
                //console.log(newFinalPrice)
                let newGrandTotal = Number(grandTotal) - oldPrice + newPrice

                set(
                    state => {
                        return {
                            ...state,
                            total : Number(newFinalPrice),
                            grandTotal : Number(newGrandTotal),
                            cart : cart.map(
                                // the id wld be different or the custom order wld be different
                                item => {
                                    if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                                        return {...item , amount : amount , price : price}
                                    }

                                    return item; 
                                }
                            )
                        }
                    }
                )
            },
            clearCart : ()=>{
                set(
                    state => {
                        return {
                            ...state,
                            total : 0,
                            grandTotal : 0,
                            cart : []
                        }
                    }
                    
                )
            },
            updateGrandTotal : (info)=>{
                let {amount , percentage , sign} = info
                amount = Number(amount);
                sign = sign.toLowerCase().trim();
                percentage = percentage || false; // if it is percentage then set this true

                switch (sign){
                    case 'minus':
                        set(
                            state => {
                                return {
                                    ...state ,
                                    grandTotal : percentage ? Number(state.grandTotal - state.grandTotal * amount) :  Number(state.grandTotal - amount)
                                }
                            }
                        )

                        break;
                        
                    case 'plus':
                        set(
                            state => {
                                return {
                                    ...state ,
                                    grandTotal : percentage ? Number(state.grandTotal + state.grandTotal * amount) :  Number(state.grandTotal + amount)
                                }
                            }
                        )
                        break;
                }

                

            },
            setDeliveryFee : (deliveryFee) => {
                set(
                    state => {
                        return {
                            ...state ,
                            grandTotal : Number(state.grandTotal + deliveryFee),
                            deliveryFee : Number(deliveryFee)
                        }
                    }
                )
            }

        }

    }
)


export default useCartStore;