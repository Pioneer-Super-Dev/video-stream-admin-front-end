import React from "react";
import { Grid, Button, Typography, TextField } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import axios from "axios";
import Constants from "../../constants/Constants";

const ariaLabel = { "aria-label": "description" };

export default function Menu() {
  const [gender, setGender] = React.useState([]);
  const [about, setAbout] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [newGender, setNewGender] = React.useState("");
  const [flag, setFlag] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`${Constants.ADMIN_SERVER_URL}/api/setting/menu`)
      .then((response) => {
        setGender(response.data.genders);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${Constants.ADMIN_SERVER_URL}/api/setting/about`)
      .then((response) => {
        setAbout(response.data.about);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${Constants.ADMIN_SERVER_URL}/api/setting/contact`)
      .then((response) => {
        setContact(response.data.contact);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = () => {
    if (newGender) {
      let tempGender = gender;
      tempGender.push(newGender);
      setGender(tempGender);
      setFlag(!flag);
      axios
        .post(`${Constants.ADMIN_SERVER_URL}/api/setting/menu`, {
          gender: gender,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
      setNewGender("");
    }
  };

  const handleAbout = () => {
    axios
      .post(`${Constants.ADMIN_SERVER_URL}/api/setting/about`, { about: about })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleContact = () => {
    axios
      .post(`${Constants.ADMIN_SERVER_URL}/api/setting/contact`, {
        contact: contact,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const onChange = (e) => {
    setNewGender(e.target.value);
  };

  const onChangeAbout = (e) => {
    setAbout(e.target.value);
  };

  const onChangeContact = (e) => {
    setContact(e.target.value);
  };

  const handleDelete = (gen) => () => {
    const tempGender = gender;
    const index = tempGender.indexOf(gen);
    tempGender.splice(index, 1);
    setGender(tempGender);

    setFlag(!flag);

    axios
      .delete(`${Constants.ADMIN_SERVER_URL}/api/setting/menu/${gen}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
    setNewGender("");
  };

  return (
    <React.Fragment>
      <Grid sx={{ mt: 10 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 5 }}>
          Gender
        </Typography>
        <Input
          placeholder="Gender"
          value={newGender}
          inputProps={ariaLabel}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.keyCode == 13) handleAdd();
          }}
        />
        <Button
          variant="contained"
          component="span"
          sx={{ ml: 5 }}
          onClick={handleAdd}
        >
          Add
        </Button>
        <Stack direction="column" spacing={1} sx={{ mt: 3 }}>
          {gender ? (
            gender.map((gen) => {
              // return <Chip label={gen} variant="outlined" />
              return (
                <Chip
                  label={gen}
                  variant="outlined"
                  onDelete={handleDelete(gen)}
                />
              );
            })
          ) : (
            <></>
          )}
        </Stack>
      </Grid>
      <Grid sx={{ mt: 10 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 5 }}>
          About Us
        </Typography>
        <Grid item md={24}>
          <TextField
            multiline
            required
            fullWidth
            minRows="10"
            id="biography"
            label="Biography"
            name="biography"
            autoComplete="biography"
            placeholder="more than 100 characters"
            value={about}
            onChange={onChangeAbout}
          />
          <Button onClick={handleAbout}>Save</Button>
        </Grid>
      </Grid>
      <Grid sx={{ mt: 10 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 5 }}>
          Contact Us
        </Typography>
        <Grid item md={24}>
          <TextField
            multiline
            required
            fullWidth
            minRows="10"
            id="biography"
            label="Biography"
            name="biography"
            autoComplete="biography"
            placeholder="more than 100 characters"
            value={contact}
            onChange={onChangeContact}
          />
          <Button onClick={handleContact}>Save</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
