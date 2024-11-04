import PageDescription from '../components/PageDescription';
import PageHeading from '../components/PageHeading';

const StatisticsPage = () => {
  return (
    <section className="py-8 bg-clr-electric-violet">
      <div className="max-width-wrapper flex flex-col items-center gap-4">
        <PageHeading>Statistics</PageHeading>

        <PageDescription>
          View statistics of products price and ratings to compare. Analyze the
          data to make informed decisions. Happy shopping!
        </PageDescription>
      </div>
    </section>
  );
};

export default StatisticsPage;
