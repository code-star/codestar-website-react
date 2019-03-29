import React, { SFC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Button } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'

const socialMedias = {
  twitter: {
    name: 'Twitter',
    icon: faTwitter,
    makeUrl: (link: string, title: string, text: string) => `https://twitter.com/home?status=${encodeURI(`${text}\n${link}`)}`,
  },
  linkedin: {
    name: 'Linkedin',
    icon: faLinkedin,
    makeUrl: (link: string, title: string, text: string) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(link)}&title=${encodeURI(title)}&summary=${encodeURI(text)}`,
  },
  facebook: {
    name: 'Facebook',
    icon: faFacebook,
    makeUrl: (link: string, title: string, text: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURI(link)}`,
  },
}

type ShareButtonsProps = Readonly<{
  twitter?: boolean
  linkedin?: boolean
  facebook?: boolean
  color?: ButtonProps['color']
  size?: ButtonProps['size']
  link: string
  title?: string
  text?: string
}>

export const ShareButtons: SFC<ShareButtonsProps> = ({
  twitter,
  linkedin,
  facebook,
  color,
  size,
  link,
  title,
  text,
}: ShareButtonsProps) => {
  const toRender = []
  if (twitter) {
    toRender.push(socialMedias.twitter)
  }
  if (linkedin) {
    toRender.push(socialMedias.linkedin)
  }
  if (facebook) {
    toRender.push(socialMedias.facebook)
  }
  const buttons = toRender.map((socialMedia, i) => (
    <Button
      key={i}
      color={color}
      size={size}
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={socialMedia.name}
      href={socialMedia.makeUrl(link, title || '', text || '')}
      style={{
        minWidth: 32,
      }}
    >
      <FontAwesomeIcon icon={socialMedia.icon} size="lg" />
    </Button>
  ))

  return <>{buttons}</>
}
