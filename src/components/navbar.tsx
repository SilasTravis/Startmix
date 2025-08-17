import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Select,
  FormControl,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Stack,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import ContactModal from "./ContactModal";

const NavLink = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", label: t("navbar.about") },
    { path: "/category", label: t("navbar.categories") },
    { path: "/", label: t("navbar.home") },
    { path: "/", label: t("navbar.contact") },
  ];

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ bgcolor: "white" }}
    >
      <Toolbar
        sx={{
          width: "100%",
          mx: "auto",
          px: { xs: 2, sm: 3 },
          justifyContent: "space-between",
        }}
        className="container max-w-7xl mx-auto"
      >
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            "&:hover": {
              opacity: 0.8,
            },
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: "40px", width: "auto" }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/40";
            }}
          />
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            marginRight: "auto",
            marginLeft: 8,
            gap: 1,
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{ color: "text.primary" }}
            >
              {t(item.label)}
            </NavLink>
          ))}
        </Box>
        <Stack direction={"row"}>
          <Button
            variant="contained"
            onClick={handleOpenContactModal}
            sx={{
              backgroundColor: "black",
              color: "#fff",

              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            {t("navbar.connect")}
          </Button>
          {/* Language Selector */}
          <FormControl
            size="small"
            variant="outlined"
            sx={{ minWidth: 120, ml: 1 }}
          >
            <Select
              value={i18n.language || "ru"}
              onChange={handleLanguageChange}
              displayEmpty
              inputProps={{ "aria-label": "Select language" }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="en">🇺🇸 {t("language.en")}</MenuItem>
              <MenuItem value="ru">🇷🇺 {t("language.ru")}</MenuItem>
              <MenuItem value="uz">🇺🇿 {t("language.uz")}</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        {/* Mobile menu button */}
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
          <FormControl
            size="small"
            variant="outlined"
            sx={{ minWidth: 100, mr: 1 }}
          >
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              displayEmpty
              size="small"
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="en">{t("language.en")}</MenuItem>
              <MenuItem value="ru">{t("language.ru")}</MenuItem>
              <MenuItem value="uz">{t("language.uz")}</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{ color: "text.primary" }}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile menu */}
      <Menu
        anchorEl={document.body}
        open={isMenuOpen && isMobile}
        onClose={toggleMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            width: "100%",
            maxWidth: "100%",
            margin: 0,
            top: "64px !important",
            left: "0 !important",
            right: "0 !important",
            position: "fixed",
            borderRadius: 0,
            boxShadow: theme.shadows[3],
          },
        }}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item.path}
            onClick={() => {
              toggleMenu();
              navigate(item.path);
            }}
            sx={{
              py: 2,
              borderBottom: `1px solid ${theme.palette.divider}`,
              "&:last-child": {
                borderBottom: "none",
              },
            }}
          >
            <Typography textAlign="center" width="100%">
              {t(item.label)}
            </Typography>
          </MenuItem>
        ))}
      </Menu>

      {/* Contact Modal */}
      <ContactModal
        open={isContactModalOpen}
        onClose={handleCloseContactModal}
      />
    </AppBar>
  );
};

export default Navbar;
