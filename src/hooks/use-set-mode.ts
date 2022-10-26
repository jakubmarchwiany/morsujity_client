import { PaletteMode, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export default function useSetMode() {
    const [mode, setMode] = useState<PaletteMode>("light");

    const switchMode = () => {
        if (mode === "light") {
            setMode("dark");
            localStorage.setItem("mode", JSON.stringify("dark"));
        } else {
            setMode("light");
            localStorage.setItem("mode", JSON.stringify("light"));
        }
    };

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    useEffect(() => {
        let mode: string | null = localStorage.getItem("mode");
        if (mode !== null) {
            mode = <string>JSON.parse(mode);
            if (mode === "dark") setMode(mode);
        } else {
            mode = prefersDarkMode ? "dark" : "light";
            if (mode === "dark") setMode(mode);
        }
    }, []);

    return [mode, switchMode] as const;
}
