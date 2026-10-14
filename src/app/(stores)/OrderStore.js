// context vs zustand
import { create } from "zustand";

const useOrderStore = create(
    (set , get) => {
        return {
            recipientContact : { name : '' , phone : ''},
            deliveryLocation : { 
                subCity : '', houseNo : '' , landMark : ''
            } ,
            paymentMethod : {
                chosenType : ''  , information : ''
            },
            setReceipientInfo : ({fullName, phone}) => {
                let { recipientContact } = get()
                set(
                    state => {
                        return {
                            ...state,
                            recipientContact : {name : fullName , phone}
                        }
                    }
                )

            },
            setDeliveryDestination :({  subCity ,houseNo , landmark  }) => {
                set(
                    state => {
                        return {
                            ...state,
                            deliveryLocation : { 
                                subCity , houseNo  , landMark : landmark
                            }
                        }
                    }
                )
            },
            setPaymentMethod : ({ name , value } ) => {
                set(
                    state => {
                        return {
                            ...state,
                            paymentMethod : {
                                chosenType : name,
                                information : value
                            }
                        }
                    }
                )
            }

        }
    }
)


export default useOrderStore;