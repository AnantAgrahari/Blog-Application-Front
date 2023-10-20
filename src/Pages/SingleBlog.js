import React from 'react'

const SingleBlog = () => {
  return (
    <>
    <div className="conatainer shadow my-3">
        <div className='col-md-12 d-flex items-center justify-content-center bg-light'>
            <div className='row'>
                <h1 className='my-3'>Demo</h1>
                <p className='my-3'>Published date:</p>
                <img 
                src={`https://www.kindpng.com/picc/m/235-2350682_new-svg-image-small-user-login-icon-hd.png`}
                className='img img-responsive img-rounded my-3' alt=""
                />
                <p className='my-3'>Demo description</p>
            </div>
        </div>
        <button  className='btn btn-primary'>
            Back to Post
        </button>
        
    </div>
    </>
  );
};

export default SingleBlog;