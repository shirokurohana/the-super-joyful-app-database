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
      <div class="card mt-4">
        <div class="card-body">
          <h5 class="card-title">{itemData.name}</h5>
            <p class="card-text">This is {itemData.member}!</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Birthdate: {itemData.birthdate}</li>
          <li class="list-group-item">Phone number: {itemData.phone}</li>
        </ul>
        <div class="card-body">
          <a className="card-link">{itemData.email}</a> 
        </div>
      </div>
    </Layout>
  );
}