import Header from '../components/Header';
import Layout from '../components/layout';

export default function Index() {
    return (
      <div> {/* Main Div */}
        <Layout />
        <h1>Contact us here </h1>
        <div>
        <form method="post" action="#" className-="contactForum">
            <label>
                Name
                <input type="text" name="name" id="name" />
            </label>
            <label>
                Email
                <input type="email" name="email" id="email" />
            </label>
            <label>
                Subject
                <input type="text" name="subject" id="subject" />
            </label>
            <label>
                Message
                <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
            </form>
        </div>
      </div>/* end of main div */
    );
  }