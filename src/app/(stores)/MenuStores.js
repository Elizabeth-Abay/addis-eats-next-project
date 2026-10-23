import { create } from "zustand";

const useMenuStore = create(
    (set ,get) => {
        return {
            totalMenuItems : [],
            renderedMenuItems : [],

            setTotalMenuItems : (data) => {
                set(
                    () => {
                        return {
                            totalMenuItems : data,
                            renderedMenuItems : data
                        }
                    }
                ) 
            },
            setRenderedThings : (category) => {
                let rendered = [];

                let { totalMenuItems : data } = get()

                if (!data || !Array.isArray(data)) return;

                switch (category){
                    case 'wet':
                            rendered = data.filter(
                            (item) => item.category.toLowerCase().trim() === 'traditional stews & wat'
                            )
                            break
                    case 'tibs':
                        rendered = data.filter(
                            (item) => item.category.toLowerCase().trim() === 'tibs & grills'
                            )
                            break

                    case 'kitfo':
                        rendered = data.filter(
                            (item) => item.category.toLowerCase().trim() === 'raw & cured delicacies / kitfo'
                            )
                        break

                    case 'tsom':
                        rendered = data.filter(
                            (item) => item.category.toLowerCase().trim() === 'fasting & vegan / tsom'
                            )
                            break
                    case 'beverages':
                        rendered = data.filter(
                            (item) => item.category.toLowerCase().trim() === 'beverages & tej'
                            )
                            break
                        
                    default:
                        rendered = data
                }

                set(
                    state => {
                        return {
                            ...state , 
                            renderedMenuItems : rendered
                        }
                    }
                )
            } ,

            setSearchBarFilter : (name) => {
                const escapedInput = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const searchRegex = new RegExp(escapedInput, 'i');

                let { totalMenuItems : data } = get();
                // // // console.log("Rendering data from the name filter")
                let rendered = data.filter(
                    item => {
                        if(searchRegex.test(item.nameEn)) {
                            return item
                    }}
                )

                set(
                    state => {return {
                        ...state ,
                        renderedMenuItems : rendered
                    }}
                )
            }

        }
    }
)

export default useMenuStore;