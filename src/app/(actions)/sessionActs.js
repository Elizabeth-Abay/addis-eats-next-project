'use server'
import { cookies } from 'next/headers';
import crypto from 'node:crypto';
import fs from 'fs/promises';
import path from 'node:path';
import currentSessions from '../data/sessions.json'

const filePath = path.join(process.cwd(), 'src/app/data/sessions.json');


// this is called from a server action so it is ok for it not to have second validation
export default async function createSession({givenIdentifier , role }) {
    // fetch the current sessions and then update that

    try { 
        // ! why is this not working
        // let currentSessions = await fetch('../data/sessions.json');
        
        // sessions need to be identified first - uuid shld be attached to the sessions
        // the session info is what wld be stored in the cookie
        // sessions - [ { id : { sessionExpiryTime , userIdentifier - user specific routes , role  }}]
    
        
        // Generate a random UUID
        const uniqueId = crypto.randomUUID();
    
        let sessionInfo = {
            uniqueId,
            role,
            userId : givenIdentifier
        }
    
        let newSessions = [
            ...currentSessions , sessionInfo
        ]
    
        await fs.writeFile(
            filePath , JSON.stringify(newSessions)
        )


        let cookieSend = await cookies();


        cookieSend.set(
            'sessionInfo' , JSON.stringify(sessionInfo) , {
                httpOnly : true,
                sameSite : 'lax',
                maxAge : 60 * 60 * 24 // tomorrow
            }
        );

    
    } catch (error) {
        // // console.log(`Error while setting up the session , ${error}`)
        return {
            success : false,
            reason : `Error while setting up the session , ${error}`
        }
    }
}