import Head from "next/head";
import Image from "next/image";
import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import { Movie } from "../typings";
import requests from "../utils/requests";

interface Props {
  netflixOriginals: Movie[];
  trending: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  animationMovies: Movie[];
  kidsMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  trending,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  animationMovies,
  kidsMovies,
  documentaries,
}: Props) => {
  return (
    netflixOriginals ?
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] ">
      <Head>
        <title>Home - QuaseNetflix</title>
      </Head>
      
      <Header />
      
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
         <Banner netflixOriginals={netflixOriginals}/>
        <section className='md:space-y-24'>
          <Row title='Em alta' movies={trending}/>
          <Row title='Mais Votados' movies={topRated}/>
          <Row title='Ação' movies={actionMovies}/>
          {/*mylist*/}
          <Row title='Comédia' movies={comedyMovies}/>
          <Row title='Horror' movies={horrorMovies}/>
          <Row title='Romance' movies={romanceMovies}/>
          <Row title='Animação' movies={animationMovies}/>
          <Row title='Kids' movies={kidsMovies}/>
          <Row title='Documentários' movies={documentaries}/>

          
        </section>
      </main>
    </div>: <>Loading</>
  ) ;
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendindNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    animationMovies,
    kidsMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchAnimatedMovies).then((res) => res.json()),
    fetch(requests.fetchKidsMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trending: trendindNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      animationMovies: animationMovies.results,
      kidsMovies: kidsMovies.results,
      documentaries: documentaries.results,
    },
  };
};


