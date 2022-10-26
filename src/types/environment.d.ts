export {};
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            //running type
            NEXT_PUBLIC_ENV: string;
            NEXT_PUBLIC_BACKEND_ENDPOINT: string;
        }
    }
}
