import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Backedn/Role'

export default class RoleSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await Role.createMany([{ role: 'admin' }, { role: 'user' }])
  }
}
