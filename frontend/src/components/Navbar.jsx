import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ManageSearchTwoToneIcon from "@mui/icons-material/ManageSearchTwoTone";
import { Grid, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Navbar({ changeMenu, changeOpen }) {
  function showSearchOnClick(element) {
    changeMenu(element);
    changeOpen(true);
  }

  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          <Grid item xs={4} md={4}>
            <Item>
              <IconButton color="inherit" aria-label="open drawer">
                <FavoriteTwoToneIcon
                  onClick={() => showSearchOnClick("favorite")}
                />
              </IconButton>
            </Item>
          </Grid>
          <Grid item xs={4} md={4}>
            <Item>
              <IconButton color="inherit">
                <ManageSearchTwoToneIcon
                  onClick={() => showSearchOnClick("search")}
                />
              </IconButton>
            </Item>
          </Grid>
          <Grid item xs={4} md={4}>
            <Item>
              <IconButton color="inherit">
                <AccountCircleIcon
                  onClick={() => showSearchOnClick("account")}
                />
              </IconButton>
            </Item>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  changeMenu: PropTypes.element.isRequired,
  changeOpen: PropTypes.element.isRequired,
};
