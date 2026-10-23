import { create } from "zustand";

const useSpecialItemsChoice = create(
    (set ,get) => {
        return {
            totalSpecialItems : [],
            renderedSpecialItems : [],

            setTotalSpecialItems : (data) => {
                set(
                    () => {
                        return {
                            totalSpecialItems : data,
                            renderedSpecialItems : data
                        }
                    }
                ) 
            },
            setRenderedThings : (filter) => {
                let filteredData = [];

                let { totalSpecialItems : data } = get()

                switch (filter.toLowerCase()){
                    case 'wat':
                        filteredData = data.filter(
                            (item) => item.category.toLowerCase().trim() === 'traditional stews & wat'
                        )
                        break
                    case 'tibs':
                        filteredData = data.filter(
                            (item) => item.category.toLowerCase().trim() === 'tibs & grills'
                        )
                        break
                    case 'raw':
                        filteredData = data.filter(
                            (item) => item.category.toLowerCase().trim() === 'raw & cured delicacies / kitfo'
                        )
                        break
                    case 'tsom':
                        filteredData = data.filter(
                            (item) => item.category.toLowerCase().trim() === 'fasting & vegan / tsom'
                        )
                        break
                    case 'beverage':
                        filteredData = data.filter(
                            (item) => item.category.toLowerCase().trim() === 'beverages & tej'
                        )
                        break
                    default:
                        filteredData = data
                }

                set(
                    state => {
                        return {
                            ...state , 
                            renderedSpecialItems : filteredData
                        }
                    }
                )
            } 
        }
    }
)

export default useSpecialItemsChoice;