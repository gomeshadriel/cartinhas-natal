import React from 'react';
import { Button } from '@mui/material';
import { Padding } from '@mui/icons-material';

const UploadButton = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file.name); // Faz algo com o arquivo aqui
    }
  };

  const styles = {
    upload:{
        width: "60vh",
        background: "#E92B2E",
    },
};

  return (
    <div>
      <input
        accept="image/*"
        style={{display: 'none'}}
        id="file-upload"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload">
        <Button style={styles.upload} variant="contained" component="span">
          Faça upload da cartinha
        </Button>
      </label>
    </div>
  );
};

export default UploadButton;
