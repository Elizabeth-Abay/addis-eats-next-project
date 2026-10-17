import crypto from 'crypto';

export default function hashInfo(data){
    return crypto.createHash('md5').update(data).digest('hex');
}