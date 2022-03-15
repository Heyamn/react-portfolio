import React from 'react';
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
    return (
        <div class='mt-6 text-left text-2xl text-gray-500'>
<Typewriter
                    options={{
                        strings: [
                            "Frontend Web Developer",
                            "Competitive Programmer",
                            "Gamer",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                    }}
                />    
        </div>
    );
}
export default TypeWriter;