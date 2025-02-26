interface ImageKitConfig {
    publicKey: string;
    urlEndpoint: string;
    privateKey: string;
}

interface UpstashConfig {
    redisUrl: string;
    redisToken: string;
    qstashUrl: string;
    qstashToken: string;
}

interface EmailJSConfig {
    serviceId: string;
    templateId: string;
    userId: string;
}

interface EnvConfig {
    apiEndpoint: string;
    prodApiEndpoint?: string;
    imagekit: ImageKitConfig;
    databaseUrl: string;
    upstash: UpstashConfig;
    emailjs: EmailJSConfig;
}

const config: { env: EnvConfig } = {
    env: {
        apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
        prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT,
        imagekit: {
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
        },
        databaseUrl: process.env.DATABASE_URL!,
        upstash: {
            redisUrl: process.env.UPSTASH_REDIS_URL!,
            redisToken: process.env.UPSTASH_REDIS_TOKEN!,
            qstashUrl: process.env.QSTASH_URL!,
            qstashToken: process.env.QSTASH_TOKEN!,
        },
        emailjs: {
            serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
        },
    },
};

export default config;
