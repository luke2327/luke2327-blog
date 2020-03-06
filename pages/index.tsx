/** import component */
import { NextPage } from 'next';
import { Fragment } from 'react';
import { DatePicker } from 'antd';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  return (
    <Fragment>
      <h1>user agent: {userAgent}</h1>
      <DatePicker></DatePicker>
    </Fragment>
  );
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;

  return { userAgent };
};

export default Home;