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
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome', { params: '/' })
})

Route.get('/about', async ({ view }) => {
  return view.render('about', { params: '/about'})
})

Route.get('/projects', 'ProjectsController.index')
Route.get('/contact', 'ContactsController.index')
Route.post('/send', 'ContactsController.send')
