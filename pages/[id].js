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
          <h1 className="card-title">{itemData?.post_title}</h1>
          <p className="card-text mb-4 pretty">Posted by: {itemData?.user_login} &#x1F430;</p>

          <p className="card-text " dangerouslySetInnerHTML={{__html: itemData?.post_excerpt}} />
            <div className="card-text" dangerouslySetInnerHTML={{__html: itemData?.post_content}} />
            <h5 className="mt-4"> See post on da web </h5>
            <Link href={`${itemData?.guid}`}>
                      <a className="btn btn-primary">See this post</a>
              </Link>
           
        </div>
    
          <small className="text-muted">Last updated on: {itemData?.post_modified}</small>
          <small className= "text-muted">Status: {itemData?.post_status}</small>
          <small className="mb-4 text-muted">ID #{itemData?.ID}</small>
      
        
      </div>
      </div>
      </div>
    </Layout>
  );
}