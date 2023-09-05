import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { postFetch } from "utils/fetches";
import { sleeper } from "utils/useFull";

function VerifyEmail() {
    const router = useRouter();
    const { token } = router.query;
    useEffect(() => {
        if (token) {
            postFetch<never>({ token }, "/auth/verify-user-email", {
                customError: true,
            })
                .then(async () => {
                    await sleeper(2);
                    router.push("/login");
                })
                .catch(async () => {
                    await sleeper(2);
                    router.push("/login");
                });
        } else {
            toast.error("Nie znaleziono tokenu");
            sleeper(2).then(() => router.push("/login"));
        }
    }, [token]);
}

export default VerifyEmail;
