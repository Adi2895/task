import React, {useEffect, useState} from 'react';
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
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


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
  
  var relevance = [];
  var country = [];
  for (const obj of fet) {
    relevance.push(obj.relevance);
    country.push(obj.country);
    
  }

  relevance = relevance.slice(0 ,100 );
  country = country.slice(0, 100)
  return {relevance, country };
};



export default function Third() {

  const [Data, setData] = useState({})
  useEffect(()=>{
    async function placeholder (){
      let etc = await extract_data()
      console.log(etc)
      setData(etc)
    }
    placeholder()
  },[])


    const data = {
        
        labels:Data.country,
        datasets:[
            {
                label:'Relevance',
                data:Data.relevance,
                
                borderColor: [
                    'rgb(3 92 52 / 50%)',
                    'rgb(49 68 241 / 83%)',
                    'rgb(212 226 115 / 83%)',
                    'rgb(249 73 221 / 83%)',
                    // 'rgb(233 108 108 / 83%)',
                ],
                backgroundColor:'pink',
                fill:false,
                hoverBorderColor: [
                    'black',
                    
                ],
                hoverBackgroundColor:[
                    'orange',
                    'blue',
                    'yellow',
                    'pink',
                    'red'
                ],
                pointRadius: 5,
                hoverBorderWidth: 2,
                
            }
        ]
    
}


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
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  return (
    <div className='' style={{marginTop:"100px"}}>
        <Bar data={data} options={options}/>
    </div>
  )
}
