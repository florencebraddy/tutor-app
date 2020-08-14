import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

const useStyles = makeStyles({
  root: {
    width: 800,
    margin: "60px",
    background: "transparent",
    opacity: 0.7
  }
});

export default function HomePageBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="About Us"
        icon={<EmojiPeopleIcon />}
        style={{ color: "white" }}
      />
      <BottomNavigationAction
        label="Frequently Asked Questions"
        icon={<ContactSupportOutlinedIcon />}
        style={{ color: "white" }}
      />
      <BottomNavigationAction
        label="Contact Us"
        icon={<AlternateEmailOutlinedIcon />}
        style={{ color: "white" }}
      />
    </BottomNavigation>
  );
}
