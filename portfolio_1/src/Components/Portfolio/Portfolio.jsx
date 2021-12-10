import React from 'react'
import styles from "../Portfolio/Portfolio.module.css"
import Typewriter from "typewriter-effect";
import profilepic from "../Images/Profile_5.png"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Portfolio = () => {
    return (
        <>
        <Container id="home" maxWidth="xl" className={styles.contain}>
            <div className={styles.badge}>
                <img style={{width: "100%", height: "100%", borderRadius: "50%"}} alt="pavan" src={profilepic}/>
            </div>
            <Box className={styles.name}>
                <h2>Pavan Kalyan</h2>
            </Box>
            <Box className={styles.typebox}>
                <h2>
                <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter, options)=> {

                            typewriter
                            
                            .typeString("Full Stack Web Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                        }}
                    />
                </h2>
            </Box>
            <Box className={styles.name}>
                <p>Dedicated and Efficient Full-stack Web Developer with a passion to build and optimize user-focused websites. 
                    Self-motivated and task driven professional with a knack to learn new technologies. 
                    I believe in the power of programming to transform and improve the lives of people around the world.
               </p>
            </Box>
        </Container>
        </>
    )
}

export {Portfolio}
