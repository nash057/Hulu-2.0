import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'
// import styles from '../styles/Home.module.css'

export default function Home({ results }) {
  // console.log(props);
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      {/* <h1>Building Hulu</h1> */}

      {/* Header */} 
      <Header />

      {/* Navbar */}
      <Nav /> 

      {/* Results */}
      <Results results={results} /> {/* We pass the results as a prop(which is an array of props) to our result component and we render our frontend */} 
      {/*Here we will have server side rendering, i.e all the pages and javascript execution happens at the server side itself and then all this is sent as a prop and loaded on the user's screen */}
 
    </div>
  );
}

export async function getServerSideProps(context) {
  //This server renders happens first then, the client side code is executed.
  const genre = context.query.genre;
  //Now at this moment we, go to tmdb site to copy and paste our api key into our local env file and then proceed further
  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url||requests.fetchTrending.url}`
  ).then(res => res.json());

  return {
    props: {
      results: request.results,
    },
  };
  //So we are loading all this first at the server side by fetching from the api and then sending the result as a prop to our Home function.
} 