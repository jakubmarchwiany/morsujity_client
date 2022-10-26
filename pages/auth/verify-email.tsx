import { useRouter } from "next/router";
import { useEffect } from "react";
import { postFetch } from "../../src/utils/fetches";

const DEV_API_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

function VerifyEmail() {
    const router = useRouter();
    const { token } = router.query;

    useEffect(() => {
        if (token) {
            postFetch<{ message: string }>({ token }, DEV_API_ENDPOINT + "/auth/verify-user-email")
                .then(({ message }) => {
                    router.push({
                        pathname: "/login",
                        query: { open: true, message, type: "success" },
                    });
                })
                .catch(({ message }) => {
                    router.push({
                        pathname: "/login",
                        query: { open: true, message, type: "error" },
                    });
                });
        } else {
            router.push({
                pathname: "/login",
                query: { open: true, message: "Brak tokena", type: "error" },
            });
        }
    });
}

export default VerifyEmail;
