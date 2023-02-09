import React from "react";

function Home() {

    return(
        <>
            <div className="columns-2 v-screen text-3xl text-white py-5 bg-green-500">
                <h1>Language Learning Tracker</h1>
                <h1>Current Language: Norwegian</h1>
            </div>
            <div className="flex flex-col md:flex-row">
                
            </div>
        </>
    );
}

const HomePage = () => {
    return <Home />;
};

export default HomePage;