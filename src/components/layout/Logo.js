import React from "react";
import { Container, Grid, IconButton, Avatar, Button } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import axios from "axios";

const ImageThumb = ({ image }) => {
  console.log(image);
  if (image.name) {
    return (
      <Avatar
        src={URL.createObjectURL(image)}
        alt={image.name}
        sx={{ width: "auto", height: 250, border: 1, borderColor: "primary" }}
        variant="rounded"
      />
    );
  } else
    return (
      <Avatar
        src={`http://localhost:5000/logo/${image}`}
        sx={{ width: "auto", height: 250, border: 1, borderColor: "primary" }}
        variant="rounded"
      />
    );
};

const Input = styled("input")({
  display: "none",
});

export default function Logo() {
  const [file, setFile] = React.useState("");

  React.useEffect(() => {
    axios
      .get("http://localhost:5001/api/setting/logo")
      .then((response) => {
        setFile(response.data.logo);
      })
      .catch((err) =>
        // setAlert('Choose Proper Image', 'danger')
        console.log(err)
      );
  }, []);

  //Image Upload
  function handleUpload(event) {
    if (event.target.files[0]) setFile(event.target.files[0]);

    const data = new FormData();

    data.append("logo", event.target.files[0]);

    axios
      .post("http://localhost:5000/api/upload/logo", data)
      .then((response) => {
        axios.post("http://localhost:5001/api/setting/logo", {
          logo: response.data,
        });
      })
      .catch((err) =>
        // setAlert('Choose Proper Image', 'danger')
        console.log(err)
      );
  }

  return (
    <React.Fragment>
      <Grid>
        <Container sx={{ display: "flex", flexDirection: "row", mt: 10 }}>
          {file ? (
            <ImageThumb image={file} />
          ) : (
            <Avatar
              src="http://localhost:5000/logo/logo_blue.png"
              sx={{
                width: "auto",
                height: 250,
                border: 1,
                borderColor: "primary",
              }}
              variant="rounded"
            />
          )}
          <label htmlFor="icon-button-file">
            <Input
              onChange={handleUpload}
              accept="image/*"
              id="icon-button-file"
              type="file"
            />
            {/* <IconButton color="primary" aria-label="upload picture" component="span" sx={{ml: 5}}>
                    <FileUploadIcon />
                    </IconButton> */}
            <Button variant="contained" component="span" sx={{ ml: 5 }}>
              Upload
            </Button>
          </label>
        </Container>
      </Grid>
    </React.Fragment>
  );
}
