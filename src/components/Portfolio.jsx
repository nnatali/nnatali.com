import React, { useRef, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useCursorHandlers from '../hooks/use-cursor-handlers';
import isMobile from '../utils/is-mobile';
import {
  portfolio,
  item,
  grid,
  video,
  name,
  text,
  adward,
  description
} from './Portfolio.module.sass';

function Portfolio() {

  const videoClasses = video + ' lazyload';
  const cursorHandlers = useCursorHandlers();
  let pauseTime = 0;
  let mediaElement;
  
  function playVideo(event){
    mediaElement = event.target;
    if (mediaElement.nodeName === 'ARTICLE'){
      mediaElement = mediaElement.querySelectorAll('video')[0];
    } else {
      mediaElement = mediaElement.parentNode.closest('article').querySelectorAll('video')[0];
    }
    mediaElement.currentTime = pauseTime;
    const isPlaying = mediaElement.currentTime > 0 && !mediaElement.paused && !mediaElement.ended && mediaElement.readyState > mediaElement.HAVE_CURRENT_DATA;
    if (!isPlaying) {
      mediaElement.play();
    }
  }
  
  function stopVideo(){
    document.querySelectorAll('video').forEach(function(video){
      const isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > video.HAVE_CURRENT_DATA;
      if (isPlaying) {
        video.pause();
      }
    });
  }

  const itemRefs = useRef([]);
    
  function scrolleable(){
    if (isMobile) {
      for (let key in itemRefs.current) {
        let item = itemRefs.current[key].querySelectorAll('video')[0];
        if (item.classList.contains('lazyloaded')){
          const itemPosition = item.getBoundingClientRect().top;
          if (itemPosition < (window.innerHeight * 0.5) && itemPosition > 0 ) {
            if (item.paused){
              item.play();
            }
          } else {
            item.pause();
          }
        }
      }
    }
  } 

  useEffect(() => {
    window.addEventListener('scroll', scrolleable);
    return () => window.removeEventListener('scroll', scrolleable);
  }, []);

  const data = useStaticQuery(graphql`
    query MyQueryPortfolio {
      allMdx(sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            body
            frontmatter {
              published
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
          edge.node.frontmatter.published ? (
            <article
              ref={(element) => itemRefs.current[index] = element}
              key={edge.node.id}
              id={index}
              className={item}
              onMouseEnter={playVideo}
              onMouseLeave={stopVideo}
              role="presentation"
            >
              <video
                className={videoClasses}
                preload="none"
                playsInline
                muted
                loop
                poster={edge.node.frontmatter.image+".webp"}
              >
                <source
                  src={edge.node.frontmatter.video+".mp4"}
                  type="video/mp4"
                />
              </video>
              <div
                className={description}
              >
                <h3
                  className={name}
                >
                  <a
                    href={edge.node.frontmatter.link}
                    title="Visit website"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...cursorHandlers}
                  >
                    {edge.node.frontmatter.title}
                  </a>
                </h3>
                <p
                  className={text}
                >
                  {edge.node.body}
                </p>
                { edge.node.frontmatter.awards ? (
                  <>
                    <p
                      className={adward}
                    >
                      <img
                        src="/images/award.svg"
                        alt="We won an adward!"
                        width="20"
                        height="20"
                      />
                      {edge.node.frontmatter.awards}
                    </p>
                  </>
                ) : ( null ) }
              </div>
            </article>
          ) : ( null )
        ))
      }
      </div>
    </section>
  )
}

export default Portfolio;
