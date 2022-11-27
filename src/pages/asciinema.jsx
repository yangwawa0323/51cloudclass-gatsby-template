import React from "react";
import AsciinemaEditor from "../components/asciinema/AsciinemaEditor";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import "../styles/components/_asciinema.scss";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import ArrowForward from "@mui/icons-material/ArrowForward";

// import { debug } from "../utils/tools";
import { navigate } from "gatsby";

const Asciinema = () => {
  const [value, setValue] = React.useState(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const postData = async () => {

    const response = await fetch(`${process.env.API_SERVER}/api/page/new`, {
      method: "POST",
      mode: "cors",
      // cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: JSON.stringify(value) }),
    }).catch((error) => {
      if (error instanceof TypeError) {
        setErrorMessage(error.message);
      }
      setSnackbarOpen(true);
      return;
    });

    if (!response.ok) {
      let respObj = await response.json();
      setSnackbarOpen(true);
      setErrorMessage(respObj?.error || "Failed to save.");
      return;
    }

    navigate("/");
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
    setErrorMessage(null);
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          height: "min-content",
          width: "auto",
          padding: "150px 160px 100px 160px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* <p className="text-gray-400 text-center text-xs font-medium">Asciinema-player editor plugin v0.1.0 by @51cloudclass.</p> */}
        <AsciinemaEditor onChange={setValue} initialValue={value} />
        <div>
          <Button
            sx={{
              width: "120px",
              "&.MuiButtonBase-root.MuiButton-root": {
                backgroundColor: "#9c27b0",
                "&:hover": {
                  backgroundColor: "#7b1fa2",
                },
              },
            }}
            aria-label="save"
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={postData}
          >
            Save
          </Button>
        </div>
        <div>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={closeSnackbar}
          >
            <Alert
              variant="filled"
              onClose={closeSnackbar}
              severity="error"
              sx={{ width: "100%" }}
            >
              {errorMessage}
            </Alert>
          </Snackbar>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Asciinema;
