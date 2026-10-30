'use server'

import { supabase } from "../clients/supabaseClient";
// import { redirect } from 'next/navigation';
import hashInfo from "../(utils)/hashing";
import { adminPhoneNumber, kitchenPhoneNumber } from "../(constants)/variable";
import createSession from "./sessionActs";
import users from '../data/users';
import currentSessions from '../data/sessions';
import { cookies } from "next/headers";
import 'path';

// path.join(
//     "C:/Users/HP/OneDrive/Desktop/Addis-Eats-final/addis-eats/src/app/data", 
//     "users.json"
// );

// const filePath = path.join(process.cwd(), 'src/app/data/users.json');
// console.log('file path updated')
// console.log(filePath)


// const sessionFilePath =  path.join(process.cwd(), 'src/app/data/sessions.json');
    

// // // console.log(`filePath globally is ${filePath}`)



// let checkUserExists = async (given) => {
//     // checkUserExists is used both for sign up and login

//     // users is an array of objects
//     let userFound = users.find(userObj => {
//         // user obj - key
//         let userId = Object.keys(userObj)


//         let key = userId[0]

//         if (key.toLowerCase() === given.toLowerCase()){
//             return userObj
//         }
//     })


//     if (userFound) return {
//         success : true,
//         found : true,
//         data : userFound,
//         users 
//     }

//     // if user is not found u have to add it
//     return {
//         success : true,
//         found : false,
//         users
//     }

    
// }


// // the issue here is the cookie handling part 
// // shld be handled by the middleware and not here
// // ! refactoring



// // this are server actions used for authentication
// let signUp =  async (formData) => {

//         // if the user is there then return , else create and set up the user
//         let email = formData.get('email');
//         let phone = formData.get('phone');
//         let password = formData.get('password');
//         let name = formData.get('name')


//         console.log("sign up information");
//         console.log(formData)

//         let sentInfo = email ? email : phone;
//         let role = 
//             phone 
//             ?
//                 (phone === adminPhoneNumber) ? 'admin' :
//                 (phone === kitchenPhoneNumber) ? 'kitchen' : 'user'
//             :
//                 'user';

        
        

//         try {
//                 let isUserThere = await checkUserExists(sentInfo)

            
            
//                 // using useServerAction to hook up the client's form to the state action
//                 if (isUserThere.found) {
//                     console.log("User already found")
//                     return {
//                         success: false,
//                         reason: 'try logging into your account' // this is just for dev
//                     }
//                 }
            
//                 // else create the user object and then set it up in the users.json
            
//                 // when they sign up check and assign them roles to have
            
//                 let newUsers = [...isUserThere.users,
//                     {
//                         [sentInfo]: {
//                             password: hashInfo(password), // hash the password
//                             name,
//                             role
//                         }
//                     }
//                 ]


    
                
//                 // const filePath = path.join( __dirname, '../data/users.json');
            
//                 // // // console.log(`filePath is ${filePath}`)

//                 // // console.log('new users in the house');
//                 // // console.log(newUsers)

//                 // writeFile receives strings as input
//                 await fs.writeFile(
//                     filePath,
//                     JSON.stringify(
//                     newUsers
//                 ))


//                 console.log('user written to the file')

//                 console.log(newUsers)
//                 await createSession({givenIdentifier : sentInfo , role })
                
            

//                 // to the form this is what u return and it will redirect them
//                 return {
//                     success : true,
//                     name
//                     // the client shld have the name saved in the localStorage 
//                     // and push the user to the / - specials
//                 }
//         } catch (error) {
//             // // console.log(`erroror happened during sign up ${err}`)
//             return {
//                 success : false,
//                 reason :`Error happened during sign up ${error}`
//             }
            
//         }
// }

// let logIn= async (formData) => {
//     // u just check if the password matches and that is it
//     let email = formData.get('email');
//     let phone = formData.get('phone');
//     let password = formData.get('password');
//     // this is the password sent from the user
//     // hash that and compare it to the one saved in the database

//     console.log("log in info");
//     console.log(formData)

//     let sentInfo = email ? email : phone;

//     try {
//         let user = await checkUserExists(sentInfo);

//         console.log("response from checking out the user")
//         console.log(user)
    
//         if (!user.found){
//             return {
//                 success: false,
//                 reason: 'try sign up' // this is just for dev
//             }
//         }
    
//         // else the user is there 
//         let { data } = user;

//         console.log('user found')
//         console.log(data)

//         console.log("password");
//         console.log(data[sentInfo].password)

