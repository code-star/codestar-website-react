import { get } from 'lodash'

export function convertEventResponseToModel(withDescription = false) {
  return (mEvent: any) => {
    const fallbackImage = 'https://res.cloudinary.com/codestar/image/upload/v1532409289/codestar.nl/meetup/codestar-night-logo.jpg'
    const result = {
      name: mEvent.name,
      time: mEvent.time,
      link: mEvent.link,
      coverUrl: get(mEvent, 'featured_photo.photo_link', fallbackImage),
      withDescription,
    }
    if (withDescription) {
      Object.assign(result, {
        description: mEvent.description,
      })
    }
    return result
  }
}
