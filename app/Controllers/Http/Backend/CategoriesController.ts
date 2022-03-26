import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

// import View from '@ioc:Adonis/Core/View'

export default class CategoriesController {
  public async index({ view }: HttpContextContract) {
    const categories = await Category.all()
    return view.render('backend/category/index', { categories })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('backend/category/create')
  }
  public async store({ request, response }: HttpContextContract) {
    await Category.create(request.all())
    return response.redirect('/categories')
  }

  public async edit({ params, view }: HttpContextContract) {
    const category = await Category.find(params.id)
    return view.render('backend/category/edit', { category })
  }

  public async update({ params, request, response }: HttpContextContract) {
    const category = await Category.find(params.id)
    category?.merge(request.only(['name', 'icon', 'slug']))
    await category?.save()
    return response.redirect('/categories')
  }

  public async destroy({ params, response }: HttpContextContract) {
    const category = await Category.find(params.id)
    await category?.delete()
    return response.redirect('/categories')
  }
}
