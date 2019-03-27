import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await User.find()
    return res.json(users)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const { email, firstName } = req.body

    if (!email) {
      return res.json({ error: 'Email not found' })
    }

    if (!firstName) {
      return res.json({ error: 'FirstName not found' })
    }

    const user = await User.create(req.body)
    return res.json({
      user, fullName: user.fullName()
    })
  }
}

export default new UserController()
