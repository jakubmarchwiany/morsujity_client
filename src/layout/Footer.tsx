import { Box, Stack, Typography } from "@mui/material";
import MyLinkButton from "../components/my/MyLinkButton";

function Footer() {
    return (
        <Stack bgcolor={"primary.main"} direction="row" alignItems={"center"} px={"10%"} justifyContent="space-between">
            <Typography sx={{ color: "primary.contrastText" }}>
                Morsujity {new Date().getFullYear()}
            </Typography>
            <Box>
                <MyLinkButton
                    text="Statut"
                    href="/statut"
                    isActive={false}
                    size="small"
                    textColor="primary.contrastText"
                />
                <MyLinkButton
                    text="Kontakt"
                    href="/contact"
                    isActive={false}
                    size={"small"}
                    textColor="primary.contrastText"
                />
            </Box>
        </Stack>
    );
}
export default Footer;
