import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/brewCard.css'
import RecipeSpotlight from './RecipeSpotlight';
import RecipeSummary from './RecipeSummary';
import Filter from './Filter';

const Recipes = (props) => {

    const [ recipes, setRecipes ] = useState(null)
    const [ displayedRecipes, setDisplayedRecipes ] = useState(null)
    const [ showMe, setShowMe ] = useState(false)
    const [ showFilter, setShowFilter ] = useState(false)
    const [ runfetch, runFetch ] = useState(0)
    const [ brewState, setBrewState ] = useState()
    // const [reRender, setReRender] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8000/Recipes?userId=${props.userId}`)
            .then(res => res.json())
            .then(json => displayBrews(json))
    }, [props.userId, runfetch])

    let displayBrews = (json) => {
        console.log(json)
        setRecipes(json)
        setDisplayedRecipes(json)
        // setReRender(1)
    }

    let recipeSpotlight = (event, brew) => {
        console.log(event)
        console.log(brew)
        setBrewState(brew)
        setShowMe(!showMe)
        runFetch(runfetch + 1)
    }

    let returnToRecipes = () => {
        setShowMe(!showMe)
        runFetch(runfetch + 1)
    }

    let filterButton = () => {
        console.log(recipes)
        setShowFilter(!showFilter)
    }

    let resetFilter = (event) => {
        setDisplayedRecipes(recipes)
        console.log(event)
        // event.target[0].value = ""
    }
    
    let onFilterSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(recipes)
        console.log(event.target)
        console.log(event.target[0].value)
        filter(event)
        // event.target.map((target, index) => {
        //     console.log(index, target.name)
        // })


        setShowFilter(!showFilter)
        // let filteredArray = recipes.filter(recipe => {
        //     recipe[event.name] === event.target.value
        // })
        // console.log(filteredArray)
    }

    let filter = (event) => {
        if(event.target[0].value !== "") {
            let filteredArray = displayedRecipes.filter((recipe, index) =>  recipe.CoffeeInformation['origin'] === event.target[0].value)
            console.log(filteredArray)
            setDisplayedRecipes(filteredArray)

        } else if (event.target[1].value !== "") {
            let filteredArray = displayedRecipes.filter((recipe, index) =>  recipe.CoffeeInformation['producer'] === event.target[1].value)
            console.log(filteredArray)
            setDisplayedRecipes(filteredArray)
        } else if (event.target[2].value !== "") {
            let filteredArray = displayedRecipes.filter((recipe, index) =>  recipe.CoffeeInformation['process'] === event.target[2].value)
            console.log(filteredArray)
            setDisplayedRecipes(filteredArray)
        
        } else if (event.target[3].value !== "") {
            let filteredArray = displayedRecipes.filter((recipe, index) =>  recipe.CoffeeInformation['roaster'] === event.target[3].value)
            console.log(filteredArray)
            setDisplayedRecipes(filteredArray)
        
        } else if (event.target[4].value !== "") {
            let filteredArray = displayedRecipes.filter((recipe, index) =>  recipe.dateCreated === event.target[4].value)
            console.log(filteredArray)
            setDisplayedRecipes(filteredArray)
        
        } else if (event.target[5].value !== "") {
            let filteredArray = displayedRecipes.filter((recipe, index) =>  recipe.RecipeInformation['waterAmount'] === event.target[5].value)
            console.log(filteredArray)
            setDisplayedRecipes(filteredArray)
        
        } else if (event.target[6].value !== "") {
            let filteredArray = displayedRecipes.filter((recipe, index) =>  recipe.CoffeeInformation['rating'] === event.target[6].value)
            console.log(filteredArray)
            setDisplayedRecipes(filteredArray)
        } else {
            console.log('undefined')
            return undefined
        }
    }


    if(!showMe) {
        return (
            <div className="page-container">
                <div className='main-heading'>
                    <h2 className="page-heading">Recipes</h2>
                </div>

                <div className='page-content'>
                    <div className='recipe-container'>
                        <div className="buttons-container">
                            <div>
                                <button onClick={filterButton}>Filter</button>
                                <NavLink to="/NewRecipe"><button>New Recipe</button></NavLink>
                            </div>
                        </div>
                        {showFilter && 
                            <Filter submit={onFilterSubmit} reset={resetFilter}/>
                        }
                        {displayedRecipes && displayedRecipes.map((brew, index) => {
                            return <RecipeSummary key={index} index={index} brew={brew} recipeSpotlight={recipeSpotlight} />
                        })}
                    </div>
                </div>
            </div>
        )
    } else {
        return <RecipeSpotlight brew={brewState} returnToRecipes={returnToRecipes} />
    }
}

export default Recipes