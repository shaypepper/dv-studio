import React from "react";
import styles from "./KnowledgeShare.module.scss";
import Head from "next/head";

const KnowledgeShare = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Piazzolla:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.container}>
        <svg viewBox="-10 -10 120 120">
          <rect height="100" width="100" fill="coral" />
          <g>
          {(new Array(10)).fill(true).map((_, i) => (
            <React.Fragment key={i * i}>
              <line x1={i*10} y1={0} x2={i * 10}  y2={100} stroke="whitesmoke" strokeWidth="0.2"/>
              <line x1={0} y1={i*10} x2={100} y2={i * 10} stroke="whitesmoke" strokeWidth="0.2"/>
            </ React.Fragment>
          ))}
          </g>
          
          <g fill="mediumpurple" strokeWidth="3" stroke="black">
            <rect 
              height="10" 
              width="20" 
              rx="3" 
              x="20"
              y="20"
              // transform="translate(20 20)"
              style={{
                transition: "fill 300ms ease"
              }}
              />
            <circle 
              r="5" 
              cx="30" 
              cy="10" 
              />
          </g>
          <path d="M 50, 50 V 10 H 10  Z" /> 
          <g>
            <g>
              <circle cx={0}  cy={0} r="4" fill="CornflowerBlue" />
              <text fontSize="2" x="-1.5" y="-0.75" fill="white">x=0</text>
              <text fontSize="2" x="-1.5" y="1.5" fill="white">y=0</text>
            </g>

            <g transform="translate(100 100)">
              <circle r="4" fill="CornflowerBlue" />
              <text fontSize="2" x="-2.5" y="-0.75" fill="white">x=100</text>
              <text fontSize="2" x="-2.5" y="2" fill="white">y=100</text>
            </g>

            <g transform="translate(100 0)">
              <circle r="4" fill="CornflowerBlue" />
              <text fontSize="2" x="-2.5" y="-0.75" fill="white">x=100</text>
              <text fontSize="2" x="-2.5" y="2" fill="white">y=0</text>
            </g>

            <g transform="translate(0 100)">
              <circle r="4" fill="CornflowerBlue" />
              <text fontSize="2" x="-2.5" y="-0.75" fill="white">x=0</text>
              <text fontSize="2" x="-2.5" y="2" fill="white">y=100</text>
            </g>
          </g>

          
        </svg>

      </div>
    </>
  );
};

export default KnowledgeShare;
