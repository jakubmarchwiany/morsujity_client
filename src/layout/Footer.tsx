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
      <Typography sx={{ color: "primary.contrastText" }}>
        Chełmscy emeryci {new Date().getFullYear()}
      </Typography>
      <Box>
        <MyLinkButton
          isActive={false}
          size={"small"}
          href="/statut"
          text="Statut"
          textColor="primary.contrastText"
        />
        <MyLinkButton
          isActive={false}
          size={"small"}
          href="/contact"
          text="Kontakt"
          textColor="primary.contrastText"
        />
      </Box>
    </Stack>
  );
}
export default Footer;
