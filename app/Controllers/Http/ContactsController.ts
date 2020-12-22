// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Mail from '@ioc:Adonis/Addons/Mail'

export default class ContactsController {
  public index({ view }) {
    return view.render('contact', {
      params: '/contact'
    })
  }

  public async send({ response, request }) {
    const NAME = request.input('name')
    const TEXT = request.input('text')

    try {
      Mail.send(async (message) => {
        message
          .from('not.reply@zohomail.com')
          .to('grupo.mariz@outlook.com')
          .subject(NAME)
          .html(TEXT)
      })
    } catch(err) {
      console.log(err)
    }

    return response.redirect('back')
  }
}
