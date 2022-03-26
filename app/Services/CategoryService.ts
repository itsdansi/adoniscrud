import Category from 'App/Models/Category'
export default class CategoryService {
  public async index() {
    const categories = await Category.all()
    return categories
  }

  public async create(data: any) {
    const category = new Category()
    category.name = data.name
    category.icon = data.icon
    category.slug = data.slug
    await category.save()
    return category
  }

  // public async update(id: number, data: any) {
  //   const category = await Category.find(id)
  //   category.name = data.name
  //   category.icon = data.icon
  //   category.slug = data.slug
  //   await category.save()
  //   return category
  // }

  // public async delete(id: number) {
  //   const category = await Category.find(id)
  //   await category.delete()
  //   return category
  // }
}
