'use server'

import fs from "node:fs";
import { redirect } from 'next/navigation';
import hashInfo from "../(utils)/hashing";
import { adminPhoneNumber, kitchenPhoneNumber } from "../(constants)/variable";
import createSession from "./sessionActs";


let checkUserExists = async (given) => {
    // we will have to loop through the users 
    // server fetch 
    let users;
    try {
            users = await fetch('../(data)/users.json' , {next : { revalidate : 1200}});
            // since it will cache the data I want to revalidate the data every 20 minutes
        
    } catch (error) {
        throw error;
    }
    // return a boolean
    // in the users it is an object key - maybe phone / email
    // loop through the keys and then return the password
    let userIdentifiers = Array.from(Object.keys(users))
    let userFound = userIdentifiers.find(key => key.toLowerCase() === given.toLowerCase())
    
    if (userFound) return {
        success : true,
        found : true,
        data : userFound,
        users 
    }

    return {
        success : true,
        found : false
    }

    
}


// this are server actions used for authentication
let signUp =  async (formData) => {
        console.log('Processing sign up in the server');
        console.log(formData)
        // if the user is there then return , else create and set up the user
        let email = formData.get('email');
        let phone = formData.get('phone');
        let password = formData.get('password');
        let name = formData.get('name')

        let sentInfo = email ? email : phone;
        let role = 
        phone 
        ?
            (phone === adminPhoneNumber) ? 'admin' :
            (phone === kitchenPhoneNumber) ? 'kitchen' : 'user'
        :
            'user';
        

        try {
                let isUserThere = await checkUserExists(sentInfo)
            
                // using useServerAction to hook up the client's form to the state action
                if (isUserThere.found) {
                    return {
                        success: false,
                        reason: 'try logging into your account' // this is just for dev
                    }
                }
            
                // else create the user object and then set it up in the users.json
            
                // when they sign up check and assign them roles to have
            
                let newUsers = [...isUserThere.users,
                    {
                        [sentInfo]: {
                            password: hashInfo(password), // hash the password
                            name,
                            role
                        }
                    }
                ]
            
            
                // writeFile receives strings as input
                await fs.writeFile('../(data)/users.json', JSON.stringify(
                    newUsers
                ))

                await createSession({givenIdentifier : sentInfo , role })
                
            

                // to the form this is what u return and it will redirect them
                return {
                    success : true,
                    name
                    // the client shld have the name saved in the localStorage 
                    // and push the user to the / - specials
                }
        } catch (err) {
            console.log(`Error happened during sign up ${err}`)
            return {
                success : false,
                reason :`Error happened during sign up ${err}`
            }
            
        }
}

let logIn= async (formData) => {
    // u just check if the password matches and that is it
    let email = formData.get('email');
    let phone = formData.get('phone');
    let password = formData.get('password');

    let sentInfo = email ? email : phone;

    try {
        let user = await checkUserExists(sentInfo);
    
        if (!user.found){
            return {
                success: false,
                reason: 'try sign up' // this is just for dev
            }
        }
    
        // else the user is there 
        let { data } = user;
        if (data.password === password) {
            // then that is the user create the session
            // the createSession will put in the cookies
            await createSession({givenIdentifier : sentInfo , role : data.role });

        

            return {
                success : true,
                name : data.name
                // session : newSession the session data is set by the cookie
            }
            
        } else{
            return {
                success : false,
                reason : 'Password mismatch'
            }
        }
    } catch (error) {
        console.log(`Error during log in ${error}`)
        return {
            success : false,
            reason : `Error during log in ${error}`
        }
    }


}


export { signUp , logIn}
