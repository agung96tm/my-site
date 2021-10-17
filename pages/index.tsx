import React, { useState } from "react";
// @ts-ignore
import ReactFullpage from "@fullpage/react-fullpage";

import { Greeting, Profile } from '../components';
import Menu from '../components/Menu';


const App = () => {
    const [reactFullAPI, setReactFullAPI] = useState(null);

    return (
        <>
            <Menu reactFullAPI={reactFullAPI}/>
            <ReactFullpage
                scrollingSpeed = {1000}
                sectionsColor={[
                    "#1A535C", "#102542", "#4ECDC4", "#F7FFF7",
                ]}
                render={({ fullpageApi }: any) => {
                    setReactFullAPI(fullpageApi);
                    return (
                        <div>
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <Greeting />
                                </div>
                                <div className="section">
                                    <Profile />
                                </div>
                                {/*<div className="section">*/}
                                {/*    <Job />*/}
                                {/*</div>*/}
                                {/*<div className="section">*/}
                                {/*    <Education />*/}
                                {/*</div>*/}
                                {/*<div className="section">*/}
                                {/*    <Job />*/}
                                {/*</div>*/}
                                {/*<div className="section">*/}
                                {/*    <Project />*/}
                                {/*</div>*/}
                                {/*<div className="section">*/}
                                {/*    <Contact />*/}
                                {/*</div>*/}
                            </ReactFullpage.Wrapper>
                        </div>
                    );
                }}
            />
        </>
    )
};


export default App;