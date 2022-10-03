import { Button, Link as MUILink, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import NextLink, { LinkProps } from "next/link";

type Props = {
  isActive?: boolean;
  text: string;
  size?: "small" | "medium" | "large";
  px?: number;
  textColor?: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  iconSize?: "small" | "medium" | "large";
  closeMenu?: () => void;
} & LinkProps;

function MyLinkButton({
  size = "medium",
  isActive = false,
  href,
  px,
  text,
  textColor = "secondary.contrastText",
  Icon,
  closeMenu,
}: Props) {
  return (
    <NextLink href={href} passHref>
      <MUILink
        px={px && px}
        size={size}
        component={Button}
        startIcon={Icon && <Icon />}
        onClick={closeMenu}
        disabled={isActive}
        sx={{
          color: textColor,
          textDecoration: "none",
          justifyContent: "flex-start",
        }}
      >
        {text}
      </MUILink>
    </NextLink>
  );
}

export default MyLinkButton;
