import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function FilterItem({ itemName, isActive, setFilter }) {
  const [active, setActive] = useState(isActive);

  const handleClick = () => {
    setActive(!active);
    setFilter(itemName);
  };

  return (
    <Box display="flex" alignItems="center">
      {active ? (
        <CheckCircleIcon onClick={handleClick} sx={{ color: "primary.main" }} />
      ) : (
        <RadioButtonUncheckedIcon
          onClick={handleClick}
          sx={{ color: "primary.main" }}
        />
      )}
      <Typography sx={{ mx: 1, my: 0.2 }}>{itemName}</Typography>
    </Box>
  );
}

FilterItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterItem;
