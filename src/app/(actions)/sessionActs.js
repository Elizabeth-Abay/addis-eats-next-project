'use server'
import { cookies } from 'next/headers';
import crypto from 'node:crypto';
import fs from 'node:fs';

export default async function createSession({givenIdentifier , role }) {
    // fetch the current sessions and then update that

    try {
        let currentSessions = fetch('../(data)/sessions.json');
        const sessionExpiry = new Date();
    
        // 2. Add 1 to the current day
        sessionExpiry.setDate(tomorrow.getDate() + 1);
        
    
        // sessions need to be identified first - uuid shld be attached to the sessions
        // the session info is what wld be stored in the cookie
        // sessions - [ { id : { sessionExpiryTime , userIdentifier - user specific routes , role  }}]
    
        
        // Generate a random UUID
        const uniqueId = crypto.randomUUID();
    
        let sessionInfo = {
            uniqueId,
            sessionExpiry,
            role,
            userId : givenIdentifier
        }
    
        let newSessions = [
            ...currentSessions , sessionInfo
        ]
    
        await fs.writeFile(
            '../(data)/sessions.json' , JSON.stringify(newSessions)
        )


        let cookieSend = await cookies();
        cookieSend.set(
            sessionInfo
        )

    
    } catch (error) {
        console.log(`Error while setting up the session , ${error}`)
        return {
            success : false,
            reason : `Error while setting up the session , ${error}`
        }
    }
}