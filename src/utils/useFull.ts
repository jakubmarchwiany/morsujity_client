import toast from "react-hot-toast";

const { NODE_ENV } = process.env;

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const sleeper = async (duration: number) => {
    const timer = toast(`${duration}`);
    for (let i = duration - 1; i >= 0; i--) {
        await sleep(1000);
        toast(`${i}`, { id: timer });
    }
};

export const logging = async () => {
    toast.success("Przekierowywanie", { duration: 4000 });
    await sleeper(3);
    if (NODE_ENV === "production") window.location.href = "https://user.morsujity.com";
};
