import toast from "react-hot-toast";

const END_POINT = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getFetch<T>(
    url: string,
    options?: { customError?: boolean }
): Promise<T & { message: string }> {
    return new Promise((resolve, reject) => {
        const toastId = toast.loading("Ładowanie...");
        fetch(END_POINT + url, {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        })
            .then(async (response) => {
                const data = (await response.json()) as T & { message: string };
                if (response.ok) {
                    toast.success(data.message, { id: toastId });
                    resolve(data);
                } else {
                    toast.error(data.message, { id: toastId });
                    if (options?.customError) reject(data);
                }
            })
            .catch((error) => {
                toast.error(error.message, { id: toastId });
                if (options?.customError) reject(error);
            });
    });
}

export async function postFetch<T>(
    body: object,
    url: string,
    options?: { customError?: boolean }
): Promise<T & { message: string }> {
    return new Promise((resolve, reject) => {
        const toastId = toast.loading("Ładowanie...");
        fetch(END_POINT + url, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
            .then(async (response) => {
                const data = (await response.json()) as T & { message: string };
                if (response.ok) {
                    toast.success(data.message, { id: toastId });
                    resolve(data);
                } else {
                    toast.error(data.message, { id: toastId });
                    if (options?.customError) reject(data);
                }
            })
            .catch((error) => {
                toast.error(error.message, { id: toastId });
                if (options?.customError) reject(error);
            });
    });
}
