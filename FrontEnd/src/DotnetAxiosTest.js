import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DotnetAxiosTest() {
  useEffect(() => {
    axios
      .get('http://localhost:5212')
      .then((response) => {
        console.log(response); // 테스트용
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <h2>날씨 예보</h2>
      <ul></ul>
    </div>
  );
}

export default DotnetAxiosTest;
