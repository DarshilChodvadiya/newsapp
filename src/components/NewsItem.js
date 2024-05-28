import React from 'react'

const NewsItem = (props) => {
  

 
    let { title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">


        <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
          <span className="badge rounded-pill bg-dark" >
            {source}
          </span>
        </div>
          <img
            height={230}
            src={
              imageUrl
                ? imageUrl
                : "https://static.toiimg.com/thumb/msid-110317086,width-1070,height-580,imgsize-101810,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-teaxt">
              <small className="text-muted">
                By {author} on {new Date(date).toLocaleString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn rounded-pill btn-dark btn-sm py-2"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem