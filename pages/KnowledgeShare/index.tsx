import React from "react";
import styles from "./KnowledgeShare.module.scss";
import Head from "next/head";
/**
 * 1. Selectors
 *  nth-child
 *  hover
 *  active
 * 2. Variables
 *
 * 3. Flex (https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
 *
 * 4. Grid (https://css-tricks.com/snippets/css/complete-guide-grid/)
 *
 * 3. Text
 *  Line-height vs Font size
 *  Font size
 *  Decoration
 *  Transformation
 *  Letter spacing
 *  Hover states
 *
 * 4.
 *
 */

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
        <div className={styles.title}>
          {/* <h1 className={styles.shaysH1}>Knowledge Share</h1> */}
        </div>
        <div className={styles.yellow}></div>
        <div className={styles.green}></div>
        <div className={styles.blue}></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default KnowledgeShare;
