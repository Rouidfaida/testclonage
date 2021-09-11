import React from 'react'

const Suggestion = () => {
    let vedio=[
        
        
        { src:"https://www.youtube.com/embed/9hb_0TZ_MVI?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
        title:"ReactJS Tutorial - 2 - Hello World"
    
        },
        { src:"https://www.youtube.com/embed/Cla1WwguArA",
        title:"ReactJS Tutorial - 5 - Functional Components",
        
    
        },
        { src:"https://www.youtube.com/embed/w7ejDZ8SWv8",
        title:"ReactJS Tutorial - 5 - Functional Components",
    
        },
        { src:"https://www.youtube.com/embed/w7ejDZ8SWv8",
        title:"ReactJS Tutorial - 5 - Functional Components",
    
        },
        { src:"https://www.youtube.com/embed/w7ejDZ8SWv8",
        title:"ReactJS Tutorial - 5 - Functional Components",
    
        },
        { src:"https://www.youtube.com/embed/w7ejDZ8SWv8",
        title:"ReactJS Tutorial - 5 - Functional Components",
    
        },
        { src:"https://www.youtube.com/embed/w7ejDZ8SWv8",
        title:"ReactJS Tutorial - 5 - Functional Components",
    
        },
        { src:"https://www.youtube.com/embed/w7ejDZ8SWv8",
        title:"ReactJS Tutorial - 5 - Functional Components",
    
        },
    ]
        return (
            <div >
                {
                    vedio.map(
                     (el) => (
                         <div style={{display:"flex"}}>
                             <iframe style={{ marginBottom:20}} width="150" 
                height="100" 
                src={el.src}
                 title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write;
                   encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   <h6>{el.title}</h6>
                   
    
                         </div>
                     )
    
                    )
    
    
                }
                
            </div>
        )
    }
export default Suggestion
