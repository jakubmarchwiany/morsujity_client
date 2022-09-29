import {
  Book,
  DarkMode,
  ExpandLess,
  ExpandMore,
  GroupAdd,
  HowToReg,
  LightMode,
  Login,
  Storefront,
  Web
} from "@mui/icons-material";
import { Button, Collapse, PaletteMode, Stack, Switch } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import MyLinkButton from "../components/my/MyLinkButton";

interface NavigatorProps {
  mode: PaletteMode;
  switchMode: () => void;
  closeMenu?: () => void;
}

const Navigator = ({ mode, switchMode, closeMenu }: NavigatorProps) => {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  return (
    <Stack>
      <MyLinkButton
        px={2}
        size="large"
        isActive={router.pathname === "/"}
        href="/"
        closeMenu={closeMenu}
        text="Strona główna"
        Icon={Web}
      />
      <MyLinkButton
        px={2}
        size="large"
        isActive={router.pathname === "/login"}
        href="/login"
        closeMenu={closeMenu}
        text="Logowanie"
        Icon={Login}
      />
      <MyLinkButton
        px={2}
        size="large"
        isActive={router.pathname === "/register"}
        href="/register"
        closeMenu={closeMenu}
        text="Rejestracja"
        Icon={HowToReg}
      />
      <Button
        size="large"
        onClick={() => {
          setOpen(!open);
        }}
        startIcon={<Book fontSize="large" />}
        endIcon={open ? <ExpandLess /> : <ExpandMore />}
        sx={{
          pl: 2,
          justifyContent: "flex-start",
          color: "primary.contrastText",
        }}
      >
        Blog
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack pl={2}>
          <MyLinkButton
            px={2}
            isActive={router.pathname === "/blog"}
            href="/blog"
            closeMenu={closeMenu}
            text="O Aplikacja"
          />
          <MyLinkButton
            px={2}
            isActive={router.pathname === "/blog/2"}
            href="/blog"
            closeMenu={closeMenu}
            text="+ / - Morsowania"
          />
          <MyLinkButton
            px={2}
            isActive={router.pathname === "/blog/3"}
            href="/blog"
            closeMenu={closeMenu}
            text="Morsowanie ?"
          />
        </Stack>
      </Collapse>
      <MyLinkButton
        px={2}
        size="large"
        isActive={router.pathname === "/blog/3"}
        href="/search"
        closeMenu={closeMenu}
        text="Szukaj Grupy"
        Icon={GroupAdd}
      />
      <MyLinkButton
        px={2}
        size="large"
        isActive={true}
        href="/shop"
        closeMenu={close}
        text="Sklep"
        Icon={Storefront}
      />
      <Stack direction={"row"} justifyContent={"center"} mt={1}>
        {mode === "dark" ? (
          <DarkMode fontSize="large" />
        ) : (
          <LightMode fontSize="large" sx={{ color: "primary.main" }} />
        )}

        <Switch
          checked={mode === "dark" ? true : false}
          onChange={() => switchMode()}
        />
      </Stack>
    </Stack>
  );
};
export default Navigator;
