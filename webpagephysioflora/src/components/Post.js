import Link from 'next/link';
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization


export default function Post({ post }) {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">

        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.title.rendered}</h5>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            ></div>
            <Link href={`/posts/${post.slug}`}>
              <div>See more</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}