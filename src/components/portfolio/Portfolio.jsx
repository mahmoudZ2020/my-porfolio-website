import React from 'react'
import './portfolio.css'
import fo from '../../assets/fo.jpg'
import cr from '../../assets/cr.png'
import wa from '../../assets/wa.png'
import to from '../../assets/to.png'
import po from '../../assets/po.png'
import sb from '../../assets/sb.png'



const data = [
  {
    id:1,
    image: fo,
    title: 'Food & Menu Website',
    github: 'https://github.com/mahmoudZ2020/Food.com' ,
    demo: 'https://github.com' ,
  },
  {
    id:2,
    image: cr,
    title: 'Products Management System',
    github: 'https://github.com' ,
    demo: 'https://github.com' ,
  },
  {
    id:3,
    image: wa,
    title: 'Weather Web Application',
    github: 'https://github.com' ,
    demo: 'https://github.com' ,
  },
  {
    id:4,
    image: to,
    title: 'Todo List App',
    github: 'https://github.com' ,
    demo: 'https://github.com' ,
  },
  {
    id:5,
    image: po,
    title: 'Personal Portfolio Website',
    github: 'https://github.com/mahmoudZ2020/my-porfolio-website' ,
    demo: 'https://mahmoudz2020.github.io/my-porfolio-website' ,
  },
  {
    id:6,
    image: sb,
    title: 'Starbucks Brand Website',
    github: 'https://github.com' ,
    demo: 'https://github.com' ,
  }
 

]

function portfolio() {
  return (
    <section id='portfolio'>
      <h5>Some of My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              
        <article key={id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="portfolio__item-cta">
          <a href= {github}  className="btn btn-primary" target="_blank"> GitHub</a>
          <a href={demo} className="btn" target="_blank"> Live Demo</a>
       </div>
      </article>

            )
          }
          )
        }
      </div>
    </section>
  )
}

export default portfolio
