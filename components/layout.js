import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #000',

};

<style jsx>{} {`
        ul {
            list-style: none;
            display: flex
        }

        ul li {
            margin-right: 20px;
        }

        ul li a {
            text-decoration: none;
        }
`}

</style>

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;