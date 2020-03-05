const Home = ({ userAgent }) => <h1>user agent: {userAgent}</h1>;

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  return { userAgent };
};

export default Home;