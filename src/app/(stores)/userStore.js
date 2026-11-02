import { create } from "zustand";

const userStore = create(
    (set , get) => {
        return { 
            userName : 'User' ,
            role : 'user',
            setUserName : (userName) => {
                set(
                    state => {
                        return {
                        ...state , userName : userName
                    }}
                )
            },
            setRole : (role) => {
                set(
                    state => {
                        return {
                        ...state , role : role
                    }}
                )
            },
            logOut : () => {
                set(
                    state => { return {
                        ...state ,
                        role : "user",
                        userName : "User"

                    }}
                )
            }
        }
    }
)


export default userStore;