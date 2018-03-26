import React, { Component } from 'react';
import { Helmet }           from 'react-helmet'

import Hero                 from './Components/Hero'
import Linebreak            from '../../../Components/Linebreak/Linebreak'


import ShowcasesWEBP_hand   from '../../../img/showcase/cooltrax-app/hand-settings.webp'
import ShowcasesPNG_hand    from '../../../img/showcase/cooltrax-app/hand-settings.png'


class Enracha extends Component {

  render() {

    return (

      <section>

        <Helmet>
          <title>Enracha showcase</title>
          <meta name="description" content="Take a look at my work with Enracha" />
        </Helmet>
        <div className="u-text-align--center">
          <h1>Enracha showcase</h1>

          <Linebreak />

          <p>Coming soon</p>
        </div>

      </section>

    )

  }

}

export default Enracha;