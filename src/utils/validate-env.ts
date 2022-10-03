import { cleanEnv, str } from "envalid";

function validateEnv() {
  cleanEnv(process.env, {
    NEXT_PUBLIC_ENV: str(),
    NEXT_PUBLIC_DEV_API_ENDPOINT: str(),
  });
}
export default validateEnv;
