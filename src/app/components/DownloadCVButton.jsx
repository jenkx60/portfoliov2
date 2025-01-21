"use client"

import React, { useState } from 'react';
import axios from 'axios';

const DownloadCVButton = () => {
    const [downloadLink, setDownloadLink] = useState('');

    const handleDownload = async () => {
        const response = await axios.get('https://aquamarine-margareta-82.tiiny.site');
        serDownloadLink(response.data.link);
    };
  return (
    <div>
        <button onClick={handleDownload} download>Download CV</button>
    </div>
  )
}

export default DownloadCVButton