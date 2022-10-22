import { gql } from '@apollo/client';
import Head from 'next/head';
import Image from 'next/image';
import SocialRow from '../components/SocialRow';

import client from '../apolloClient';
import LinksRow from '../components/LinksRow';

const Home = props => {
  console.log('dd', props);
  const {
    websiteTitle,
    websiteSeoDescription,
    websiteBackgroundColor,
    logo,
    linksCollection,
    socialLinksCollection,
    faviconIcon,
  } = props.data;

  console.log('websiteBackgroundColor', websiteBackgroundColor);

  return (
    <div>
      <Head>
        <title>{websiteTitle}</title>
        <meta name="description" content={websiteSeoDescription} />
        <link rel="icon" href={faviconIcon || '/favicon.ico'} />
      </Head>

      <main style={{ backgroundColor: `${websiteBackgroundColor}` }}>
        <div className="container">
          <img className="logo" src={logo.url} alt={websiteTitle} />
          <div>
            <h1>{websiteTitle}</h1>
          </div>
          <SocialRow icons={socialLinksCollection} />
          <div className="links-row">
            <LinksRow links={linksCollection.items} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        # add your query
        dlectorWebsite(id: "2pIbxDsWmjM9niSc5XTsQS") {
          websiteTitle
          websiteSeoDescription
          websiteBackgroundColor
          logo {
            url
          }
          socialLinksCollection {
            items {
              name
              valueUrl
            }
          }
          linksCollection {
            items {
              label
              url
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data.dlectorWebsite,
    },
  };
}
