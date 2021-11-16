import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    }
  }
}
export default function Home({ allData }) {
  return (
      <Layout home>
        <h1 className="mt-4 text-center">My Favs 😇</h1>
        <div className="list-group">
          {allData.map(({ id, name }) => (
            <div className="row mt-4 text-center" key={id}>
            <div className="col-sm-7 w-50 mx-auto">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{name}</h4>
                  <h5> See some of my favs</h5>
                  <Link href={`/${id}`}>
                      <a className="btn btn-primary">Read more!</a>
                  </Link>
                </div>
              </div>
            </div>
            
           
          </div>
          ))}
        </div>
      </Layout>
  );
}
