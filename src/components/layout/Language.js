import React from "react";
import {Grid} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Language() {

    const [value, setValue] = React.useState('English');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    return (
        <Grid sx={{mt: 10}}>
            <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="English" control={<Radio />} label="English" />
                    <FormControlLabel value="Norwegian" control={<Radio />} label="Norwegian" />
                </RadioGroup>
            </FormControl>
        </Grid>
    );
}