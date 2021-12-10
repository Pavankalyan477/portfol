import React from 'react'
import styles from "./About.module.css"
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';

const About = () => {
    return (
        <Container id="about" maxWidth="xl" className={styles.home}>
            <Box className={styles.mainBox}>
                <Box className={styles.leftBox}>
                    <Box className={styles.infoBox}>
                        <h2>About Me</h2>
                        <p>
                            <strong>Hello,</strong> My name is <strong>Pavan Kalyan.</strong> I
                            am a <strong>Full Stack Web Developer</strong> recently graduated from <strong>Masai school</strong> and
                            looking for a career as a <strong>Full Stack Web Developer</strong>. 
                        </p>
                        <p>
                            I am from <strong>Palamaner, Andhra Pradesh</strong> and I've completed my <strong>Bachelor's in Electronics abd Communication Engineering</strong> from <strong>Mother Theresa Institute Of ENginerring And Technology (JNTUA).</strong>
                        </p>
                        <p>
                            I am interested in creating well designed or pixel-perfect Frontend with functionality and take on new 
                            challenges where I can learn more about web technologies.
                        </p>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export {About}
