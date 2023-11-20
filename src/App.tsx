import { useState } from 'react';
import './App.css';
import Category from './Category';

const stack = [
    "React",
    "React native",
    "Vue",
    "Laravel",
    "Node",
    "GraphQL"
]

const projects = [
    {
        name: "Chem-pe",
        image: "1.png",
        stack: [
            0,
            3
        ]
    },
    {
        name: "Stor",
        image: "3.png",
        stack: [
            0,
            3
        ]
    },
    {
        name: "Four eyes",
        image: "5.png",
        stack: [
            2,
            3
        ]
    },
]

const App = () => {

    const [selectedStackIndex, setSelectedStackIndex] = useState<number>();


    let selectedProjects = projects;

    if (selectedStackIndex != undefined) selectedProjects = projects.filter((project) => project.stack.includes(selectedStackIndex))

    const onClickProject = (i: number) => {
        setSelectedStackIndex(i);
    }

    return (
        <>
            <div>
                <div style={{ width: "60%" }} className='mx-auto p-5 d-flex flex-column justify-content-center vh-100'>
                    <h1 id="intro" className=''>
                        I <span className='text-primary'>develop ideas</span> into
                        <br />
                        <span className='text-primary'>amazing products</span>
                    </h1>
                    <p id='sub'>I'm Josh a fullstack developer</p>
                    <div className='d-flex'>
                        <a href="#portfolio" className='btn btn-primary'>
                            Get In Touch
                        </a>
                        <a href="#portfolio" className='btn btn-outline-primary ms-4'>
                            View Portfolio
                        </a>
                    </div>
                </div>
            </div>
            <div id="portfolio" className='d-flex flex-wrap justify-content-center my-4 px-1'>
                <Category
                    active={selectedStackIndex === undefined}
                    onClick={() => setSelectedStackIndex(undefined)}
                >
                    All
                </Category>
                {
                    stack.map((stack, i) => {
                        return (
                            <Category
                                key={i}
                                active={selectedStackIndex === i}
                                onClick={() => onClickProject(i)}
                            >
                                {stack}
                            </Category>
                        )
                    })
                }
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        selectedProjects.map((project, i) => {
                            return (
                                <div
                                    key={i}
                                    className='col-md-6 col-lg-4 p-4'
                                >
                                    <div className='border p-4'>
                                        <h4>{project.name}</h4>
                                        <div>
                                            <img className='img-fluid' src={`/imgs/${project.image}`} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="social" className='fixed'>
                <div className='d-flex align-items-center vh-100'>
                    <div>
                        {
                            [
                                {
                                    text: "LinkedIn",
                                    link: ""
                                },
                                {
                                    text: "Twitter",
                                    link: ""
                                },
                                {
                                    text: "Github",
                                    link: ""
                                }
                            ].map((social, i) => {
                                return (
                                    <a
                                        key={i}
                                        href={social.link}
                                        className='d-block mt-4 ms-2'
                                    >
                                        {social.text}
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
