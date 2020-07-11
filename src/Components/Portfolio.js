import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var travel = this.props.data.travel.map(function(travel){
        var projectImage = 'images/portfolio/'+travel.image;
        return <div key={travel.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={travel.url} title={travel.title}>
               <img alt={travel.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{travel.title}</h5>
                     <p>{travel.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Travels!</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {travel}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
