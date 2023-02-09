import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useCursorHandlers from '../hooks/use-cursor-handlers';
import {
  portfolio,
  item,
  grid,
  video,
  name,
  list,
  description
} from './Portfolio.module.sass';

function Portfolio() {

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
    mediaElement.play();
  }
  
  function stopVideo(event){
    if (event.target.nodeName === 'VIDEO'){
      mediaElement = event.target;      
    } else if (event.target.nodeName === 'ARTICLE'){
      mediaElement = event.target.querySelectorAll('video')[0];
    } else {
      mediaElement = event.target.parentNode.closest('article').querySelectorAll('video')[0];
    }
    pauseTime = mediaElement.currentTime;
    mediaElement.load();
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
              media
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
            <video playsInline muted loop className={video} poster={edge.node.frontmatter.media + ".jpg"}>
              <source src={edge.node.frontmatter.media + ".mp4"} type="video/mp4" />
            </video>
            <div className={description}>
              <h3 className={name}><a href={edge.node.frontmatter.link} title="Visit website" target="_blank" rel="noopener noreferrer" {...cursorHandlers}>{edge.node.frontmatter.title}</a></h3>
              <dl className={list}>
                <dt>Result:</dt>
                <dd>{edge.node.body}</dd>
                <dt>Year:</dt>
                <dd>{edge.node.frontmatter.date}</dd>
                { edge.node.frontmatter.awards ? (
                  <>
                    <dt>Awards:</dt>
                    <dd><a href={edge.node.frontmatter.awards_link} title="View award" {...cursorHandlers}>{edge.node.frontmatter.awards}</a></dd>
                  </>
                ) : ( null ) }
              </dl>
            </div>
          </article>
        ))
      }
      </div>
    </section>
  )
}

export default Portfolio;
