import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Phones',
    price: 4000,
    rating: 2400,
    amt: 2400,
  },
  {
    name: 'Laptops',
    price: 3000,
    rating: 1398,
    amt: 2210,
  },
  {
    name: 'Tablets',
    price: 2000,
    rating: 9800,
    amt: 2290,
  },
  {
    name: 'Smartwatches',
    price: 2780,
    rating: 3908,
    amt: 2000,
  },
  {
    name: 'Accessories',
    price: 1890,
    rating: 4800,
    amt: 2181,
  },
  {
    name: 'Headphones',
    price: 2390,
    rating: 3800,
    amt: 2500,
  },
  {
    name: 'Cameras',
    price: 3490,
    rating: 4300,
    amt: 2100,
  },
];

const BarChartStat = () => {
  return (
    <div className="max-width-wrapper w-full mt-8">
      <ResponsiveContainer width={'100%'} height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="price"
            fill="#B3CDAD"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="rating"
            fill="#9538e2"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartStat;
