
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
function Pixel ({pixelColor, placmentUser, coordinates, updatedAt}) {
    //creates color state
    const [colorState, setColorState] = useState(pixelColor);

    // makes color of the pixel equal to the color state
    const style = {backgroundColor: colorState}

    // sets up styling for MUI tooltip
    const PixelTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }));

      const handleClick = (event) =>{
        // need to check if user is logged in
        //need to check if user has any more placements left

        //if valid, pull up form for color (possibly using color wheel?)
      }

    return (
        <PixelTooltip title = {`placed by: ${placmentUser} at ${updatedAt}`}>
        <div className={`pixel`} 
        style={style} 
        data-placement = {coordinates} 
        data-updatedAt = {updatedAt}
        data-User = {placmentUser}
        onClick={handleClick}
        >
        </div>
        </PixelTooltip>
    )
};


export default Pixel;