//         let checkAgainst = data[sentInfo].password
//         let hashedUserLogInPassword = hashInfo(password)
//         console.log('hashed user password');
//         console.log(hashedUserLogInPassword)
//         if (hashedUserLogInPassword === checkAgainst) {
//             console.log('password has matched')
//             // then that is the user create the session
//             // the createSession will put in the cookies
//             await createSession({givenIdentifier : sentInfo , role : data[sentInfo].role });

        

//             return {
//                 success : true,
//                 name : data[sentInfo].name
//                 // session : newSession the session data is set by the cookie
//             }
            
//         } else{
//             console.log("User couldn't log in")
//             return {
//                 success : false,
//                 reason : 'Password mismatch'
//             }
//         }
//     } catch (error) {
//         // // console.log(`Error during log in ${error}`)
//         return {
//             success : false,
//             reason : `Error during log in ${error}`
//         }
//     }


// }


// let logOut = async () => {
//     // when we get the session then we will need 
//     // read the cookies
//     let cookiesUser = await cookies()

//     // accessing the actual object
//     let actualCookieValue = JSON.parse(cookiesUser.get('sessionInfo')['value']);

//     let {uniqueId } = actualCookieValue

//     let updatedSessions = currentSessions.filter(
//         sessionInfo => {
            
//             if (sessionInfo['uniqueId'] != uniqueId) {
//                 console.log("found 1")
//                 return sessionInfo
//             } else {
//                 console.log("found a matcher")
//                 console.log(sessionInfo)
//             }
//         }
//     )


//     try {
//         await fs.writeFile(
//             sessionFilePath,
//             JSON.stringify(
//             updatedSessions
//         ))


    
//         return {
//             success : true
//         }
    
//     } catch (error) {
//         console.log("Error while logging out" , error);
//         return {
//             success : false
//         }
        
//     }




    


// }


let checkUserExists = async (given) => {
    let { data: users, error } = await supabase
        .from('users')
        .select('*')
        .ilike('identifier', given); // Case-insensitive check

    if (error || !users || users.length === 0) {
        return { success: true, found: false };
    }

    // Format data to match your app's expected structure if needed
    const userObj = {
        [users[0].identifier]: {
            password: users[0].password,
            name: users[0].name,
            role: users[0].role
        }
    };

    return {
        success: true,
        found: true,
        data: userObj,
    };
};

let signUp = async (formData) => {
    let email = formData.get('email');
    let phone = formData.get('phone');
    let password = formData.get('password');
    let name = formData.get('name');

    let sentInfo = email ? email : phone;
    let role = phone 
        ? (phone === adminPhoneNumber) ? 'admin' : (phone === kitchenPhoneNumber) ? 'kitchen' : 'user'
        : 'user';

    try {
        let isUserThere = await checkUserExists(sentInfo);

        if (isUserThere.found) {
            return {
                success: false,
                reason: 'try logging into your account'
            };
        }

        // Insert directly into Supabase (replaces fs.writeFile)
        const { error: insertError } = await supabase
            .from('users')
            .insert([{
                identifier: sentInfo,
                password: hashInfo(password),
                name,
                role
            }]);

        if (insertError) throw insertError;

        await createSession({ givenIdentifier: sentInfo, role });

        return { success: true, name , role };
    } catch (error) {
        return { success: false, reason: `Error happened during sign up ${error.message}` };
    }
};

let logIn = async (formData) => {
    let email = formData.get('email');
    let phone = formData.get('phone');
    let password = formData.get('password');
    let sentInfo = email ? email : phone;

    try {
        let userResult = await checkUserExists(sentInfo);

        if (!userResult.found) {
            return { success: false, reason: 'try sign up' };
        }

        let userData = userResult.data[sentInfo];
        let hashedUserLogInPassword = hashInfo(password);

        if (hashedUserLogInPassword === userData.password) {
            await createSession({ givenIdentifier: sentInfo, role: userData.role });
            return { success: true, name: userData.name , role : userData.role  };
        } else {
            return { success: false, reason: 'Password mismatch' };
        }
    } catch (error) {
        return { success: false, reason: `Error during log in ${error.message}` };
    }
};

let logOut = async () => {
    try {
        let cookiesUser = await cookies();
        let sessionCookie = cookiesUser.get('sessionInfo');
        
        if (sessionCookie) {
            let actualCookieValue = JSON.parse(sessionCookie.value);
            // Delete session from Supabase sessions table
            await supabase
                .from('sessions')
                .delete()
                .eq('unique_id', actualCookieValue.uniqueId);
        }

        return { success: true };
    } catch (error) {
        console.log("Error while logging out", error);
        return { success: false };
    }
};

export { signUp, logIn, logOut };


// export { signUp , logIn , logOut}
