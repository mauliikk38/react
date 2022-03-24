import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import {useParams} from "react-router-dom";
import styled from 'styled-components';

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() =>{
        fetchDetails();
    }, [params.name]);

  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt=""/>
        </div>
        <Info>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
            <Button className={activeTab === 'making' ? 'active' : ''} onClick={() => setActiveTab('making')}>How to make</Button>
            <Button className={activeTab === 'dishtype' ? 'active' : ''} onClick={() => setActiveTab('dishtype')}>Dish Type</Button>
            <Button className={activeTab === 'diet' ? 'active' : ''} onClick={() => setActiveTab('diet')}>Diet</Button>
            
            
            {activeTab === 'instructions' && (                
                <ul>
                <li dangerouslySetInnerHTML={{__html: details.summary}}></li>
                {/* <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>     */}
                </ul>
            )}

            {activeTab === 'ingredients' && (
                <ul>
                {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            )}
            {activeTab === 'making' && (                
                <ul>
                {/* <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3> */}
                <h3>How To Make:</h3>
                <li dangerouslySetInnerHTML={{__html: details.instructions}}></li> 
                <h3>Ready In Minutes:</h3>
                <p dangerouslySetInnerHTML={{__html: details.readyInMinutes}}></p>    
                </ul>
            )}
            {activeTab === 'dishtype' && (                
                <ul>
                 <h3>Dish Type:</h3>                 
                 <li dangerouslySetInnerHTML={{__html: details.dishTypes}}></li> 
                 <h3>Vegetarian:</h3>
                 <li dangerouslySetInnerHTML={{__html: details.vegetarian}}></li>  
                 <h3>Vegan:</h3>
                 <li dangerouslySetInnerHTML={{__html: details.vegan}}></li> 
                 </ul>
            )}
            {activeTab === 'diet' && (                
                <ul>  
                 <h3>Diet:</h3>  
                 {details.diets.map((diet) => (
                     <li dangerouslySetInnerHTML={{__html: diet}}></li>
                 ))}                
                 {/* <li dangerouslySetInnerHTML={{__html: details.diets}}></li> */}
                 <h3>Gluten Free:</h3>   
                 <li dangerouslySetInnerHTML={{__html: details.glutenFree}}></li>   
                </ul>
            )}                                             
        </Info>         
        </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size: 2rem;
        line-height: 2.5rem;
        margin: 1rem;
        font-weight: 100;
    }
    ul{
        margin-top: 2rem;
        font-weight: 100;
        
        }
    p{
        font-size: 2rem;
    }
    h3{
        text-align: left;
        
    }
`;

const Button = styled.button`
    padding: 1rem 1rem;
    color: #313131;
    background: white;
    border:1px solid black;
    border-radius: 1rem;
    margin-right: 1.5rem;
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: 0.8rem;
`;

const Info = styled.div`
    margin-left: 10rem;
    `;

export default Recipe