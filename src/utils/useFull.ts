import toast from "react-hot-toast";

const { NODE_ENV } = process.env;

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const sleeper = async (duration: number) => {
    const timer = toast(`${duration}`, { duration: duration * 1000 });
    for (let i = duration; i >= 0; i--) {
        toast(`${i}`, { id: timer });
        await sleep(1000);
    }
    toast.remove(timer);
};

export const logging = async () => {
    toast.success("Przekierowywanie", { duration: 2000 });
    await sleeper(2);
    if (NODE_ENV === "production") window.location.href = "https://user.morsujity.com";
};
