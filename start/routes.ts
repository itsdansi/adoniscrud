/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import UserController from 'App/Controllers/Http/UsersController'
// import CategoryController from 'App/Controllers/Http/Backend/CategoriesController'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
Route.get('/users', async (ctx) => {
  return new UserController().index(ctx)
})

// Route.get('/categories', ({ view }) => {
//   return view.render('backend/category.index')
// })
// Route.get('/categories/create', ({ view }) => {
//   return view.render('backend/category.create')
// }).as('category.create')
// Route.post('/categories/store', async (ctx) => {
//   return new CategoryController().index(ctx)
// }).as('category.store')

Route.group(() => {
  Route.resource('/categories', 'CategoriesController')
}).namespace(`App/Controllers/Http/Backend`)

Route.group(() => {
  Route.resource('/products', 'ProductsController')
}).namespace(`App/Controllers/Http/Backend`)
