import {
    Book,
    ExpandLess,
    ExpandMore,
    GroupAdd,
    Home,
    HowToReg,
    Login,
    Storefront,
} from "@mui/icons-material";
import { Button, Collapse, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import MyLinkButton from "../components/my/MyLinkButton";

interface NavigatorProps {
    closeMenu?: () => void;
}

const Navigator = ({ closeMenu }: NavigatorProps) => {
    const [open, setOpen] = useState(true);
    const router = useRouter();

    return (
        <Stack>
            <MyLinkButton
                text="Strona główna"
                href="/"
                isActive={router.pathname === "/"}
                size="large"
                Icon={Home}
                closeMenu={closeMenu}
            />
            <MyLinkButton
                text="Logowanie"
                href="/login"
                isActive={router.pathname === "/login"}
                size="large"
                Icon={Login}
                closeMenu={closeMenu}
            />
            <MyLinkButton
                text="Rejestracja"
                href="/register"
                isActive={router.pathname === "/register"}
                size="large"
                Icon={HowToReg}
                closeMenu={closeMenu}
            />

            <Button
                size="large"
                startIcon={<Book />}
                endIcon={open ? <ExpandLess /> : <ExpandMore />}
                onClick={() => {
                    setOpen(!open);
                }}
                sx={{ color: "secondary.contrastText" }}
            >
                Blog
            </Button>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Stack>
                    <MyLinkButton
                        text="O Aplikacja"
                        href="/blog/1"
                        isActive={router.pathname === "/blog/1"}
                        size="small"
                        closeMenu={closeMenu}
                    />
                    <MyLinkButton
                        text="+ / - Morsowania"
                        href="/blog/2"
                        isActive={router.pathname === "/blog/2"}
                        size="small"
                        closeMenu={closeMenu}
                    />
                    <MyLinkButton
                        text="Morsowanie ?"
                        href="/blog/3"
                        isActive={router.pathname === "/blog/3"}
                        size="small"
                        closeMenu={closeMenu}
                    />
                </Stack>
            </Collapse>
            <MyLinkButton
                text="Szukaj Grupy"
                href="/search"
                isActive={true}
                size="large"
                Icon={GroupAdd}
                closeMenu={closeMenu}
            />
            <MyLinkButton
                text="Sklep"
                href="/shop"
                isActive={true}
                size="large"
                closeMenu={close}
                Icon={Storefront}
            />
        </Stack>
    );
};
export default Navigator;
