import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useCursorHandlers from '../hooks/use-cursor-handlers';
import {
  portfolio,
  item,
  grid,
  video,
  name,
  text,
  description
} from './Portfolio.module.sass';

function Portfolio() {

  const videoClasses = video + ' lazyload';
  const cursorHandlers = useCursorHandlers();
  let pauseTime = 0;
  let mediaElement;

  function playVideo(event){
    mediaElement = event.target;
    if (event.target.nodeName === 'ARTICLE'){
      mediaElement = event.target.querySelectorAll('video')[0];
    } else {
      mediaElement = event.target.parentNode.closest('article').querySelectorAll('video')[0];
    }
    mediaElement.currentTime = pauseTime;
    var isPlaying = mediaElement.currentTime > 0 && !mediaElement.paused && !mediaElement.ended && mediaElement.readyState > mediaElement.HAVE_CURRENT_DATA;
    if (!isPlaying) {
      mediaElement.play();
    }
  }
  
  function stopVideo(){
    document.querySelectorAll('video').forEach(function(video){
      var isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > video.HAVE_CURRENT_DATA;
      if (isPlaying) {
        video.pause();
      }
    })
  }

  const data = useStaticQuery(graphql`
    query MyQueryPortfolio {
      allMdx(sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            body
            frontmatter {
              title
              date(formatString: "YYYY")
              link
              awards
              awards_link
              image
              video
            }
            id
          }
        }
      }
    }
  `);
  
  return (
    <section className={portfolio} {...cursorHandlers}>
      <div className={grid}>
      {
        data.allMdx.edges.map((edge, index) => (
          <article key={edge.node.id} id={index} className={item} onMouseEnter={playVideo} onMouseLeave={stopVideo} role="presentation">
            <video className={videoClasses} preload="none" playsInline muted loop poster={edge.node.frontmatter.image+".webp"}>
              <source src={edge.node.frontmatter.video+".mp4"} type="video/mp4" />
            </video>
            <div className={description}>
              <h3 className={name}><a href={edge.node.frontmatter.link} title="Visit website" target="_blank" rel="noopener noreferrer" {...cursorHandlers}>{edge.node.frontmatter.title}</a></h3>
              <p className={text}>{edge.node.body}</p>
              { edge.node.frontmatter.awards ? (
                <>
                  <p className={text}><a href={edge.node.frontmatter.awards_link} title="View award" {...cursorHandlers}>{edge.node.frontmatter.awards}</a></p>
                </>
              ) : ( null ) }
              { edge.node.frontmatter.title === 'Newsletters' || edge.node.frontmatter.title === 'Iberdrola' ? ( 
                null
              ) : ( 
                <>
                  <p className={text}>{edge.node.frontmatter.date}</p>
                </>  
              ) }
            </div>
          </article>
        ))
      }
      </div>
    </section>
  )
}

export default Portfolio;
