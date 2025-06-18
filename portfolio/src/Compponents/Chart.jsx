import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['javaScript', 'html', 'react','css'],
  datasets: [
    {
      label: 'Macros Breakdown',
      data: [60,10,60,10],
      backgroundColor: ['#8884d8', '#82ca9d', '#ffc658','#afc658'],
      borderWidth: 1,
    },
  ],
};

function MacroPieChart() {
  return (
    <div className='flex flex-col items-center justify-center p-5'>
        <h2 className="text-4xl font-bold mb-12">Statistic</h2>
        <div className="chart-wrapper w-90 p-6 text-center">
            <h3 className='font-bold text-center'>Most Used language</h3>
            <Pie data={data} className=''/>
        </div>
    </div>
    
  );
}

export default MacroPieChart;
