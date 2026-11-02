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



let checkUserExists = async (given) => {
    let { data: users, error } = await supabase
        .from('users')
        .select('*')
        .ilike('identifier', given); // Case-insensitive check

    console.log("users from check user exists")
    console.log(users)

    if (error || !users || users?.length === 0) {
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
        // console.log("Error while logging out", error);
        return { success: false };
    }
};

export { signUp, logIn, logOut };


// export { signUp , logIn , logOut}
