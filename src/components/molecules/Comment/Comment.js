import React from 'react'
import css from './Comment.module.scss'
import classnames from 'classnames'
import SocialReaction from 'components/molecules/SocialReaction/SocialReaction'
import CommentAvatar from 'components/atoms/CommentAvatar/CommentAvatar'
import Text from 'components/atoms/Text/Text'

const Comment = ({
  data,
  className,
  tag = 'div',
  style
}) => {
  const {avatar, name, description, social} = data
  const TagName = tag

  return (
    <TagName
      className={classnames(css.wrapper, className)}
      style={{
        ...style
      }}
    >
      <CommentAvatar
        image={avatar}
        label={name}
        className={css.avatar}
      />
      <p className={css.name}>
        { name }
      </p>
      <Text className={css.description}>
        { description }
      </Text>
      {social &&
        <SocialReaction
          className={css.social}
          data={social}
        />
      }
    </TagName>
  )
}

export default Comment
