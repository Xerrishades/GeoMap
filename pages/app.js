import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/layout';
import Radar from 'radar-sdk-js';

function app () {
    /* initialize Radar Connection */
    Radar.initialize(prj_test_pk_2bdadc849b1f66b25824b05c8b1cdd7ac4103681);

    Radar.trackOnce(function(status, location, user, events) {
        if (status === Radar.STATUS.SUCCESS) {
          if (user.place.chain.slug === '') {
            // do something
          } else {
            Radar.on('error', (err) => {
                // do something with err
                console.log(EvalError);
          },
        });
    }
}

export default app;