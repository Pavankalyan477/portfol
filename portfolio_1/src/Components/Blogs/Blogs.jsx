import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import styles from "../Blogs/Blogs.module.css"
import blogData from "../Data/BlogsData.json"

const Blogs = () => {

    const newTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Container id="blogs" maxWidth="xl" className={styles.mainContainer}>
            <Box className={styles.title}>
                <span>Blogs</span>
            </Box>
            <Box className={styles.cardsContainer}>
                {
                    blogData.map(el => (
                        <Box onClick={() => newTab(el.link)} className={styles.blogCard}>
                            <Box className={styles.blogImg}>
                                <img src={el.img} className={styles.img} alt="blog"/>
                            </Box>
                            <Box className={styles.blogTitle}>
                                <h3>{el.title}</h3>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Container>
    )
}

export {Blogs}
