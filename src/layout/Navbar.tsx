import AcUnitIcon from "@mui/icons-material/AcUnit";
import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  PaletteMode,
  Stack,
  Theme,
  Tooltip,
  useMediaQuery,
  useTheme
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { memo, useState } from "react";
import Navigator from "./Navigator";

interface NavbarProps {
  mode: PaletteMode;
  switchMode: () => void;
}

function Navbar({ mode, switchMode }: NavbarProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const theme = useTheme<Theme>();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        bgcolor: "primary.main",
        top: "auto",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignContent: "center" }}>
        <Stack direction="row" alignItems="center">
          <AcUnitIcon
            fontSize="large"
            sx={{
              mr: 2,
              color: "#fff",
            }}
          />
          <Link href="/">
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
              }}
            >
              Morsujity
            </Typography>
          </Link>
        </Stack>

        {isSmallScreen && (
          <Box>
            <Tooltip title="Nawigator">
              <IconButton
                id="demo-positioned-button"
                aria-expanded={open ? "true" : undefined}
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Navigator
                mode={mode}
                switchMode={switchMode}
                closeMenu={handleCloseMenu}
              />
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default memo(Navbar);
