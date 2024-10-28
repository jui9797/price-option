import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Chart = () => {
    
        const studentMarks = [
            { id: 1, name: "Alice", marks: 78 },
            { id: 2, name: "Bob", marks: 85 },
            { id: 3, name: "Charlie", marks: 92 },
            { id: 4, name: "David", marks: 67 },
            { id: 5, name: "Emma", marks: 74 },
            { id: 6, name: "Frank", marks: 88 },
            { id: 7, name: "Grace", marks: 80 },
            { id: 8, name: "Henry", marks: 91 },
            { id: 9, name: "Ivy", marks: 76 },
            { id: 10, name: "Jack", marks: 83 }
          ]
          
    
    return (
        <div>
        <ResponsiveContainer width="95%" height={400}>
            <LineChart data={studentMarks}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="marks" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    </div>
    );
};

export default Chart;