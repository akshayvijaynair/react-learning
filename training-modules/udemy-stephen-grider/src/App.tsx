import './App.css'
import LlmCard from "./app-0/Card.tsx";
import {Grid} from "@mui/material";

import gpt from './assets/siri.png';
import gemini from './assets/cortana.png';
import claude from './assets/alexa.png';
import App_1 from "./app-1/App_1.tsx";
import App_2 from "./app-2/App_2.tsx";

function App() {

    return (
        <>
            <Grid container spacing={2} margin={5}>
                <Grid item xs={3}>
                    <LlmCard image={gpt} title="GPT-4"></LlmCard>
                </Grid>
                <Grid item xs={3}>
                    <LlmCard image={gemini} title="Gemini"></LlmCard>
                </Grid>
                <Grid item xs={3}>
                    <LlmCard image={claude} title="Claude"></LlmCard>
                </Grid>
                <Grid item xs={3}>
                    <LlmCard image={gemini} title="Llamma"></LlmCard>
                </Grid>
            </Grid>

            <Grid container spacing={2} margin={5} sx={{ alignItems: "center"}}>
                <Grid item xs ={12}>
                    <App_1></App_1>
                </Grid>
            </Grid>

            <Grid container spacing={2} margin={5} sx={{ alignItems: "center"}}>
                <Grid item xs ={12}>
                    <App_2></App_2>
                </Grid>
            </Grid>
        </>
    )
}

export default App
