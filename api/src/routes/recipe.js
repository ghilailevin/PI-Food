const router = require('express').Router()
const fetch = require('node-fetch')
const { Diet } = require('../db.js')
const { Recipe } = require('../db.js')
require('dotenv').config()
const { API_KEY } = process.env
const { Op } = require('sequelize')


router.get('/recipes', async (req, res) =>{
    const { name } = req.query
    try{
        if(name) {
            let db = await Recipe.findAll({where:{name:{[Op.substring]:name}}})
            let recipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&titleMatch=${name}&apiKey=${API_KEY}`)
            recipes = await recipes.json()
            if(db.length === 0 && recipes.totalResults === 0) {
                res.status(404).json([]) 
            }
            let results = []
            recipes.results.map(item => results.push({
                id:item.id,
                name:item.title,
                image:item.image,
                diets:item.diets
            }) 
            )
            
            res.json(db.concat(results))
        } else {
            let db = await Recipe.findAll()
            let recipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`)
            recipes = await recipes.json()
            if(db.length === 0 && recipes.totalResults === 0) {
                res.status(404).json("ERROR")
            }
            let results = []
            recipes.results.map(item => results.push({
                id:item.id,
                name:item.title,
                image:item.image,
                diets:item.diets
            }) 
            )
            
            res.json(db.concat(results))
        }
    } catch{
        res.status(404).json("ERROR")
    }
});

router.get('/recipes/:id', async (req, res) =>{
    const { id } = req.params
    try{
        let db = await Recipe.findByPk(id)    
        res.json(db)
    } catch {
        try{
            let recipes = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
            recipes = await recipes.json() 
            let results = {
                name: recipes.title,
                summary: recipes.summary?recipes.summary.replace(/<[^>]*>?/gm, ''):'',
                score: recipes.spoonacularScore,
                healthyFood: recipes.diets,
                healthScore: recipes.healthScore,
                stepByStep: recipes.instructions?recipes.instructions.replace(/<[^>]*>?/gm, ''):'',
                image: recipes.image
            }
            res.json(results)
        }
        catch{
            res.status(404).json("ERROR")
        }
    }
})

router.get('/types', async (req, res) => {
    try{     
        let db = await Diet.findAll();
          
        if(db.length < 1){
            
            const dietsTypes = ["gluten free","ketogenic","vegetarian","lacto ovo vegetarian","dairy free","vegan","pescetarian","paleo","primal","whole30"]
            dietsTypes.forEach(element => {
                Diet.create({name:element})
            });
            db = await Diet.findAll()
            Diet.sync()
        }
        res.status(200).json(db)
    } catch{
        res.status(404).json("ERROR")
    }
})

router.post('/recipes', async (req, res) => {
   const { name, summary, healthyFood, score, stepByStep } = req.body;
   if(!name || !summary) return res.status(400).json({message: "This field cannot be empy"})
    const recipe = await Recipe.create({name, summary, healthyFood, score, stepByStep})
    return res.status(200).json({name, summary, healthyFood, score, stepByStep}) 
})

module.exports = router