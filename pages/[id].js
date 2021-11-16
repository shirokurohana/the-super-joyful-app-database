import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';
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
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <div className="row mt-4 text-center ">
            <div className="col-sm-6 w-50 mx-auto">
      <div className="card mt-4">
        <div className="card-body">
          <h3 className="card-title">{itemData?.post_title}</h3>
          <h5> Content </h5>
          <p className="card-text">{itemData?.post_excerpt}</p>
            <p className="card-text">{itemData?.post_content}!</p>
            <h5> See post on da web </h5>
            <Link href={`${itemData?.guid}`}>
                      <a className="btn btn-primary">See this post</a>
              </Link>
           
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item small">Last modified: {itemData?.post_modified}</li>
          <li className="list-group-item small">Status: {itemData?.post_status}!</li>
        </ul>
        
      </div>
      </div>
      </div>
    </Layout>
  );
}