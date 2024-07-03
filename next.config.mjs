/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {  
        
        adminid: process.env.adminid,
        adminpassword: process.env.adminpassword
    
    },
};

export default nextConfig;
