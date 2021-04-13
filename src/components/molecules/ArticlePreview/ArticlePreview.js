import React from 'react'
import css from './ArticlePreview.module.scss'
import Author from 'components/atoms/Author/Author'
import Heading from 'components/atoms/Heading/Heading'
import { HeadingTypes } from 'utils/const'
import Text from 'components/atoms/Text/Text'
import Tags from 'components/atoms/Tag/Tags'
import SocialReaction from 'components/molecules/SocialReaction/SocialReaction'

const ArticlePreview = ({data, tag = 'div'}) => {
  const {
    image,
    author,
    title,
    tags,
    description,
    social
  } = data
  const TagName = tag

  return (
    <TagName className={css.wrapper}>
      {image &&
        <img
          className={css.image}
          src={image}
          alt={title}
        />
      }
      <Author
        className={css.author}
      >
        { author }
      </Author>
      <Heading
        className={css.heading}
        type={HeadingTypes.H3}
      >
        { title }
      </Heading>
      <Text
        className={css.description}
      >
        { description }
      </Text>
      <Tags
        className={css.tags}
      >
        { tags }
      </Tags>
      <SocialReaction
        className={css.social}
        data={social}
        handleClickLike={() => {}}
        handleClickDislike={() => {}}
        handleClickComment={() => {}}
      />
    </TagName>
  )
}

export default ArticlePreview
