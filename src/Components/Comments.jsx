import React from 'react'

const Comments = () => {
    const itemcomm= [
        
            { imgs:"https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg",
         name :"Anoop Vasudevan        il y a 1 an",
        body:"  Man...thanks for these videos. I bought something in Udemy, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",

        },
        { imgs:"https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg",
        name :"Anoop Vasudevan        il y a 1 an",
       body:"  Man...thanks for these videos. I bought something in Udemy, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",

       },
       { imgs:"https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg",
       name :"Anoop Vasudevan        il y a 1 an",
      body:"  Man...thanks for these videos. I bought something in Udemy, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",

      },
      { imgs:"https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg",
      name :"Anoop Vasudevan        il y a 1 an",
     body:"  Man...thanks for these videos. I bought something in Udemy, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",

     },
     { imgs:"https://cdn.futura-sciences.com/buildsv6/images/wide1920/6/5/2/652a7adb1b_98148_01-intro-773.jpg",
     name :"Anoop Vasudevan        il y a 1 an",
    body:"  Man...thanks for these videos. I bought something in Udemy, and now Im watching your videos after each Udemy chapter to get more clarity on the topic.",

    }

    
    ]
    return (
        <div>
          {
              itemcomm.map(
              (el)=>(
                <div>
                <div style={{display:"flex"}}> <img style={{width:35, height:35 ,    borderRadius: 90}} src={el.imgs } alt="" /> 
                <h6> {el.name}</h6></div>
              
                <p>{el.body}</p>
                </div>
              )
                
                 
              )
              
          }  
        </div>
    )
}

export default Comments
