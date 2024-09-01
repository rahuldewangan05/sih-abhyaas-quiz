import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

function Performance() {
  const [performanceData, setPerformanceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch performance data from your backend
    fetchPerformanceData();
  }, []);

  const fetchPerformanceData = async () => {
    // Replace this with actual API call
    try {
      // const response = await fetch('your-api-endpoint');
      // const data = await response.json();
      // setPerformanceData(data);
      setPerformanceData({
        overallAccuracy: 75,
        quizHistory: [
          { date: '2024-01-01', score: 60 },
          { date: '2024-02-01', score: 65 },
          { date: '2024-03-01', score: 70 },
          { date: '2024-04-01', score: 75 },
        ],
        topicStrengths: [
          { topic: 'Math', strength: 80 },
          { topic: 'Science', strength: 70 },
          { topic: 'History', strength: 65 },
        ],
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching performance data:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="py-20 text-center text-bookmark-grey">Loading performance data...</div>;
  }

  const data = {
    labels: performanceData.quizHistory.map(entry => entry.date),
    datasets: [
      {
        label: 'Score',
        data: performanceData.quizHistory.map(entry => entry.score),
        borderColor: '#5267DF',
        backgroundColor: 'rgba(82, 103, 223, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <section className="py-20 mt-20 bg-bookmark-white">
      <div className="container px-4 mx-auto">
        <h1 className="mb-6 text-3xl text-center text-bookmark-blue md:text-4xl lg:text-5xl">
          Your Performance
        </h1>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-2xl text-bookmark-blue">Overall Accuracy</h2>
            <p className="text-4xl font-bold text-bookmark-purple">{performanceData.overallAccuracy}%</p>
          </div>

          <div className="mb-12">
            <h2 className="mb-4 text-2xl text-center text-bookmark-blue">Performance Over Time</h2>
            <div style={{ position: 'relative', height: '300px', width: '100%' }}>
              <Line data={data} />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl text-center text-bookmark-blue">Topic Strengths</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {performanceData.topicStrengths.map((topic, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                  <h3 className="mb-2 text-lg text-bookmark-blue">{topic.topic}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-bookmark-purple h-2.5 rounded-full" style={{width: `${topic.strength}%`}}></div>
                  </div>
                  <p className="mt-2 text-right text-bookmark-grey">{topic.strength}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Performance;
