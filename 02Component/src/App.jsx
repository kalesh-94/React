
import React from 'react'
import Card from './Card'


const App = () => {

  const cardsData = [
  {
    title: "Mountain Escape",
    description: "A peaceful getaway in the mountains with fresh air and nature.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    tag: "Travel",
  },

  {
    title: "Modern Workspace",
    description: "A clean and minimal workspace setup for productivity.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    tag: "Design",
  },

  {
    title: "Healthy Breakfast",
    description: "A balanced and energizing morning meal with fruits and oats.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60",
    tag: "Food",
  },

  {
    title: "Night City Lights",
    description: "Experience the beauty of the city glowing under the night sky.",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=60",
    tag: "City",
  },
  {
    title: "Night City Lights",
    description: "Experience the beauty of the city glowing under the night sky.",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=60",
    tag: "City",
  },
  {
    title: "Healthy Breakfast",
    description: "A balanced and energizing morning meal with fruits and oats.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60",
    tag: "Food",
  },
  {
    title: "Night City Lights",
    description: "Experience the beauty of the city glowing under the night sky.",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=60",
    tag: "City",
  },
  {
    title: "Night City Lights",
    description: "Experience the beauty of the city glowing under the night sky.",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=60",
    tag: "City",
  },
    {
    title: "Healthy Breakfast",
    description: "A balanced and energizing morning meal with fruits and oats.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60",
    tag: "Food",
  },

    {
    title: "Healthy Breakfast",
    description: "A balanced and energizing morning meal with fruits and oats.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60",
    tag: "Food",
  },
];

  return (
    <>
    {cardsData.map((elem, idx)=>{
      return <div key={idx}> 
      <Card title={elem.title} description={elem.description} image={elem.image} tag={elem.tag}  /> 
      </div>
    })}
      
 
     
    </>
    
  )
}

export default App
