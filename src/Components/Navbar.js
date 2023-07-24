import React, { useState, useEffect } from "react";
import Logo from "../Assets/icon.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LanguageIcon from "@mui/icons-material/Language";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const StyledButton = styled("button")(({ theme }) => ({
  transition: "all 0.2s ease-in-out",
  backgroundColor: "#FF5542",
  color: "#ffffff",
  "&:hover": {
    transform: "scale(1.1)",
    backgroundColor: "#FF5542",
    color: "#ffffff",
  },
}));

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [lang, setLang] = useState("en");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setIsSticky(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex-grow flex items-center justify-center px-6 py-4 bg-white shadow-md ${
        isSticky ? "sticky top-0 z-10" : ""
      }`}
    >
      <div className="flex-grow flex items-center ">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-black flex justify-center items-center px-2 text-xl ">
          ADVANCER
        </span>
      </div>

      <div className="hidden md:flex space-x-3 items-center justify-center">
        <a
          href="/tutor"
          className="text-gray-500 hover:text-#FF5542 transition-colors"
        >
          Tutors
        </a>
        <a
          href="/work"
          className="text-gray-500 hover:text-#FF5542 transition-colors"
        >
          Courses
        </a>
        <a
          href="https://advancerenglish.teachable.com/courses/advancer/lectures/38021665"
          className="text-gray-500 hover:text-#FF5542 transition-colors"
        >
          Watch a movie
        </a>
        <a
          href="/tutor"
          className="text-gray-500 hover:text-#FF5542 transition-colors"
        >
          Become a tutor
        </a>

        <div className="ml-6 flex items-center justify-center">
          <LanguageIcon style={{ fontSize: "2rem" }} />
          <FormControl variant="standard">
            <Select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              style={{
                marginLeft: "1rem",
                height: "2.5rem",
                borderRadius: "0.375rem",
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="tr">Türkçe</MenuItem>
            </Select>
          </FormControl>
        </div>

        <a href="https://advancerenglish.com/profile">
          <StyledButton className="ml-2 px-6 py-2 rounded-lg">
            Giriş yap
          </StyledButton>
        </a >
        <a href="https://advancerenglish.com/profile">
        <StyledButton className="ml-2 px-6 py-2 rounded-lg">
          Üye Ol
        </StyledButton>
        </a >
      </div>
      <div className="md:hidden flex items-center justify-center">
        <HiOutlineBars3
          onClick={() => setOpenMenu(true)}
          className="h-8 w-8 text-gray-500 cursor-pointer hover:text-#FF5542"
        />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Tutors" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary="Courses" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><CommentRoundedIcon /></ListItemIcon>
                <ListItemText primary="Watch a movie" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><QuestionAnswerIcon /></ListItemIcon>
                <ListItemText primary="Become a tutor" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
