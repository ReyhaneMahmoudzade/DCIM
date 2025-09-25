import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'sat',
        status: 10
    },
    {
        name: 'sun',
        status: 12
    },
    {
        name: 'mon',
        status: 5
    },
    {
        name: 'tue',
        status: 9
    },
    {
        name: 'wed',
        status: 7
    },
    {
        name: 'thu',
        status: 25
    },
    {
        name: 'fri',
        status: 0
    },


];

export default function Chart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={800}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="status" stroke="#456882" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}
