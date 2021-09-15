import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">{itemData.name}</h5>
            <p className="card-text">This is {itemData.member}!</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Birthdate: {itemData.birthdate}</li>
          <li className="list-group-item">Phone number: {itemData.phone}</li>
        </ul>
        <div className="card-body">
          <a classNameName="card-link">{itemData.email}</a> 
        </div>
      </div>
    </Layout>
  );
}