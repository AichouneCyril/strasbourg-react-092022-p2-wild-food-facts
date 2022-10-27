import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

function FilterItem({ itemName }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Box display="flex" alignItems="center">
      {active ? (
        <CheckCircleIcon onClick={handleClick} color="primary" />
      ) : (
        <RadioButtonUncheckedIcon onClick={handleClick} color="primary" />
      )}
      <Typography sx={{ mx: 1, my: 0.2 }}>{itemName}</Typography>
    </Box>
  );
}

FilterItem.propTypes = {
  itemName: PropTypes.string.isRequired,
};

export default FilterItem;
