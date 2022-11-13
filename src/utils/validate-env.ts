import { cleanEnv, str } from "envalid";

function validateEnv() {
    cleanEnv(process.env, {
        NEXT_PUBLIC_ENV: str(),
        NEXT_PUBLIC_USER_APP_URL: str(),
        NEXT_PUBLIC_BACKEND_URL: str(),
    });
}
export default validateEnv;
