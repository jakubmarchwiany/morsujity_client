import {
  Book,
  ExpandLess,
  ExpandMore,
  GroupAdd,
  HowToReg,
  Login,
  Storefront,
  Web,
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
          color: "secondary.contrastText",
        }}
      >
        Blog
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack pl={2}>
          <MyLinkButton
            px={2}
            isActive={router.pathname === "/blog/1"}
            href="/blog/1"
            closeMenu={closeMenu}
            text="O Aplikacja"
          />
          <MyLinkButton
            px={2}
            isActive={router.pathname === "/blog/2"}
            href="/blog/2"
            closeMenu={closeMenu}
            text="+ / - Morsowania"
          />
          <MyLinkButton
            px={2}
            isActive={router.pathname === "/blog/3"}
            href="/blog/3"
            closeMenu={closeMenu}
            text="Morsowanie ?"
          />
        </Stack>
      </Collapse>
      <MyLinkButton
        px={2}
        size="large"
        isActive={router.pathname === "/search"}
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
    </Stack>
  );
};
export default Navigator;
