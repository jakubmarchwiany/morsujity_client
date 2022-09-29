import { Box, Stack, Typography } from "@mui/material";
import MyLinkButton from "../components/my/MyLinkButton";

function Footer() {
  return (
    <Stack
      bgcolor={"primary.main"}
      direction="row"
      justifyContent="space-around"
      alignItems={"center"}
    >
      <Typography sx={{ color: "secondary.main" }}>
        Chełmscy emeryci {new Date().getFullYear()}
      </Typography>
      <Box>
        <MyLinkButton
          isActive={false}
          size={"small"}
          href="/statut"
          text="Statut"
          textColor="white"
        />
        <MyLinkButton
          isActive={false}
          size={"small"}
          href="/contact"
          text="Kontakt"
          textColor="white"
        />
      </Box>
    </Stack>
  );
}
export default Footer;
