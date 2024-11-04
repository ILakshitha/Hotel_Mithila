import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };
    

    return (
        <div>
            <Accordion
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={[
                    expanded
                        ? {
                            '& .MuiAccordion-region': {
                                height: 'auto',
                            },
                            '& .MuiAccordionDetails-root': {
                                display: 'block',
                            },
                        }
                        : {
                            '& .MuiAccordion-region': {
                                height: 0,
                            },
                            '& .MuiAccordionDetails-root': {
                                display: 'none',
                            },
                        },
                ]}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>What is MadHack 3.0?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MadHack 3.0 is a coding competition where enthusiasts
                        come together to showcase their skills in mobile app development. It's a platform to learn, collaborate, and compete in creating innovative solutions for real-world challenges
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Who can participate in MadHack 3.0?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MadHack 3.0 is open to all undergraduate students! Whether you're a seasoned developer or just starting,
                        we welcome participants of all skill levels and backgrounds.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>****************3.0?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To register, visit our website and navigate to the registration page. Fill in
                        the required details for yourself and your team members (if applicable) to secure your spot.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Wh**************?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MadHack 3.0 is open to all undergraduate students! Whether you're a seasoned developer or just starting,
                        we welcome participants of all skill levels and backgrounds.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Do I***************************</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        Yes, for the Initial Round and the Final Hackathon, participants
                        are required to form teams of three or four members each.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>What if ***************+++++++++++?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Absolutely! MadHack 3.0 is designed for participants of all skill levels. It's a great opportunity for beginners 
                    to learn and for experienced coders to showcase their expertise.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Is the usage of Flutter mandatory for MadHack 3.0 projects?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    No, it's not mandatory to use Flutter for your projects in MadHack 3.0. While we have Flutter sessions to help you, you are free to use other frameworks 
                    or technologies that best suit your project requirements.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            


        </div>
    );
}