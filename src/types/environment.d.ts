export {};
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_ENV: string;
            NEXT_PUBLIC_USER_APP_URL: string;
            NEXT_PUBLIC_BACKEND_URL: string;
        }
    }
}
