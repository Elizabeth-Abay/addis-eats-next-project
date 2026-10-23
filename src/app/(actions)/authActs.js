'use server'

import fs from "fs/promises";
import path from "path";
// import { redirect } from 'next/navigation';
import hashInfo from "../(utils)/hashing";
import { adminPhoneNumber, kitchenPhoneNumber } from "../(constants)/variable";
import createSession from "./sessionActs";
import users from '../data/users.json';
import currentSessions from '../data/sessions.json';
import { headers } from "next/headers";

const filePath = path.join(
    "C:/Users/HP/OneDrive/Desktop/Addis-Eats-final/addis-eats/src/app/data", 
    "users.json"
);


const sessionFilePath =  path.join(
    "C:/Users/HP/OneDrive/Desktop/Addis-Eats-final/addis-eats/src/app/data", 
    "sessions.json"
);

// // console.log(`filePath globally is ${filePath}`)



let checkUserExists = async (given) => {
    // checkUserExists is used both for sign up and login

    // users is an array of objects
    let userFound = users.find(userObj => {
        // user obj - key
        let userId = Object.keys(userObj)

        if (key.toLowerCase() === given.toLowerCase()){
            return userObj
        }
    })

    if (userFound) return {
        success : true,
        found : true,
        data : userFound,
        users 
    }

    // if user is not found u have to add it
    return {
        success : true,
        found : false,
        users
    }

    
}




// this are server actions used for authentication
let signUp =  async (formData) => {

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

                // const filePath = path.join( __dirname, '../data/users.json');
            
                // // // console.log(`filePath is ${filePath}`)

                // // console.log('new users in the house');
                // // console.log(newUsers)

                // writeFile receives strings as input
                await fs.writeFile(
                    filePath,
                    JSON.stringify(
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
        } catch (error) {
            // // console.log(`erroror happened during sign up ${err}`)
            return {
                success : false,
                reason :`Error happened during sign up ${error}`
            }
            
        }
}

let logIn= async (formData) => {
    // u just check if the password matches and that is it
    let email = formData.get('email');
    let phone = formData.get('phone');
    let password = formData.get('password');
    // this is 

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

        let hashedUserLogInPassword = await hashInfo(data.password)
        if (hashedUserLogInPassword === password) {
            // then that is the user create the session
            // the createSession will put in the cookies
            await createSession({givenIdentifier : sentInfo , role : data.role });

        

            return {
                success : true,
                name : data.name
                // session : newSession the session data is set by the cookie
            }
            
        } else{
            console.log("User couldn't log in")
            return {
                success : false,
                reason : 'Password mismatch'
            }
        }
    } catch (error) {
        // // console.log(`Error during log in ${error}`)
        return {
            success : false,
            reason : `Error during log in ${error}`
        }
    }


}


let logOut = async () => {
    // when we get the session then we will need 
    // read the cookies
    console.log("logging out the user")
    let header = await headers();

    console.log('header hopefully from the middleware');
    console.log(Object.fromEntries(header.entries()))

    let cookieId = header.get('cookieId');

    // read the sessions and then remove that

    let updatedSessions = currentSessions.filter(
        sessionInfo => sessionInfo['uniqueId'] !== cookieId
    )

    try {
        await fs.writeFile(
            sessionFilePath,
            JSON.stringify(
            updatedSessions
        ))
    
    
        return {
            success : true
        }
    
    } catch (error) {
        console.log("Error while logging out" , error);
        return {
            success : false
        }
        
    }




    


}


export { signUp , logIn , logOut}
