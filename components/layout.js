import Header from './Header';

const layoutStyle = {
  margin: 0,
  padding: 10,
  border: '2px solid #000',
};

<style jsx global>{`
         h1,
         a {
           font-family: 'Arial';
         }
 
         ul {
           padding: 0;
         }
 
         li {
           list-style: none;
           margin: 5px 0;
         }
 
         a {
           text-decoration: none;
           color: red;
         }
`}</style>

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;