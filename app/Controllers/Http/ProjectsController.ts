// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Project from 'App/Models/Project'

export default class ProjectsController {
  public async index({ view }) {
    const PROJECTS = await Project.query()
      .select('*')
      .from('projects')

    return view.render('projects', {
      projects: PROJECTS,
      params: '/projects'
    })
  }
}
