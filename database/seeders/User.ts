import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/Backedn/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await User.createMany([
      {
        name: 'dansi',
        email: 'dansi@gmail.com',
        role_id: 1,
      },
      {
        name: 'darajannsi',
        email: 'rajan@gmail.com',
        role_id: 2,
      },
    ])
  }
}
