import { useState, useEffect } from "react";
import {
  Switch,
  Slider,
  Select,
  MenuItem,
  Snackbar,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BasicCard from "./BasicCard";

import "./Dashboard.css";

function Dashboard() {
  const [online, setOnline] = useState(true);
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState(2);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    console.log("Rendered Dashboard");
  });

  const handleOnlineChange = (event) => {
    setOnline((prev) => !prev);

    if (event.target.checked === false) {
      setNotifications((notifications) => [
        "Your application is offline. You won't be able to share or stream music to other devices.",
        ...notifications,
      ]);
    }
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);

    if (event.target.value > 80) {
      setNotifications((notifications) => [
        "Listening to music at a high volume could cause long-term hearing loss.",
        ...notifications,
      ]);
    }
  };

  const handleQualityChange = (event) => {
    setQuality(event.target.value);

    if (event.target.value === 1) {
      setNotifications((notifications) => [
        "Music quality is degraded. Increase quality if your connection allows it.",
        ...notifications,
      ]);
    }
  };

  const closeNotification = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNotifications((prev) => prev.slice(1));
  };

  const cards = [
    {
      title: "Online Mode",
      description: "Is this application connected to the internet?",
      action: (
        <Switch
          variant="contained"
          color="warning"
          checked={online}
          onChange={handleOnlineChange}
        />
      ),
    },
    {
      title: "Master Volume",
      description: "Overrides all other sound settings in this application.",
      action: (
        <Slider
          min={0}
          max={100}
          step={10}
          marks
          value={volume}
          onChange={handleVolumeChange}
        />
      ),
    },
    {
      title: "Sound Quality",
      description:
        "Manually control the music quality in event of poor connection.",
      action: (
        <Select
          variant="standard"
          fullWidth
          value={quality}
          onChange={handleQualityChange}
        >
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      ),
    },
  ];

  return (
    <div className="dashboard">
      {/* This starts our javascript code. */}
      <div className="music-image-container">
        <img id="music-image" src="images/music.jpg" alt="Image not found" height="300px" width="300px"/>
      </div>
      
      <div className="dashboard-cards">
      {
        // Maps over every element in the cards array.
        cards.map(
          // This is the call back function that will transform every element in the cards array.
          (card, i) => {
            // Setting key prop (unique identifier) to the current index.
            // Using the spread operator to destructure each property of the card.
            return <BasicCard key={i} {...card} />;
          }
        )
      }
      </div>

      <Snackbar
        open={notifications[0]}
        message={notifications[0]}
        color="primary"
        onClose={closeNotification}
        autoHideDuration={6000}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={closeNotification}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
}

export default Dashboard;
