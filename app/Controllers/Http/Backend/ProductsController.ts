import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import Category from 'App/Models/Category'

export default class ProductsController {
  //   public async index({ view }: HttpContextContract) {
  //     return view.render('backend/product/index')
  //   }

  //   public async create({ view }: HttpContextContract) {
  //     return view.render('backend/product/create')
  //   }

  public async index({ view }: HttpContextContract) {
    const products = await Product.all()
    return view.render('backend/product/index', { products })
  }

  public async create({ view }: HttpContextContract) {
    const categories = await Category.all()
    return view.render('backend/product/create', { categories })
  }
  public async store({ request, response }: HttpContextContract) {
    await Product.create(request.all())
    return response.redirect('/products')
  }

  public async edit({ params, view }: HttpContextContract) {
    const product = await Product.find(params.id)
    return view.render('backend/Product/edit', { product })
  }

  public async update({ params, request, response }: HttpContextContract) {
    const product = await Product.find(params.id)
    product?.merge(request.only(['name', 'description', 'price', 'image', 'category_id']))
    await product?.save()
    return response.redirect('/products')
  }

  public async destroy({ params, response }: HttpContextContract) {
    const product = await Product.find(params.id)
    await product?.delete()
    return response.redirect('/categories')
  }
}
