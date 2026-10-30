'use server'
import { cookies } from 'next/headers';
import crypto from 'node:crypto';
import fs from 'fs/promises';
import path from 'node:path';
import currentSessions from '../data/sessions'

import { supabase } from '../clients/supabaseClient';


export default async function createSession({ givenIdentifier, role }) {
    try {
        const uniqueId = crypto.randomUUID();

        // Save session in Supabase sessions table (replaces fs.writeFile)
        const { error } = await supabase
            .from('sessions')
            .insert([{
                id: uniqueId,
                user_id: givenIdentifier,
                role: role
            }]);

        if (error) throw error;

        let sessionInfo = {
            uniqueId,
            role,
            userId: givenIdentifier
        };

        let cookieSend = await cookies();
        cookieSend.set(
            'sessionInfo', 
            JSON.stringify(sessionInfo), 
            {
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 // 1 day
            }
        );

        return { success: true };
    } catch (error) {
        return {
            success: false,
            reason: `Error while setting up the session , ${error.message}`
        };
    }
}