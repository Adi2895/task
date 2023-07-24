import React,{useEffect, useState} from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const fetch_data = async () => {
  var response = await fetch("http://localhost:3000/api/fetch");
  response = await response.json();
  return response.data;
};

const extract_data = async () => {
  const fet = await fetch_data();
  var intensity = [];
  var country = [];
  for (const obj of fet) {
    intensity.push(obj.intensity);
    country.push(obj.country)
  }
  console.log("SLIYy")
  intensity = intensity.slice(1,100)

  country = country.slice(1,100)


  return { intensity,  country };
};

export default function Sec() {
  // var extracted_data =  extract_data();
  // console.log("EXTRACTED", extracted_data);
  const [Data, setData] = useState({})
  useEffect(()=>{
    async function placeholder (){
      let etc = await extract_data()
      console.log(etc)
      setData(etc)
    }
    placeholder()
  },[])

  var inten = Data.intensity
  var coun = Data.country
  console.log(typeof inten)
  const data = {
    labels: coun,
    datasets: [
      {
        label: "Intensity",
        data: inten,
        borderColor: [
          "rgb(3 92 52 / 50%)",
          "rgb(49 68 241 / 83%)",
          "rgb(212 226 115 / 83%)",
          "rgb(249 73 221 / 83%)",
          "rgb(3 92 52 / 50%)",
          "rgb(49 68 241 / 83%)",
          "rgb(212 226 115 / 83%)",
          "rgb(249 73 221 / 83%)",
          // 'rgb(233 108 108 / 83%)',
        ],
        // backgroundColor:'transparent',
        fill: false,
        hoverBorderColor: ["black"],
        hoverBackgroundColor: ["orange", "blue", "yellow", "pink", "red"],
        pointRadius: 5,
        hoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    // scales: {
    xAxes: {
      grid: {
        display: true, // Show grid lines for the x-axis
      },
    },
    yAxes: {
      grid: {
        display: true, // Show grid lines for the y-axis
      },

      // },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return (
    <div className="" style={{ marginTop: "100px" }}>
      
      <Line data={data} options={options} />
      
    </div>
  );
}
