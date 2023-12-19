import React from 'react'
import "./Category.css"
import { Fade,Slide } from 'react-awesome-reveal';
export default function Category() {
    const CategoryData=[
        {
            img:"/assets/category-1.png",
            name:"Toys"
        },
        {
            img:"/assets/category-2.png",
            name:"Gifts"
        },
        {
            img:"/assets/category-3.png",
            name:"Decors"
        },
        {
            img:"/assets/category-4.png",
            name:"snacks"
        },
        {
            img:"/assets/category-5.png",
            name:"Cloths"
        },
        {
            img:"/assets/category-6.png",
            name:"Sweets"
        },
        {
            img:"/assets/category-7.png",
            name:"claus"
        },
        {
            img:"/assets/category-8.png",
            name:"More"
        }
    ];
    const CardData=[
        {
            price:"₹560.20",
            img:"/assets/shopping-1.jpg",
            name:"Drum Decors"
        },
        {
            price:"₹610.20",
            img:"/assets/shopping-2.jpg",
            name:"Bell Decors" 
        },
        {
            price:"₹360.20",
            img:"/assets/shopping-3.jpg",
            name:"Santa Cap pack"
        },
        {
            price:"₹2050.20",
            img:"/assets/shopping-4.jpg",
            name:"Gift Decors" 
        }
    ]
  return (
    <>
    <section className='category' id='Gifts'>
        <div className="container category-container">
  
            <img src="/assets/bg-png.png" alt="bg" className="category-bg" />
          
            <h2 className="container-header">
                shop by our <span>festive</span> Categories
            </h2>
            <p className='container-description'>
               our wide range of categories are created using the best materials to create an amazing white christmas effect. 
            </p>
            <div className="category-flex">
                {CategoryData.map((item,index)=>(
                    <Fade cascade={false} delay={index*300} duration={600} direction='up' triggerOnce={true}>
                    <div className="category-card" key={index}>
                    <img src={item.img}/>
                    <h4>{item.name}</h4>
                </div>
                </Fade>
                ))}
            </div>
        </div>
    </section>

    <section className='shopping-container'>
        <div className="container-header">
            <h2 className="container-header">
                Finish your <span>shopping</span> checklist
            </h2>
            <h6 className="description">
                It's easy to forget all the extra bits and pieces you'll need throughout christmas, so to save any last minute dashes, checklist.
            </h6>
            <div className="shopping-grid">
               
                {CardData.map((item,index)=>(
                    <Fade cascade={false} delay={index*300} duration={600} direction='up' triggerOnce={true}>
                     <div className="shopping-card" key={index}>
                     <h3>{item.price}</h3>
                     <img src={item.img} />
                     <h4>{item.name}</h4>
                 </div>
                 </Fade>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}
